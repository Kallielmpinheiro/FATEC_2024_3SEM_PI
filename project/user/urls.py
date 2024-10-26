from django.urls import path
from . import views

app_name = 'user'

urlpatterns = [
    
    path('',views.index, name='index'),
    
    # User autenticação & cadastro
    
    path('cadastro/',views.cadastrarUsuario, name="cadastro"),
    path('login/',views.user_login, name='user_login'),
    path('logout/', views.logoutView, name='logout'),
    
    # dashboard
    
    path('dashboard/', views.dashboard, name='dashboard'),
    path('dashboard/mentorprofile/', views.mentorProfile, name='mentorProfile'),
    path('dashboard/profile/<str:id>', views.profileMentor, name='profile'),
    path('dashboard/conta/', views.dashboardConta, name= 'dashboardConta'),
    path('dashboard/chat/',views.dashboardChat, name='dashboardChat'),
    path('dashboard/agendamentosemanal/',views.agendamentoSemanal, name='agendamentoSemanal'),
    path('dashboard/agendamentomensal/',views.agendamentoMensal, name='agendamentoMensal'),
]