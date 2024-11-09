from datetime import datetime, timezone
from django.views.generic import FormView, TemplateView, ListView, DetailView, View
from django.contrib.auth import login as auth_login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages
from django.urls import reverse_lazy
from django.shortcuts import redirect, render
from .forms import LoginForm, UserForm, PerfilForm
from .choices import SKILLS_CHOICES
from .services.user_service import UserService
from .services.perfil_service import PerfilService
from database.db import connectMongoDB
from .models import User, PesquisaHabilidades

connectMongoDB()

class IndexView(TemplateView):
    template_name = 'user/index.html'

class UserLoginView(FormView):
    template_name = 'user/login.html'
    form_class = LoginForm

    def form_valid(self, form):
        cpf = form.cleaned_data.get('cpf')
        senha = form.cleaned_data.get('senha')
        user = UserService.authenticate_user(cpf, senha)
        
        if user:
            auth_login(self.request, user)
            messages.success(self.request, "Login realizado com sucesso.")
            return redirect('user:dashboard')
        
        messages.error(self.request, 'CPF ou senha inválidos.')
        return self.form_invalid(form)

class UserRegistrationView(FormView):
    template_name = 'user/cadastro.html'
    form_class = UserForm
    success_url = reverse_lazy('user:index')

    def form_valid(self, form):
        data = form.cleaned_data
        
        if UserService.check_user_exists(data['cpf']):
            messages.error(self.request, "Erro: Usuário com este CPF já existe.")
            return self.form_invalid(form)

        try:
            user_data = {key: data[key] for key in data if key != 'senha'}
            user = User(**user_data)  
            
            user.set_password(data['senha'])
            user.save()

            perfil_data = {
                'iduser': user.iduser,
                'nome': user.nome,
                'cpf': user.cpf,
                'sobre': '',
                'nivelExperiencia': '',
                'certificacoes': [],
                'habilidades': [],
                'redesSociais': {},
                'typeUser': user.typeUser
            }
            
            PerfilService.create_perfil(perfil_data)

            messages.success(self.request, "Usuário e perfil cadastrados com sucesso!")
            return super().form_valid(form)

        except ValueError as e:
            messages.error(self.request, str(e))
            return self.form_invalid(form)
        except Exception as e:
            messages.error(self.request, f"Erro ao salvar o usuário/perfil: {e}")
            return self.form_invalid(form)


class LogoutView(View):
    def get(self, request, *args, **kwargs):
        logout(request)
        messages.success(request, "Você foi desconectado com sucesso.")
        return redirect('user:user_login')

class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'user/dashboardHome.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = self.request.user

        # BUSCA AS LINGUAGENS NO BANCO
        resultados = PesquisaHabilidades.objects.aggregate(
            [
                {"$group": {"_id": "$habilidade", "contagem": {"$sum": 1}}},  
                {"$sort": {"contagem": -1}}  
            ]
        )
        return context

class DashboardContaView(LoginRequiredMixin, FormView):
    template_name = 'user/dashboardConta.html'
    form_class = PerfilForm

    def get_initial(self):
        perfil = PerfilService.get_perfil_by_user_id(self.request.user.iduser)
        return {
            'nome': perfil.nome,
            'areaAtuacao': perfil.areaAtuacao,
            'sobre': perfil.sobre,
            'nivelExperiencia': perfil.nivelExperiencia,
            'facebook': perfil.redesSociais.get('facebook', ''),
            'instagram': perfil.redesSociais.get('instagram', ''),
            'github': perfil.redesSociais.get('github', ''),
            'linkedIn': perfil.redesSociais.get('linkedIn', ''),
            'habilidades': perfil.habilidades,
            'diasAtendimento': perfil.horariosDisponiveis[1].get('atende') if perfil.horariosDisponiveis else '',
            'horaInicio': perfil.horariosDisponiveis[0].get('horarioInicial') if perfil.horariosDisponiveis else '',
            'horaFinal': perfil.horariosDisponiveis[0].get('horarioFinal') if perfil.horariosDisponiveis else '',
        }

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = self.request.user
        context['perfil'] = PerfilService.get_perfil_by_user_id(self.request.user.iduser)
        context['formPerfil'] = context['form']
        return context

    def form_valid(self, form):
        perfil_data = form.cleaned_data
        perfil = PerfilService.get_perfil_by_user_id(self.request.user.iduser)

        perfil.nome = perfil_data['nome']
        perfil.areaAtuacao = perfil_data['areaAtuacao']
        perfil.sobre = perfil_data['sobre']
        perfil.nivelExperiencia = perfil_data['nivelExperiencia']
        perfil.redesSociais = {
            'facebook': perfil_data['facebook'],
            'github': perfil_data['github'],
            'instagram': perfil_data['instagram'],
            'linkedIn': perfil_data['linkedIn']
        }
        perfil.habilidades = form.data.getlist('habilidades')
        perfil.horariosDisponiveis = [
            {'horarioInicial': perfil_data['horaInicio'], 'horarioFinal': perfil_data['horaFinal']},
            {'atende': form.data.getlist('diasAtendimento')}
        ]
        
        try:
            user = self.request.user
            user.nome = perfil_data['nome']
            user.save()
            
            perfil.save()
            messages.success(self.request, "Perfil atualizado com sucesso.")
        except Exception as e:
            messages.error(self.request, f"Erro ao atualizar o perfil: {e}")
        
        return redirect('user:dashboardConta')

class MentorProfileListView(LoginRequiredMixin, ListView):
    template_name = 'user/listProfile.html'
    context_object_name = 'perfis'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = self.request.user
        context[ 'typeUser'] = self.request.user.typeUser
        return context

    def get_queryset(self):
        search_query = self.request.GET.get('search_query', None)
        user_logged = self.request.user

        if search_query:
            perfils = PerfilService.get_by_search(search_query)
        else:
            perfils = PerfilService.get_all_perfis()
        
        if user_logged.typeUser == 'Mentorado':
            perfils = perfils.filter(typeUser='Mentor')

            if search_query:
                valid_skills = [skill[0].lower() for skill in SKILLS_CHOICES]
                matches = [habilidade for habilidade in valid_skills if habilidade.startswith(search_query) ]
                if matches:
                    print('salvar matches com:  ' + search_query)

                    for match in matches:
                        print('combinacao:  ' + match )
                        PesquisaHabilidades.objects.create(
                            iduser=user_logged.iduser, habilidade=match
                        )
        
        
        return perfils
    

class MentorProfileDetailView(LoginRequiredMixin, DetailView):
    template_name = 'user/profile.html'
    context_object_name = 'perfil'

    def get_object(self):
        
        iduser = self.kwargs.get('id')
     
        return PerfilService.get_perfil_by_user_id(iduser)

    def get_context_data(self, **kwargs):
        dias_semana = {
            '1': 'Domingo',
            '2': 'Segunda-feira',
            '3': 'Terça-feira',
            '4': 'Quarta-feira',
            '5': 'Quinta-feira',
            '6': 'Sexta-feira',
            '7': 'Sábado-feira'
        }
        context = super().get_context_data(**kwargs)
        context['habilidades'] = self.object.habilidades
        context['redesSociais'] = self.object.redesSociais
        context['horarios'] = self.object.horariosDisponiveis[0]  if self.object.horariosDisponiveis else '' 
        context['dados'] = self.request.user
        context['diasAtendimento'] = list(
            map(
                lambda dia: 
                    dias_semana.get(dia, "Dia Inválido"), 
                    self.object.horariosDisponiveis[1]['atende'] if self.object.horariosDisponiveis else '' 
            )
        )
        print(context)
        return context

class DashboardChatView(LoginRequiredMixin, TemplateView):
    template_name = 'communication/dashboardChat.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = self.request.user
        return context

class AgendamentoSemanalView(LoginRequiredMixin, TemplateView):
    template_name = 'scheduling/agendamentoSemanal.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = self.request.user
        return context

class AgendamentoMensalView(LoginRequiredMixin, TemplateView):
    template_name = 'scheduling/agendamentoMes.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = self.request.user
        return context