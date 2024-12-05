import time
import random
import logging
import hashlib
from faker import Faker
from datetime import timedelta
from django.core.management.base import BaseCommand
from django.db import transaction
from django.db.models import Max
from mongoengine import connect, disconnect
from user.models import User, Perfil, PesquisaHabilidades, Agendamento

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Command(BaseCommand):
    help = 'Popula User (PostgreSQL) e Perfil, PesquisaHabilidades, Agendamento (MongoDB) com dados de teste.'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fake = Faker('pt_BR')

    def handle(self, *args, **kwargs):
        try:
            connect('userPerfil', host='localhost', port=27017)
            self.stdout.write(self.style.SUCCESS("Conexão ao MongoDB estabelecida."))

            quantidade_base = 10_000
            lote = 1

            while True:
                try:
                    self.stdout.write(self.style.SUCCESS(f"\n=== Iniciando lote {lote} ==="))

                    quantidade_atual = quantidade_base * (1 + (lote // 5))

                    self._gerar_lote_dados(quantidade_atual)

                    self.stdout.write(self.style.SUCCESS(f"=== Lote {lote} concluído. Aguardando 30 segundos... ===\n"))
                    time.sleep(30)
                    lote += 1

                except Exception as e:
                    self.stdout.write(self.style.ERROR(f"Erro no lote {lote}: {str(e)}"))
                    logger.error(f"Erro no lote {lote}: {str(e)}", exc_info=True)
                    time.sleep(5)
                    continue

        except KeyboardInterrupt:
            self.stdout.write(self.style.WARNING("\nProcesso interrompido pelo usuário."))
        finally:
            disconnect()
            self.stdout.write(self.style.SUCCESS("Conexão ao MongoDB encerrada."))

    def _gerar_lote_dados(self, quantidade):
        usuarios_criados = self._gerar_usuarios(quantidade)
        self.stdout.write(self.style.SUCCESS(f"Usuários criados: {len(usuarios_criados)}"))

        perfis_criados = self._gerar_perfis(len(usuarios_criados))
        self.stdout.write(self.style.SUCCESS(f"Perfis criados: {perfis_criados}"))

        pesquisas_criadas = self._gerar_pesquisa_habilidades(len(usuarios_criados))
        self.stdout.write(self.style.SUCCESS(f"Pesquisas de habilidades criadas: {pesquisas_criadas}"))

        agendamentos_criados = self._gerar_agendamentos(len(usuarios_criados))
        self.stdout.write(self.style.SUCCESS(f"Agendamentos criados: {agendamentos_criados}"))

    def _gerar_usuarios(self, quantidade):
        usuarios = []
        try:
            last_iduser = User.objects.aggregate(Max('iduser'))['iduser__max'] or 0
            next_iduser = last_iduser + 1

            for i in range(quantidade):
                gmail = f"{self.fake.unique.user_name()}_{next_iduser}@example.com"

                cpf = ''.join([str(random.randint(0, 9)) for _ in range(11)])

                usuario = User(
                    iduser=next_iduser,
                    nome=self.fake.name(),
                    cpf=cpf,
                    gmail=gmail,
                    telefone=self.fake.phone_number()[:15],
                    dataNascimento=self.fake.date_of_birth(minimum_age=18, maximum_age=60),
                    typeUser=random.choice(['Mentor', 'Mentorado'])
                )
                usuarios.append(usuario)
                next_iduser += 1

                if i % 5_000 == 0:
                    self.fake.unique.clear()

            with transaction.atomic():
                return User.objects.bulk_create(usuarios, batch_size=500)

        except Exception as e:
            logger.error(f"Erro ao criar usuários: {str(e)}", exc_info=True)
            return []

    def _gerar_perfis(self, quantidade):
        perfis_criados = 0
        try:
            perfis_existentes = set(p.iduser for p in Perfil.objects.only('iduser'))
            usuarios = User.objects.exclude(iduser__in=perfis_existentes)[:quantidade]

            for user in usuarios:
                perfil = Perfil(
                    iduser=user.iduser,
                    nome=user.nome,
                    cpf=user.cpf,
                    sobre=self.fake.text(max_nb_chars=200),
                    certificacoes=[self.fake.word() for _ in range(3)],
                    habilidades=[self.fake.word() for _ in range(5)],
                    redesSociais={
                        "LinkedIn": self.fake.url(),
                        "Twitter": self.fake.url(),
                        "Instagram": self.fake.url()
                    },
                    horariosDisponiveis=[self.fake.time(pattern="%H:%M") for _ in range(5)],
                    nivelExperiencia=random.choice(['Iniciante', 'Intermediário', 'Avançado', 'Especialista']),
                    areaAtuacao=self.fake.job(),
                    typeUser=user.typeUser
                )
                perfil.save()
                perfis_criados += 1

            return perfis_criados

        except Exception as e:
            logger.error(f"Erro ao gerar perfis: {str(e)}", exc_info=True)
            return 0

    def _gerar_pesquisa_habilidades(self, quantidade):
        pesquisas_criadas = 0
        try:
            idusers = list(User.objects.values_list('iduser', flat=True))

            for _ in range(quantidade):
                pesquisa = PesquisaHabilidades(
                    iduser=random.choice(idusers),
                    habilidade=self.fake.word()
                )
                pesquisa.save()
                pesquisas_criadas += 1

            return pesquisas_criadas

        except Exception as e:
            logger.error(f"Erro ao gerar pesquisas: {str(e)}", exc_info=True)
            return 0

    def _gerar_agendamentos(self, quantidade):
        agendamentos_criados = 0
        try:
            mentores = list(User.objects.filter(typeUser='Mentor').values_list('iduser', flat=True))
            mentorados = list(User.objects.filter(typeUser='Mentorado').values_list('iduser', flat=True))

            if not mentores or not mentorados:
                return 0

            for _ in range(quantidade):
                data_hora_inicial = self.fake.future_datetime()
                data_hora_final = data_hora_inicial + timedelta(hours=random.randint(1, 2))

                agendamento = Agendamento(
                    iduserMentor=random.choice(mentores),
                    iduserMentorado=random.choice(mentorados),
                    dataHoraInicial=data_hora_inicial,
                    dataHoraFinal=data_hora_final
                )
                agendamento.save()
                agendamentos_criados += 1

            return agendamentos_criados

        except Exception as e:
            logger.error(f"Erro ao gerar agendamentos: {str(e)}", exc_info=True)
            return 0
