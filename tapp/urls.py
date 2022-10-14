from django.urls import path, include
from tapp.views.user import LoginView, SignUpAPI
from tapp.views.components import ActorViewset, ArtViewset,BTSViewset, CastViewset,CollabViewset, CrewViewset,EventViewset, MagazineViewset, PosterViewset, SoundtrackViewset
from tapp.views.bot import BotViewset
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'signup',SignUpAPI, 'signup')
router.register(r'bts',BTSViewset, 'bts')
router.register(r'collab',CollabViewset, 'collab')
router.register(r'art',ArtViewset, 'art')
router.register(r'event',EventViewset, 'event')
router.register(r'actor',ActorViewset, 'actor')
router.register(r'soundtrack',SoundtrackViewset, 'soundtrack')
router.register(r'poster',PosterViewset,'poster')
router.register(r'bot', BotViewset,basename='bot')
router.register(r'mag', MagazineViewset,basename='magazine')
router.register(r'cast', CastViewset,basename='cast')
router.register(r'crew', CrewViewset,basename='crew')
# urlpatterns = router.urls

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/login', LoginView.as_view(), name='login'),
]