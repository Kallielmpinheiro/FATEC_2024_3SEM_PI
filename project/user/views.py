from datetime import datetime, timezone
from django.views.generic import FormView, TemplateView, ListView, DetailView, View,UpdateView
from django.contrib.auth import login as auth_login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages
from django.urls import reverse_lazy
from django.shortcuts import redirect, render
from .forms import LoginForm, UserForm, PerfilForm, UserAuthForm
from .choices import SKILLS_CHOICES
from .services.user_service import UserService
from .services.perfil_service import PerfilService
from database.db import connectMongoDB
from .models import User, PesquisaHabilidades
from django.core.exceptions import ValidationError
import os
from django.conf import settings
import jwt

connectMongoDB()

class IndexView(TemplateView):
    template_name = 'user/index.html'

class UserLoginView(FormView):
    template_name = 'user/login.html'
    form_class = LoginForm

    def form_valid(self, form):
        cpf = form.cleaned_data.get('cpf')
        senha = form.cleaned_data.get('senha')
        remember_me = self.request.POST.get('remember_me')

        user = UserService.authenticate_user(cpf, senha)  
        if user:
            auth_login(self.request, user)

            response = redirect('user:DashboardView')

            if remember_me == 'on':
                payload = {
                    'cpf': cpf,
                    'exp': datetime.utcnow() + settings.JWT_EXPIRATION_DELTA,  # 2 semanas
                }
                token = jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm='HS256')

                response.set_cookie(
                    'remember_token', token, max_age=1209600, httponly=True, secure=True, samesite='Strict'
                )
            return response

        messages.error(self.request, 'CPF ou senha inválidos.')
        return self.form_invalid(form)


    # Decode e capt cpf
    
    def get(self, request, *args, **kwargs):
        token = request.COOKIES.get('remember_token')
        if token:
            try:
                payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=['HS256'])
                cpf = payload.get('cpf')
                if cpf:
                    self.initial = {'cpf': cpf}
            except jwt.ExpiredSignatureError:
                print("O token expirou.")
            except jwt.InvalidTokenError:
                print("Token inválido.")
        return super().get(request, *args, **kwargs)

    
class UserRegistrationView(FormView):
    template_name = 'user/cadastro.html'
    form_class = UserForm

    def form_valid(self, form):
        data = form.cleaned_data

        try:
            user_data = {key: data[key] for key in data if key != 'senha'}
            user = User(**user_data)
            user.set_password(data['senha'])
            user.save()

            user.backend = 'user.authentication.CPFBackend'

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

            auth_login(self.request, user)
            return redirect('user:DashboardView')

        except ValidationError as ve:
            form.add_error(None, f"Erro de validação: {str(ve)}")
            return self.form_invalid(form)

        except User.DoesNotExist:
            form.add_error('cpf', 'Este CPF já está registrado.')
            return self.form_invalid(form)

        except Exception as e:
            form.add_error(None, f"Erro ao salvar o usuário/perfil: {str(e)}")
            return self.form_invalid(form)

    def form_invalid(self, form):
        for field, errors in form.errors.items():
            for error in errors:
                messages.error(self.request, f"{field.capitalize()}: {error}")
        return super().form_invalid(form)

class LogoutView(FormView):
    def get(self, request, *args, **kwargs):
        remember_me = request.COOKIES.get('remember_token')
        logout(request)
        response = redirect('user:user_login')
        if not remember_me:
            response.delete_cookie('remember_token')
        messages.success(request, "Você foi desconectado com sucesso.")
        return response

class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'user/dashboardHome.html'   

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = self.request.user

        pesquisaHabilidades  = PesquisaHabilidades.objects.aggregate(
            [
                {"$group": {"_id": "$habilidade", "contagem": {"$sum": 1}}},  
                {"$sort": {"contagem": -1}},
                {"$limit": 5} 
            ]
        )

        most_searched_skills = []
        for pesquisa in pesquisaHabilidades:
            most_searched_skills.append(pesquisa)

        context['most_searched_skills'] = most_searched_skills
                    
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
    
    
class UploadFotoPerfilView(LoginRequiredMixin, UpdateView):
    model = User
    form_class = UserForm
    template_name = 'user/dashboardConta.html'
    success_url = reverse_lazy('user:dashboardConta')

    def get_form(self, form_class=None):
        form = super().get_form(form_class)
        for field_name in list(form.fields.keys()):
            if field_name != 'Image':
                form.fields.pop(field_name)
        return form

    def form_valid(self, form):
        response = super().form_valid(form)
        messages.success(self.request, 'Foto de perfil atualizada com sucesso!')
        return response

    def form_invalid(self, form):
        messages.error(self.request, 'Erro ao atualizar foto de perfil. Verifique o formato e tamanho do arquivo.')
        return super().form_invalid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['perfil'] = self.request.user.perfil
        context['formPerfil'] = PerfilForm(instance=self.request.user.perfil)
        return context

    def get_object(self):
        return self.request.user

class DeleteFotoPerfilView(LoginRequiredMixin, View):
    def post(self, request, *args, **kwargs):
        user = request.user
        if user.Image:
            if os.path.exists(user.Image.path):
                os.remove(user.Image.path)
            user.Image = None
            user.save()
            messages.success(request, 'Foto de perfil removida com sucesso!')
        return redirect('user:dashboardConta')
    
class UpdateUserAuthView(LoginRequiredMixin, UpdateView):
    model = User
    form_class = UserAuthForm
    template_name = 'user/dashboardConf.html'
    success_url = reverse_lazy('user:update_auth')

    def get_object(self):
        return self.request.user

    def form_valid(self, form):
        messages.success(self.request, 'Suas credenciais foram atualizadas com sucesso.')
        return super().form_valid(form)

    def form_invalid(self, form):
        messages.error(self.request, 'Erro ao atualizar suas credenciais. Verifique os dados.')
        return super().form_invalid(form)    
    

