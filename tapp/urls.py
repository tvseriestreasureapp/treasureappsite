from django.urls import path, include
from tapp.views.user import LoginView, SignUpAPI
from tapp.views.components import ActorViewset, ArtViewset,BTSViewset,CollabViewset,EventViewset, PosterViewset, SoundtrackViewset
from tapp.views.bot import BotViewset
from rest_framework import routers
from django.views.decorators.cache import cache_page

router = routers.DefaultRouter()

router.register(r'signup',SignUpAPI, 'signup')
router.register(r'api/bts',BTSViewset, 'bts')
router.register(r'api/collab',CollabViewset, 'collab')
router.register(r'api/art',ArtViewset, 'art')
router.register(r'api/event',EventViewset, 'event')
router.register(r'api/actor',ActorViewset, 'actor')
router.register(r'soundtrack',SoundtrackViewset, 'soundtrack')
router.register(r'poster',PosterViewset,'poster')
router.register(r'bot', BotViewset,basename='bot')
# urlpatterns = router.urls

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/login', LoginView.as_view(), name='login'),
]