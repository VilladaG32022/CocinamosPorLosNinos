from django.urls import path
from api import views
#from .views import RegisterAPI


urlpatterns = [
    path('UserPage/', views.getUserPage),
    path('Person', views.getPerson),
    #path('Person/register/', RegisterAPI.as_view(), name='register'),
    path('PersonTable/', views.PersonTable.as_view()),
]