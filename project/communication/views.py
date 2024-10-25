from django.shortcuts import render, redirect
from uuid import uuid4
from user.models import User
from communication.models import Room
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from datetime import datetime
from .forms import MessageForm
import pytz

# Create your views here.

def video_call(request):
    room_name = str(uuid4())
    return render(request, 'communication/video_call.html', {'room_name': room_name})

def ListarMentores(request):
    listM = User.objects.filter(typeUser='Mentor')
    return render(request, 'communication/dashboardChat.html', {'mentores': listM})

@login_required
def iniciarChat(request, cpfMentor):
    cpfMentorado = request.user.cpf
    SalaE = Room.objects.filter(cpfMentor=cpfMentor, cpfMentorado=cpfMentorado).first()
    if not SalaE:
        newRoom = Room(cpfMentor=cpfMentor, cpfMentorado=cpfMentorado)
        newRoom.save()
        sala_id = newRoom.salaId
    else:
        sala_id = SalaE.salaId
    return redirect('communication:chat', sala_id=sala_id)

@login_required
def chat(request, sala_id):
    try:
        room = Room.objects.get(salaId=sala_id)
    except Room.DoesNotExist:
        return render(request, '404.html', status=404)

    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            mensagem_conteudo = form.cleaned_data['mensagens']
            timestamp = datetime.now(pytz.timezone('America/Sao_Paulo'))

            nova_mensagem = {
                'sender': request.user.cpf,
                'content': mensagem_conteudo,
                'timestamp': timestamp.isoformat()
            }

            if isinstance(nova_mensagem, dict):
                room.mensagens.append(nova_mensagem)
                room.save()
            else:
                return render(request, 'communication/dashboardSala.html', {
                    'form': form,
                    'room': room,
                    'messages': room.mensagens,
                    'error': 'Formato de mensagem inválido.'
                })

            return redirect('communication:chat', sala_id=sala_id)
    else:
        form = MessageForm()

    return render(request, 'communication/dashboardSala.html', {
        'form': form,
        'room': room,
        'messages': room.mensagens
    })

@login_required
def viewsChats(request):
    typeuser = request.user.typeUser
    cpflogado = request.user.cpf
    get_rooms = lambda user_type: Room.objects.filter(
        cpfMentor=cpflogado) if user_type == 'Mentor' else Room.objects.filter(cpfMentorado=cpflogado)
    salas = get_rooms(typeuser)
    salas_data = [
        {
            'salaId': sala.salaId,
            'cpfMentor': sala.cpfMentor,
            'cpfMentorado': sala.cpfMentorado,
            'mensagens': sala.mensagens[:2],
        }
        for sala in salas
    ]
    #return JsonResponse({'salas_abertas': salas_data})  
    return render(request, 'communication/dashboardChat.html', {'salas_abertas': salas_data})


def entrar_na_sala(request, salaId):
    try:
        sala = Room.objects.get(salaId=salaId)
    except Room.DoesNotExist:
        return render(request, 'pagina_erro.html', {'mensagem': 'Sala não encontrada'})

    form = MessageForm(request.POST or None)

    if request.method == 'POST' and form.is_valid():
        mensagem_conteudo = form.cleaned_data['mensagens']
        timestamp = datetime.now(pytz.timezone('America/Sao_Paulo'))

        nova_mensagem = {
            'sender': request.user.cpf,
            'content': mensagem_conteudo,
            'timestamp': timestamp.isoformat()
        }

        if isinstance(nova_mensagem, dict):
            sala.mensagens.append(nova_mensagem)
            sala.save()
        else:
            return render(request, 'communication/dashboardSala.html', {
                'form': form,
                'room': sala,
                'messages': sala.mensagens,
                'error': 'Formato de mensagem inválido.'
            })

        return redirect('communication:entrar_na_sala', salaId=salaId)

    return render(request, 'communication/dashboardSala.html', {
        'room': sala,
        'messages': sala.mensagens,
        'form': form,
    })
