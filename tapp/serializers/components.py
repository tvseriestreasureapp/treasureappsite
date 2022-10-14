from rest_framework import serializers
from tapp.models.components import Actor, BTS, Cast, Crew, Event, Art,Collab, Magazine, Poster, Soundtrack


class BTSSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=BTS

class CollabSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=Collab

class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=Art

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=Event


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=Actor


class SoundtrackSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=Soundtrack

class PosterSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=Poster

class MagazineSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=Magazine

class CastSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=Cast


class CrewSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model=Crew