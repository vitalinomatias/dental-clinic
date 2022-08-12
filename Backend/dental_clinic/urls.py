from django.db import router
from django.urls import path

from rest_framework.routers import DefaultRouter

#views

from .viewsets.specialities import SpecialityViewSet
from .viewsets.users import UserViewSet
from .viewsets.patients import PatientViewSet
from .viewsets.reservations import ReservationViewSet
#vista de login



router = DefaultRouter()

router.register(r'speciality', SpecialityViewSet)
router.register(r'user', UserViewSet)
router.register(r'patient', PatientViewSet)
router.register(r'reservation', ReservationViewSet)


urlpatterns = router.urls

urlpatterns += [
    # path('login/', UserLoginAPIView.as_view(), name='login' )
]
