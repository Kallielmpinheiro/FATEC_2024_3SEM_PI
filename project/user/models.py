from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from mongoengine import Document, StringField, ListField, DictField, IntField , ValidationError

from django.db.models import Max

class UserManager(BaseUserManager):
    def create_user(self, cpf, senha=None, **extra_fields):
        if not cpf:
            raise ValueError('O CPF é obrigatório')
        user = self.model(cpf=cpf, **extra_fields)
        if senha:
            user.set_password(senha)
        else:
            raise ValueError('Uma senha é obrigatória para todos os usuários.')
        user.save(using=self._db)
        return user

    def create_superuser(self, cpf, **extra_fields):
        senha = extra_fields.pop('password', None)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        if not senha:
            raise ValueError('O superusuário precisa de uma senha.')
        if extra_fields.get('is_staff') is not True:
            raise ValueError('O superusuário precisa ter is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('O superusuário precisa ter is_superuser=True.')
        return self.create_user(cpf, senha, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    iduser = models.PositiveIntegerField(unique=True, null=True, blank=True)
    nome = models.CharField(max_length=100) 
    cpf = models.CharField(max_length=11, unique=True, primary_key=True)
    gmail = models.EmailField(max_length=100, unique=True)
    telefone = models.CharField(max_length=15)
    dataNascimento = models.DateField(null=True, blank=True)
    typeUser = models.CharField(max_length=10, choices=[
        ('Mentor', 'Mentor'),
        ('Mentorado', 'Mentorado')
    ], default='Mentorado')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'cpf'
    REQUIRED_FIELDS = ['nome', 'gmail']

    objects = UserManager()

    def save(self, *args, **kwargs):
        if self.iduser is None:
            last_iduser = User.objects.aggregate(Max('iduser'))['iduser__max']
            self.iduser = (last_iduser or 0) + 1
        super().save(*args, **kwargs)

    def __str__(self):
        return self.cpf

    class Meta:
        unique_together = ["iduser","gmail","cpf"]

class Perfil(Document):
    iduser = IntField(required=True, unique=True)
    nome = StringField(max_length=255)
    cpf =StringField(max_length=11)
    sobre = StringField(max_length=255)
    certificacoes = ListField(StringField(max_length=221))
    habilidades = ListField(StringField(max_length=211))
    redesSociais = DictField()
    horariosDisponiveis = ListField()
    nivelExperiencia = StringField(max_length=128)
    areaAtuacao = StringField(max_length=128)

    def clean(self):
        if self.iduser is None:
            raise ValidationError('O campo iduser não pode ser nulo.')
    
    def save(self, *args, **kwargs):
        return super().save(*args, **kwargs)

    def __str__(self):
        return f"nome: {self.nome}, nivelExperiencia: {self.nivelExperiencia}, habilidades: {', '.join(self.habilidades)}"
    
    meta = {
        'indexes':[
            {
                'fields':['iduser','cpf'],
                'unique':True
            }
        ]
    }