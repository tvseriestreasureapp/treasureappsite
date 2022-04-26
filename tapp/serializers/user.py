from rest_framework import serializers
from tapp.models.user import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate, get_user_model
from datetime import date


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class SignUpSerializer(serializers.ModelSerializer): 
    password = serializers.CharField(style = {'input_type': 'password'}, write_only = True) 

    class Meta:
        model = User
        fields = ('firstname', 'lastname','email','password')
        # extra_kwargs = {'password': {'write_only' : True}}

    def create(self, validated_data):  
        User = get_user_model()
        user = User.objects.create_user(
            validated_data['firstname'],
            validated_data['lastname'],
            validated_data['email'],
            validated_data['password'])
        return user

    # def validate(self, attrs):
    #     attrs = super().validate(attrs)
    #     user = User.objects.create_user(**attrs)
    #     user.save()
    #     return attrs

class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        return data