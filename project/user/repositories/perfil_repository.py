from ..models import Perfil
from mongoengine.queryset.visitor import Q

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
    
    @staticmethod
    def get_by_name(name):
        return Perfil.objects.filter(nome__contains=name)
    
    @staticmethod
    def get_by_search(search):
        return Perfil.objects.filter(Q(nome__contains=search) | Q(habilidades__contains=search))
    