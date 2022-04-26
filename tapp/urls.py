from django.urls import path, include
from tapp.views.user import LoginView, SignUpAPI
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'api/signup',SignUpAPI, 'signup')
# urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
    path('api/login', LoginView.as_view(), name='login'),
]