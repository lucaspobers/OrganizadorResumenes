from django.urls import path
from AppOrganizador import views

urlpatterns = [
    path('', views.home, name='Home'),
    path('python/', views.python, name='Python'),
    path('django/', views.django, name='Django'),
    path('javascript/', views.javascript, name='JavaScript'),
    path('css/', views.css, name='CSS'),
 ]

 # Cuando entro a estas vistas desde el home, no las puedo ver porque no 'toma' estas direcciones.

 