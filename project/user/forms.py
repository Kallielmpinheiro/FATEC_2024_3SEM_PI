from django import forms
from .models import User, Perfil
from django.forms import PasswordInput
from datetime import time, timedelta
from .choices import SKILLS_CHOICES
class UserForm(forms.ModelForm):
    senha = forms.CharField(widget=PasswordInput(), max_length=128)
 
    class Meta:
        model = User     
        fields = ['nome', 'cpf', 'senha', 'gmail', 'telefone', 'dataNascimento', 'typeUser']
        
        widgets = {
            'nome': forms.TextInput( attrs={'placeholder': 'Nome completo'}),
            'cpf': forms.TextInput( attrs={'placeholder': 'Seu CPF'}),
            'gmail': forms.EmailInput( attrs={ 'placeholder': 'E-maiil'}),
            'telefone': forms.TextInput( attrs={ 'placeholder': 'Telefone'}),
            'dataNascimento': forms.DateInput(attrs={'type': 'date'}),
            'typeUser': forms.Select( attrs=({'class': 'input-square'}) ),
            'senha': forms.PasswordInput( attrs={'placeholder': 'senha', 'type': 'password'})
        }
class LoginForm(forms.Form):
    cpf = forms.CharField(
        max_length=11, 
        label="CPF", 
        widget=forms.TextInput(attrs={
            'class': 'input',  
            'placeholder': 'Digite seu CPF'  
        })
    )
    senha = forms.CharField(
        label="Senha",
        widget=forms.PasswordInput(attrs={
            'class': 'input',  
            'placeholder': 'Digite sua senha'  
        })
    )
    
class PerfilForm(forms.Form): # MongoDB
    nome = forms.CharField(
        widget=forms.TextInput(
            attrs={ "class": "form-control"}
        ), required=False
    )

    areaAtuacao = forms.CharField(
        label='Área de Atuação', 
        widget=forms.TextInput(
            attrs={ "class": "form-control"}
        ), required=False
    )
    sobre = forms.CharField(
        max_length=255, label='Sobre', 
        widget=forms.Textarea(
            attrs={"rows":"5", "class": "form-control "}
        ), required=False
    )
    nivelExperiencia = forms.ChoiceField(
        label='Nível de Experiência',
        choices= [
            ('Junior', 'Junior'), 
            ('Pleno', 'Pleno'), 
            ( 'Sênior', 'Sênior')
        ],
        widget= forms.Select(attrs={ "class": "form-control"}), 
        required=False
    )
    
    facebook = forms.CharField(
        max_length=255, 
        label='Facebook', 
        widget=forms.TextInput(attrs={ "class": "form-control"})
        , required=False
    )
    github = forms.CharField(
        max_length=255, 
        label='Github',  
        widget=forms.TextInput(attrs={ "class": "form-control"})
        , required=False
    )
    instagram = forms.CharField(
        max_length=255, 
        label='Instragram',  
        widget=forms.TextInput(attrs={ "class": "form-control"})
        , required=False
    )
    linkedIn = forms.CharField(
        max_length=255, 
        label='LinkedIn',  
        widget=forms.TextInput(attrs={ "class": "form-control"})
        , required=False
    )


    habilidades = forms.MultipleChoiceField(
        choices=SKILLS_CHOICES,
        widget=forms.SelectMultiple(
            attrs={"id": "skills"}
        ), required=False
    )


    diasAtendimento = forms.MultipleChoiceField(
        choices= [ 
            ( 1, 'Domingo'),
            ( 2, 'Segunra-feira'),
            ( 3, 'Terça-feira'),
            ( 4, 'Quarta-feria'),
            ( 5, 'Quinta-feira'),
            ( 6, 'Sexta-feira'),
            ( 7, 'Sabado'),
                  
        ],
        widget=forms.SelectMultiple(
            attrs={"class":"containerSelect", "id": "diasSemana"}
        ),
        label='Dias Disponível',
        required=False
    )
 
    TIME_CHOICES = [(time(hour, minute).strftime('%H:%M'), time(hour, minute).strftime('%H:%M'))
                    for hour in range(0, 24) for minute in [0, 30]]

    horaInicio =  forms.ChoiceField(
        choices=TIME_CHOICES, 
        label="Hora Inicial", 
        widget=forms.Select(
            attrs= {
                "type": "time",
                "class": "form-control" 
            }
        )
    )
    horaFinal =  forms.ChoiceField(
        choices=TIME_CHOICES, 
        label="Hora Final", 
        widget=forms.Select(
            attrs= {
                "type": "time",
                "class": "form-control" 
            }
        )
    )

   


