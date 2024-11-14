from mongoengine import Document, StringField, ListField, DictField, IntField
import random
import string
from user.models import Perfil

# Create your models here.

def generate_unique_sala_id(length=16):
    while True:
        sala_id = ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))
        if not Room.objects(salaId=sala_id):
            return sala_id

class Room(Document):
    mentor_id = IntField(required=True)
    mentorado_id = IntField(required=True)
    salaId = StringField(unique=True, required=True)  
    mensagens = ListField(DictField(), default=list)

    meta = {
        'collection': 'room',
        'indexes': [
            {'fields': ['salaId'], 'unique': True},
            {'fields': ['mentor_id', 'mentorado_id']},
        ]
    }

    def get_nome_mentor(self):
        mentor = Perfil.objects(iduser=self.mentor_id).first()
        return mentor.nome if mentor else "Mentor não encontrado"

    def get_nome_mentorado(self):
        mentorado = Perfil.objects(iduser=self.mentorado_id).first()
        return mentorado.nome if mentorado else "Mentorado não encontrado"
    
    def __str__(self):
        return f"Sala: {self.salaId} - Mentor: {self.mentor_id} - Mentorado: {self.mentorado_id}"
