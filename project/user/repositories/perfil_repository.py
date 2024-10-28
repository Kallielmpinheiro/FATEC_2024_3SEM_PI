from ..models import Perfil

class PerfilRepository:
    @staticmethod
    def create_perfil(perfil_data):
        perfil = Perfil(**perfil_data)
        perfil.save()
        return perfil
    
    @staticmethod
    def get_perfil_by_user_id(iduser):
        return Perfil.objects.filter(iduser=iduser).first()
    
    @staticmethod
    def perfil_exists(iduser):
        return Perfil.objects.filter(iduser=iduser).exists()
    
    @staticmethod
    def get_all_perfis():
        return Perfil.objects.all()