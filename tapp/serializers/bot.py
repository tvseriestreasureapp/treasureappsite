from rest_framework import serializers
from tapp.models.bot import Bot


class BotSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Bot