from django.urls import path, include
from tapp.views.user import LoginView, SignUpAPI
from tapp.views.components import ActorViewset, ArtViewset,BTSViewset,CollabViewset,EventViewset
from tapp.views.bot import BotViewset
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'api/signup',SignUpAPI, 'signup')
router.register(r'api/bts',BTSViewset, 'bts')
router.register(r'api/collab',CollabViewset, 'collab')
router.register(r'api/art',ArtViewset, 'art')
router.register(r'api/event',EventViewset, 'event')
router.register(r'api/actor',ActorViewset, 'actor')
router.register(r'api/bot', BotViewset,'bot')
# urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
    path('api/login', LoginView.as_view(), name='login'),
]