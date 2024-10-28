from ..repositories.perfil_repository import PerfilRepository

class PerfilService:
    @staticmethod
    def create_perfil(data):
        return PerfilRepository.create_perfil(data)

    @staticmethod
    def get_perfil_by_user_id(iduser):
        return PerfilRepository.get_perfil_by_user_id(iduser)

    @staticmethod
    def check_perfil_exists(iduser):
        return PerfilRepository.perfil_exists(iduser)
    
    @staticmethod
    def get_all_perfis():
        return PerfilRepository.get_all_perfis()