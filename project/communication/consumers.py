from channels.generic.websocket import AsyncWebsocketConsumer
import json
from communication.models import Room
from datetime import datetime
import pytz
import logging

class ChatConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.sala_id = self.scope['url_route']['kwargs']['sala_id']
        self.room_group_name = f'chat_{self.sala_id}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['mensagem']
        sender = text_data_json['remetente']

        # Salva a mensagem no banco de dados
        await self.save_message(sender, message)

        # Envia a mensagem para o grupo
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'mensagem': message,
                'remetente': sender
            }
        )

    async def chat_message(self, event):
        message = event['mensagem']
        sender = event['remetente']

        await self.send(text_data=json.dumps({
            'mensagem': message,
            'remetente': sender
        }))

    async def save_message(self, sender, message):
        try:
            room = Room.objects.get(sala_id=self.sala_id)
            timestamp = datetime.now(pytz.timezone('America/Sao_Paulo')).isoformat()
            nova_mensagem = {
                'sender': sender,
                'content': message,
                'timestamp': timestamp
            }
            room.mensagens.append(nova_mensagem)
            room.save()
            print(f"Mensagem salva com sucesso na sala {self.sala_id}")
        except Room.DoesNotExist:
            logging.error(f"Erro: Sala com sala_id {self.sala_id} não encontrada.")
        except Exception as e:
            logging.error(f"Erro ao salvar a mensagem no MongoDB: {str(e)}")
