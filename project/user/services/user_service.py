from ..repositories.user_repository import UserRepository
from user.models import Agendamento
from django.contrib.auth import authenticate

class UserService:
    @staticmethod
    def authenticate_user(cpf, senha):
        return authenticate(username=cpf, password=senha)

    @staticmethod
    def create_user(data):
        user = UserRepository.create_user(data)
        return user

    @staticmethod
    def check_user_exists(cpf):
        return UserRepository.user_existy(cpf)
    
    @staticmethod   
    def get_user_by_id(id):
        return UserRepository.get_user_by_id(id)
    
    @staticmethod
    def create_meeting(data):
        print(data)
        agendamento = UserRepository.create_meeting(data)
        print(agendamento)
        return agendamento
    
    @staticmethod
    def get_user_count():
        return UserRepository.count_users()
    
    @staticmethod
    def get_agendamentos_count():
        return Agendamento.objects.count()