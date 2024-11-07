from django.urls import path
from . import views

app_name = 'communication'

urlpatterns = [
    
    # urls chamada video
    
    path('dashboard/videoCall', views.video_call, name='video_call'),
    
    # urls chat
    
    path('room/dashboard/', views.ListarMentores, name='ListarMentores'),
    path('room/start/<str:idMentor>/', views.iniciarChat, name='iniciarChat'),
    path('room/chat/<str:sala_id>/', views.chat, name='chat'),
    path('room/list/', views.viewsChats, name='viewsChats'),
    path('room/enter/<str:salaId>/', views.entrar_na_sala, name='entrar_na_sala'),
    
]
