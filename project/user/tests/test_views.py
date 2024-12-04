from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth import get_user_model
from user.models import User, Perfil
from django.contrib.messages import get_messages
from django.contrib.sessions.middleware import SessionMiddleware

class ViewsTestCase(TestCase):
    def setUp(self):
        User.objects.all().delete()
        Perfil.drop_collection()
        self.client = Client()
        self.User = get_user_model()
        self.user = self.User.objects.create_user(
            cpf='12345678901',
            senha='senha_secreta',
            nome='Teste Usuário',
            gmail='teste@teste.com',
            telefone='19991971960',
            dataNascimento='2004-12-12',
            typeUser='Mentor',
            Image=None,
        )
        self.user.set_password('senha_secreta')
        self.user.is_active = True
        self.user.save()
        self.url = reverse('user:logout')
        self.client.cookies['remember_token'] = 'some_token_value'

    def test_TemplateUsed_Index(self):
        self.assertTemplateUsed('index.html')
        
    def test_TemplateUsed_cadastro(self):
        self.assertTemplateUsed('cadastro.html')
        
    def test_TemplateUsed_dashboardBase(self):
        self.assertTemplateUsed('dashboardBase.html')
        
    def test_TemplateUsed_profile(self):
        self.assertTemplateUsed('profile.html')
    
    def test_TemplateUsed_listProfile(self):
        self.assertTemplateUsed('listProfile.html')
        
    def test_TemplateUsed_dashboardHome(self):
        self.assertTemplateUsed('dashboardHome.html')
        
    def test_TemplateUsed_dashboardConfig(self):
        self.assertTemplateUsed('dashboardConfig.html')
                
    def test_TemplateUsed_dashboardAgenda(self):
        self.assertTemplateUsed('dashboardAgenda.html')
    
    def test_TemplateUsed_dashboardConta(self):
        self.assertTemplateUsed('dashboardConta.html')
            
    def test_user_login_valid(self):
        response = self.client.post(reverse('user:UserLoginView'), {
            'cpf': '12345678901',
            'senha': 'senha_secreta'
        })
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('user:DashboardView'))
        

    def test_user_login_invalid(self):
        response = self.client.post(reverse('user:UserLoginView'), {
            'cpf': '12345678901',
            'senha': 'senha_errada'
        })
        self.assertEqual(response.status_code, 200)
        
    def test_cadastrar_usuario(self):
        response = self.client.post(reverse('user:UserRegistrationView'), {
            'nome': 'Novo Usuário',
            'cpf': '98765432100',
            'gmail': 'novo@teste.com',
            'telefone': '123456789',
            'senha': 'nova_senha',
            'dataNascimento': '2000-01-01',
            'typeUser': 'Mentorado',
        })
        self.assertEqual(response.status_code, 302)
        # if response.context is not None and 'form' in response.context:
        #     if response.context['form'].errors:               
        #         print("Erros no formulário:", response.context['form'].errors)
        user_exists = User.objects.filter(cpf='98765432100').exists()
        self.assertTrue(user_exists)
        user = User.objects.get(cpf='98765432100')
        perfil_exists = Perfil.objects(iduser=user.iduser).first() is not None
        self.assertTrue(perfil_exists)
        
    def test_invalid_cadastrar_usuario(self):
        response = self.client.post(reverse('user:UserRegistrationView'), {
            'nome': 'Novo Usuário',
            'cpf': '',
            'gmail': 'novo@teste.com',
            'telefone': '123456789',
            'senha': 'nova_senha',
            'dataNascimento': '2000-01-01',
            'typeUser': 'Mentorado',
        })
        self.assertEqual(response.status_code, 200)
    
    def test_invalid_cadastrar_usuario_no_gmail(self):
        response = self.client.post(reverse('user:UserRegistrationView'), {
            'nome': 'Novo Usuário',
            'cpf': '1111111111',
            'gmail': '',
            'telefone': '123456789',
            'senha': 'nova_senha',
            'dataNascimento': '2000-01-01',
            'typeUser': 'Mentorado',
        })
        self.assertEqual(response.status_code, 200)
    
    def test_invalid_cadastrar_usuario_no_senha(self):
        response = self.client.post(reverse('user:UserRegistrationView'), {
            'nome': 'Novo Usuário',
            'cpf': '1111111111',
            'gmail': '',
            'telefone': '123456789',
            'senha': '',
            'dataNascimento': '2000-01-01',
            'typeUser': 'Mentorado',
        })
        self.assertEqual(response.status_code, 200)
    
    def test_logout_redirects_to_login(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.get(self.url)
        self.assertRedirects(response, reverse('user:UserLoginView'))
    
    def test_logout_removes_remember_token(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.get(self.url)
        self.assertNotIn('remember_token', response.cookies)
    
    def test_logout_shows_success_message(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.get(self.url)
        messages = list(get_messages(response.wsgi_request))
        self.assertTrue(any(msg.message == "Você foi desconectado com sucesso." for msg in messages))