from django.shortcuts import render, redirect
from uuid import uuid4
from user.models import User
from communication.models import Room, generate_unique_sala_id
from django.http import JsonResponse, HttpResponseForbidden
from django.contrib.auth.decorators import login_required
from datetime import datetime
from .forms import MessageForm
import pytz
import logging
from mongoengine.errors import NotUniqueError, ValidationError

def video_call(request):
    room_name = str(uuid4())
    return render(request, 'communication/video_call.html', {'room_name': room_name})

def ListarMentores(request):
    listM = User.objects.filter(typeUser='Mentor')
    return render(request, 'communication/dashboardChat.html', {'mentores': listM})

@login_required
def iniciarChat(request, idMentor):
    if request.user.typeUser != 'Mentorado':
        return HttpResponseForbidden("Somente usuários Mentorados podem iniciar um chat.")

    try:
        mentorado_id = request.user.iduser
        mentor_id = idMentor

        sala_existente = Room.objects.filter(
            mentor_id=mentor_id,
            mentorado_id=mentorado_id
        ).first()

        if sala_existente:
            return redirect('communication:chat', salaId=sala_existente.salaId)

        salaId = generate_unique_sala_id()
        nova_sala = Room(
            mentor_id=mentor_id,
            mentorado_id=mentorado_id,
            salaId=salaId
        )

        try:
            nova_sala.save()
            return redirect('communication:chat', salaId=salaId)
        except (NotUniqueError, ValidationError) as e:
            logging.error(f"Erro ao criar sala: {str(e)}")
            return render(request, 'communication/pagina_erro.html', {
                'mensagem': "Erro ao criar sala. Por favor, tente novamente."
            })

    except Exception as e:
        logging.error(f"Erro ao criar sala: {str(e)}")
        return render(request, 'communication/pagina_erro.html', {
            'mensagem': "Não foi possível criar a sala de chat. Por favor, tente novamente."
        })

@login_required
def chat(request, salaId):
    try:
        room = Room.objects.get(salaId=salaId)
    except Room.DoesNotExist:
        return render(request, 'communication/pagina_erro.html', {
            'mensagem': "Sala de chat não encontrada."
        })

    form = MessageForm(request.POST or None)

    if request.method == 'POST' and form.is_valid():
        mensagem_conteudo = form.cleaned_data['mensagens']
        timestamp = datetime.now(pytz.timezone('America/Sao_Paulo'))
        nova_mensagem = {
            'sender': request.user.iduser,
            'content': mensagem_conteudo,
            'timestamp': timestamp.isoformat()
        }
        room.mensagens.append(nova_mensagem)
        room.save()
        return redirect('communication:chat', salaId=salaId)

    return render(request, 'communication/dashboardSala.html', {
        'form': form,
        'room': room,
        'messages': room.mensagens
    })

@login_required
def viewsChats(request):
    typeuser = request.user.typeUser
    user_id = request.user.iduser
    
    if typeuser == 'Mentor':
        salas = Room.objects.filter(mentor_id=user_id)
    else:
        salas = Room.objects.filter(mentorado_id=user_id)

    salas_data = [
        {
            'salaId': sala.salaId,
            'mentor_id': sala.mentor_id,
            'mentorado_id': sala.mentorado_id,
            'mensagens': sala.mensagens[:2] if sala.mensagens else []
        }
        for sala in salas
    ]
    
    return render(request, 'communication/dashboardChat.html', {
        'salas_abertas': salas_data
    })

@login_required
def entrar_na_sala(request, salaId):
    print(f"Entrando na sala com ID: {salaId}")
    try:
        sala = Room.objects.get(salaId=salaId)
    except Room.DoesNotExist:
        return render(request, 'pagina_erro.html', {
            'mensagem': 'Sala não encontrada'
        })

    form = MessageForm(request.POST or None)

    if request.method == 'POST' and form.is_valid():
        mensagem_conteudo = form.cleaned_data['mensagens']
        timestamp = datetime.now(pytz.timezone('America/Sao_Paulo'))
        nova_mensagem = {
            'sender': request.user.iduser,
            'content': mensagem_conteudo,
            'timestamp': timestamp.isoformat()
        }
        sala.mensagens.append(nova_mensagem)
        sala.save()
        return redirect('communication:entrar_na_sala', salaId=sala.salaId)

    return render(request, 'communication/dashboardSala.html', {
        'room': sala,
        'messages': sala.mensagens,
        'form': form
    })
