from rest_framework import serializers
from tapp.models.components import Actor, BTS, Event, Art,Collab


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