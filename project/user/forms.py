from django import forms

from helpers.hours import timeChoices
from .models import User, Perfil
from django.forms import PasswordInput
from datetime import time, timedelta
from django.core.exceptions import ValidationError
from django.core.files.images import get_image_dimensions
from .choices import SKILLS_CHOICES

class UserForm(forms.ModelForm):
    error_messages = {
        'nome': {
            'required': 'Por favor, preencha seu nome.',
            'max_length': 'O nome não pode ter mais de 100 caracteres.'
        },
        'cpf': {
            'required': 'Por favor, preencha seu CPF.',
            'max_length': 'O CPF deve ter exatamente 11 caracteres.'
        },
        'gmail': {
            'required': 'Por favor, insira seu e-mail.',
            'invalid': 'Por favor, insira um e-mail válido.'
        },
        'telefone': {
            'required': 'Por favor, insira seu telefone.'
        },
        'dataNascimento': {
            'required': 'Por favor, insira sua data de nascimento.'
        },
        'typeUser': {
            'required': 'Por favor, selecione o tipo de usuário.'
        }        
    }

    senha = forms.CharField(
        widget=forms.PasswordInput(attrs={'placeholder': 'Senha', 'type': 'password'}),
        max_length=128,
        error_messages={
            'required': 'Por favor, insira sua senha.',
            'max_length': 'A senha não pode ter mais de 128 caracteres.'
        }
    )

    class Meta:
        model = User
        fields = ['nome', 'cpf', 'senha', 'gmail', 'telefone', 'dataNascimento', 'typeUser','Image']
        widgets = {
            'nome': forms.TextInput(attrs={'placeholder': 'Nome completo'}),
            'cpf': forms.TextInput(attrs={'placeholder': 'Seu CPF'}),
            'gmail': forms.EmailInput(attrs={'placeholder': 'E-mail'}),
            'telefone': forms.TextInput(attrs={'placeholder': 'Telefone'}),
            'dataNascimento': forms.DateInput(attrs={'type': 'date'}),
            'typeUser': forms.Select(attrs={'class': 'input-square'}),
            'senha': forms.PasswordInput(attrs={'placeholder': 'Senha', 'type': 'password'}),
            'Image': forms.ClearableFileInput(attrs={'class': 'form-control'})

        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name, messages in self.error_messages.items():
            if field_name in self.fields:
                self.fields[field_name].error_messages = messages

    def clean_cpf(self):
        cpf = self.cleaned_data.get('cpf')
        if len(cpf) != 11:
            self.add_error('cpf', 'O CPF deve ter exatamente 11 caracteres.')
        return cpf
    
    def clean_Image(self):
        image = self.cleaned_data.get('Image')
        if image:
            if image.size > 5 * 1024 * 1024:
                raise ValidationError('A imagem não pode ter mais de 5MB.')
            if not image.content_type in ['image/jpeg', 'image/png']:
                raise ValidationError('Apenas imagens JPEG e PNG são permitidas.')
            width, height = get_image_dimensions(image)
            if width > 2000 or height > 2000:
                raise ValidationError('A imagem não pode exceder 2000x2000 pixels.')
        return image

class LoginForm(forms.Form):
    cpf = forms.CharField(
        max_length=11, 
        label="CPF", 
        widget=forms.TextInput(attrs={
            'class': 'input',  
            'placeholder': 'Digite seu CPF'  
        }),
        error_messages={
            'required': 'Por favor, insira seu CPF.',
            'max_length': 'O CPF deve ter exatamente 11 caracteres.'
        }
    )

    senha = forms.CharField(
        
        label="Senha",
        widget=forms.PasswordInput(attrs={
            'class': 'input',  
            'placeholder': 'Digite sua senha',
            'id':'id_senha'
        }),
        error_messages={
            'required': 'Por favor, insira sua senha.',
        }
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
 
    TIME_CHOICES = timeChoices()


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
    
class UserAuthForm(UserForm):
    
    nova_senha = forms.CharField(
        required=False,
        widget=forms.PasswordInput(attrs={'placeholder': 'Nova Senha'}),
        max_length=128,
        help_text='Preencha para alterar a senha.',
    )
    confirmar_senha = forms.CharField(
        required=False,
        widget=forms.PasswordInput(attrs={'placeholder': 'Confirme a Nova Senha'}),
        max_length=128,
    )

    class Meta(UserForm.Meta):
        fields = ['cpf', 'gmail']  

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['cpf'].widget.attrs['readonly'] = True
        for field_name, field in self.fields.items():
            if 'class' in field.widget.attrs:
                field.widget.attrs['class'] += ' form-control'
            else:
                field.widget.attrs['class'] = 'form-control'

    def clean(self):
        cleaned_data = super().clean()
        nova_senha = cleaned_data.get("nova_senha")
        confirmar_senha = cleaned_data.get("confirmar_senha")
        if nova_senha or confirmar_senha:
            if nova_senha != confirmar_senha:
                self.add_error("confirmar_senha", "As senhas não coincidem.")
        return cleaned_data

    def save(self, commit=True):
        user = super().save(commit=False)
        nova_senha = self.cleaned_data.get("nova_senha")
        if nova_senha:
            user.set_password(nova_senha)
        if commit:
            user.save()
        return user
    
class AgendamentoForm(forms.Form):
    dataHoraInicial = forms.DateTimeField(
        label="Data e hora inicial da Mentoria",
        widget=forms.DateTimeInput(
            attrs={
                "type": "datetime-local",
                "class": "form-control",
                "step": "3600",
            }
        ),
        input_formats=["%Y-%m-%dT%H:%M"],
    )

    dataHoraFinal = forms.DateTimeField(
        label="Data e hora final da Mentoria",
        widget=forms.DateTimeInput(
            attrs={
                "type": "datetime-local",
                "class": "form-control",
                "step": "3600",
            }
        ),
        input_formats=["%Y-%m-%dT%H:%M"],
    )