from django.urls import path
from . import views
from django.views.generic import TemplateView

app_name = 'user'

urlpatterns = [
    
    # Index (root URL)
    path('', TemplateView.as_view(template_name='user/index.html'), name='index'),

    # Authentication & Registration
    path('login/', views.UserLoginView.as_view(), name='UserLoginView'),
    path('cadastro/', views.UserRegistrationView.as_view(), name='UserRegistrationView'),
    path('logout/', views.LogoutView.as_view(), name='logout'),

    # Dashboard & Profile Views
    path('dashboard/', views.DashboardView.as_view(), name='DashboardView'),
    path('dashboard/conta/', views.DashboardContaView.as_view(), name='dashboardConta'),
    path('dashboard/mentorprofile/', views.MentorProfileListView.as_view(), name='MentorProfileListView'),
    path('dashboard/profile/<int:id>/', views.MentorProfileDetailView.as_view(), name='profile'),
    path('dashboard/Image/', views.UploadFotoPerfilView.as_view(), name='UploadFotoPerfilView'),
    path('dashboard/deleteImage/', views.DeleteFotoPerfilView.as_view(), name='DeleteFotoPerfilView'),
    path('dashboard/update_auth/', views.UpdateUserAuthView.as_view(), name='UpdateUserAuthView'),
    path('dashboard/agendamento/', views.Agendamento.as_view(), name='dashAgendamento'),
    path('dashboard/chat/', views.DashboardChatView.as_view(), name='dashboardChat'),
]