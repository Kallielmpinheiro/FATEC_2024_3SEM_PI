from mongoengine import Document, StringField, ListField,DictField
import random
import string
from datetime import datetime

# Create your models here.

def uniqueKeySalaID():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=8))

class Room(Document):
    cpfMentor = StringField(required=True)
    cpfMentorado  = StringField(required=True)  
    salaId = StringField(default=uniqueKeySalaID, unique=True)
    mensagens = ListField(DictField())  

    def __str__(self):
        return f"Sala: {self.salaId} - Mentor: {self.cpfMentor} - Mentorado: {self.cpfMentorado}"
    
    meta = {
        'indexes':[
            {
                'fields':['cpfMentor','cpfMentor','salaId'],
                'unique':True
            }
        ]
    }