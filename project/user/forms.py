from django import forms
from .models import User, Perfil
from django.forms import PasswordInput

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

   
        
from django import forms

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
        )
    )

    areaAtuacao = forms.CharField(
        widget=forms.TextInput(
            attrs={ "class": "form-control"}
        )
    )
    sobre = forms.CharField(
        max_length=255, label='Sobre', 
        widget=forms.Textarea(
            attrs={"rows":"5", "class": "form-control "}
        )
    )
    nivelExperiencia = forms.ChoiceField( 
        choices= [
                ('junior', 'Junior'), 
                ('pleno', 'Pleno'), 
                ( 'senior', 'Sênior')
        ],
        widget= forms.Select(attrs={ "class": "form-control"})
    )
    
    facebook = forms.CharField(
        max_length=255, 
        label='Facebook', 
        widget=forms.TextInput(attrs={ "class": "form-control"})
    )
    github = forms.CharField(
        max_length=255, 
        label='Github',  
        widget=forms.TextInput(attrs={ "class": "form-control"})
    )
    instagram = forms.CharField(
        max_length=255, 
        label='Instragram',  
        widget=forms.TextInput(attrs={ "class": "form-control"})
    )
    linkedIn = forms.CharField(
        max_length=255, 
        label='LinkedIn',  
        widget=forms.TextInput(attrs={ "class": "form-control"})
    )

    SKILLS_CHOICES = [
        ('python', 'Python'),
        ('java', 'Java'),
        ('javascript', 'JavaScript'),
        ('csharp', 'C#'),
        ('ruby', 'Ruby'),
        ('php', 'PHP'),
        ('html', 'HTML'),
        ('css', 'CSS'),
        ('typescript', 'TypeScript'),
        ('go', 'Go'),
        ('swift', 'Swift'),
        ('kotlin', 'Kotlin'),
        ('r', 'R'),
        ('scala', 'Scala'),
        ('perl', 'Perl'),
        ('lua', 'Lua'),
        ('sql', 'SQL'),
        ('bash', 'Bash'),
        ('powershell', 'PowerShell'),
        ('rust', 'Rust'),
        ('haskell', 'Haskell'),
        ('dart', 'Dart'),
        ('elixir', 'Elixir'),
        ('clojure', 'Clojure'),
        ('fsharp', 'F#'),
        ('objectivec', 'Objective-C'),
        ('matlab', 'MATLAB'),
        ('assembly', 'Assembly'),
        ('vba', 'VBA'),
        ('fortran', 'Fortran'),
        ('cobol', 'COBOL'),
        ('groovy', 'Groovy'),
        ('julia', 'Julia'),
        ('tcl', 'Tcl'),
        ('scheme', 'Scheme'),
        ('erlang', 'Erlang'),
        ('nim', 'Nim'),
        ('solidity', 'Solidity'),
        ('ada', 'Ada'),
        ('prolog', 'Prolog'),
        ('vbnet', 'VB.NET'),
        ('delphi', 'Delphi'),
        ('sml', 'Standard ML'),
    ]

    habilidades = forms.MultipleChoiceField(
        choices=SKILLS_CHOICES,
        widget=forms.CheckboxSelectMultiple(
            attrs={"class":"containerSelect"}
        ),
        label='Habilidades de Programação',
        required=False
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
        widget=forms.CheckboxSelectMultiple(
            attrs={"class":"containerSelect"}
        ),
        label='Dias Disponível',
        required=False
    )
 
    horaInicio = forms.TimeField(
        label="Hora inicial de Mentorias",
        widget=forms.TimeInput(
            format="%H:%M",
            attrs= {
                "type": "time",
                "class": "form-control" 
            }
        )
    )

    horaFinal = forms.TimeField(
        label="Hora final de Mentorias",
        widget=forms.TimeInput(
            format="%H:%M",
            attrs= {
                "type": "time",
                "class": "form-control" 
            }
        )
    )


