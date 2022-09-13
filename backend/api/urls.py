from django.urls import path
from api import views
#from .views import RegisterAPI


urlpatterns = [
    path('UserPage/', views.getUserPage),
    path('Person/Update/<int:pk>', views.ToVolunteer.as_view()),
    path('Person/', views.PersonTable.as_view()),
]
