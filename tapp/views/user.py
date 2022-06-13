from django.shortcuts import render
from rest_framework import viewsets
from tapp.models.user import User
from rest_framework import permissions
from tapp.serializers.user import SignUpSerializer, LoginSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from django.template.loader import get_template
import os

# Create your views here.
class SignUpAPI(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = SignUpSerializer
    queryset = User.objects

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        if user:
            return Response({
                "user": SignUpSerializer(user,
                context=self.get_serializer_context()).data
            })
        return Response
class LoginView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = LoginSerializer