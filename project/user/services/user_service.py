from ..repositories.user_repository import UserRepository
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