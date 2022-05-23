from rest_framework import viewsets, permissions
from tapp.models.bot import Bot
from tapp.serializers.bot import BotSerializer


class BotViewset(viewsets.ModelViewSet):
    serializer_class = BotSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Bot.objects.all()