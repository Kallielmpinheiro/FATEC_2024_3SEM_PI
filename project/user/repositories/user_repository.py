from ..models import Agendamento, User
from uuid import uuid4
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
    
    @staticmethod
    def get_user_by_id(id):
        return User.objects.filter(iduser=id).first()
    
    @staticmethod
    def create_meeting(meeting_data):
        print(meeting_data)
        meeting_data['dataHoraInicial'] = meeting_data['dataHoraInicial'].replace(tzinfo=None)
        meeting_data['dataHoraFinal'] = meeting_data['dataHoraFinal'].replace(tzinfo=None)
        agendamento = Agendamento(**meeting_data)
        agendamento.save()
        print(agendamento)
        return agendamento
    
    
