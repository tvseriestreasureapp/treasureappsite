from rest_framework import viewsets,permissions
from tapp.serializers.components import ActorSerializer,ArtSerializer,BTSSerializer, CastSerializer,CollabSerializer, CrewSerializer,EventSerializer, MagazineSerializer, PosterSerializer, SoundtrackSerializer
from tapp.models.components import Actor,Art,BTS, Cast,Collab, Crew,Event, Magazine, Poster, Soundtrack

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

class SoundtrackViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=SoundtrackSerializer
    queryset= Soundtrack.objects.all()

class PosterViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=PosterSerializer
    queryset= Poster.objects.all()


class MagazineViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=MagazineSerializer
    queryset= Magazine.objects.all()

class CastViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=CastSerializer
    queryset= Cast.objects.all()


class CrewViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class=CrewSerializer
    queryset= Crew.objects.all()