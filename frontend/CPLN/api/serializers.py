"""
    def create(self, validated_data):
        user = Usuario(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


"""

from rest_framework import serializers
#from rest_auth.registration.serializers import RegisterSerializer
from CPLN.models import *

class UserPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPage
        fields = ('username', 'password')

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person2
        fields = '__all__'

# Register Serializer
class CustomRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('first_name', 'last_name', 'dni', 'email', 'telephone', 'password', 'candidate')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        newUser = Person.objects.create_user(validated_data['first_name'], validated_data['last_name'], validated_data['dni'], validated_data['email'], validated_data['telephone'], validated_data['password'], validated_data['candidate'])

        return newUser
