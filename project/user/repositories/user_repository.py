from ..models import User

class UserRepository:
    @staticmethod
    def create_user(user_data):
        user = User(**user_data)
        user.setpassword(user_data['senha'])
        user.save()
        return user

    @staticmethod
    def get_user_by_cpf(cpf):
        return User.objects.filter(cpf=cpf).first()
    
    @staticmethod
    def user_existy(cpf):
        return User.objects.filter(cpf=cpf).exists()