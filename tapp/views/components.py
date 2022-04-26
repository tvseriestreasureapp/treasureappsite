from rest_framework import viewsets,permissions
from tapp.serializers.components import ActorSerializer,ArtSerializer,BTSSerializer,CollabSerializer,EventSerializer
from tapp.models.components import Actor,Art,BTS,Collab,Event

class BTSViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=BTSSerializer
    queryset= BTS.objects.all()

class CollabViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=CollabSerializer
    queryset= Collab.objects.all()

class ArtViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=ArtSerializer
    queryset= Art.objects.all()

class EventViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=EventSerializer
    queryset= Event.objects.all()

class ActorViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=ActorSerializer
    queryset= Actor.objects.all()