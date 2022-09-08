from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from CPLN.models import *
from .serializers import *
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
#from django.views.generic.edit import CreateView

from rest_framework.views import APIView

@api_view(['GET'])
def getUserPage(request):
    users = UserPage.objects.all()
    serializer = PersonSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPerson(request):
    users = Person2.objects.all()
    serializer = UserPageSerializer(users, many=True)
    return Response(serializer.data)

class PersonTable(APIView):
    def get(self,request):
        detailsObj=Person2.objects.all()
        dlSerializeObj=PersonSerializer(detailsObj,many=True)
        return Response(dlSerializeObj.data)
    
    def post(self,request):
        serializeobj=PersonSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response("Person created")
        return Response(serializeobj.errors)

"""
class RegisterAPI(generics.GenericAPIView):
    serializer_class = CustomRegisterSerializer

    @method_decorator(login_required)
    def post(self, request, *args, **kwargs):
        if request.method=='POST':
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            return Response({
            "user": PersonSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
            })
        else:
            print("ERROR")
"""