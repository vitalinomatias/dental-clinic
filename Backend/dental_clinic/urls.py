from django.db import router
from django.urls import path

from rest_framework.routers import DefaultRouter

#views

from .viewsets.specialities import SpecialityViewSet
from .viewsets.users import UserViewSet
#vista de login



router = DefaultRouter()

router.register(r'speciality', SpecialityViewSet)
router.register(r'user', UserViewSet)


urlpatterns = router.urls

urlpatterns += [
    # path('login/', UserLoginAPIView.as_view(), name='login' )
]
