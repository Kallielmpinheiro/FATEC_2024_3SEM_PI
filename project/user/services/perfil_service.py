from ..repositories.perfil_repository import PerfilRepository
from user.models import Perfil
class PerfilService:
    
    @staticmethod
    def create_perfil(perfil_data):
        if not Perfil.objects(iduser=perfil_data['iduser']).first():
            try:
                perfil = Perfil(**perfil_data)
                perfil.clean()
                perfil.save()
            except Exception as e:
                raise ValueError(f"Erro ao salvar o perfil: {e}")
        else:
            raise ValueError("Perfil já existente para o usuário.")

    @staticmethod
    def get_perfil_by_user_id(iduser):
        return PerfilRepository.get_perfil_by_user_id(iduser)

    @staticmethod
    def check_perfil_exists(iduser):
        return PerfilRepository.perfil_exists(iduser)
    
    @staticmethod
    def get_all_perfis():
        return PerfilRepository.get_all_perfis()
    
    @staticmethod
    def get_by_search(search):
        return PerfilRepository.get_by_search(search)
    