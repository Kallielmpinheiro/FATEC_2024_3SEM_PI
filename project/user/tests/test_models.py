from django.test import TestCase
from user.models import User

class UserManagerTests(TestCase):
    def setUp(self):
        self.user_manager = User.objects

    def test_create_user_with_valid_data(self):
        user = self.user_manager.create_user(
            cpf='12345678901',
            senha='senha_secreta',
            nome='Teste Usuário',
            gmail='teste@teste.com',
            telefone='19991971960',
            dataNascimento='2004-12-12',
            typeUser='Mentor',
            Image=None,
        )
        self.assertIsNotNone(user)
        self.assertEqual(user.cpf, '12345678901')
        self.assertEqual(user.nome, 'Teste Usuário')
        self.assertTrue(user.check_password('senha_secreta'))

    def test_create_user_without_password(self):
        with self.assertRaises(ValueError) as context:
            self.user_manager.create_user(
                cpf='12345678900',
                nome='Usuário Teste',
                gmail='user@example.com',
                telefone='123456789'
            )
        self.assertEqual(str(context.exception), 'Uma senha é obrigatória para todos os usuários.')

    def test_create_user_without_cpf(self):
        with self.assertRaises(ValueError) as context:
            self.user_manager.create_user(
                cpf=None,
                senha='user_password',
                nome='Usuário Teste',
                gmail='user@example.com',
                telefone='123456789'
            )
        self.assertEqual(str(context.exception), 'O CPF é obrigatório')

    def test_create_superuser_with_valid_data(self):
        superuser = self.user_manager.create_superuser(
            cpf='12345678900',
            password='superuser_password',
            nome='Super Usuário',
            gmail='superuser@example.com',
            telefone='123456789'
        )
        self.assertIsNotNone(superuser)
        self.assertTrue(superuser.is_staff)
        self.assertTrue(superuser.is_superuser)
        self.assertTrue(superuser.check_password('superuser_password'))

    def test_create_superuser_without_password(self):
        with self.assertRaises(ValueError) as context:
            self.user_manager.create_superuser(
                cpf='12345678900',
                nome='Super Usuário',
                gmail='superuser@example.com',
                telefone='123456789'
            )
        self.assertEqual(str(context.exception), 'O superusuário precisa de uma senha.')

    def test_create_superuser_without_is_staff(self):
        with self.assertRaises(ValueError) as context:
            self.user_manager.create_superuser(
                cpf='12345678900',
                password='superuser_password',
                nome='Super Usuário',
                gmail='superuser@example.com',
                telefone='123456789',
                is_staff=False
            )
        self.assertEqual(str(context.exception), 'O superusuário precisa ter is_staff=True.')

    def test_create_superuser_without_is_superuser(self):
        with self.assertRaises(ValueError) as context:
            self.user_manager.create_superuser(
                cpf='12345678900',
                password='superuser_password',
                nome='Super Usuário',
                gmail='superuser@example.com',
                telefone='123456789',
                is_superuser=False
            )
        self.assertEqual(str(context.exception), 'O superusuário precisa ter is_superuser=True.')
