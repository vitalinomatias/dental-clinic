from django.db import router
from django.urls import path

from rest_framework.routers import DefaultRouter

#views

from .viewsets.appointment import AppointmentViewSet
from .viewsets.areas import AreaViewSet
from .viewsets.patients import PatientViewSet
from .viewsets.pieces import PieceViewSet
from .viewsets.record_detail import RecordDetailViewSet
from .viewsets.records import Record, RecordViewSet
from .viewsets.reservations import ReservationViewSet
from .viewsets.specialities import SpecialityViewSet, SpecilistsViewSet
from .viewsets.users import UserViewSet
from .viewsets.reports import PeopleByDates

router = DefaultRouter()

router.register(r'user', UserViewSet)
router.register(r'speciality', SpecialityViewSet)
router.register(r'specilist', SpecilistsViewSet)
router.register(r'piece', PieceViewSet)
router.register(r'area', AreaViewSet)
router.register(r'patient', PatientViewSet)
router.register(r'reservation', ReservationViewSet)
router.register(r'record', RecordViewSet)
router.register(r'appointment', AppointmentViewSet)
router.register(r'record_detail', RecordDetailViewSet)

urlpatterns = router.urls

urlpatterns += [
    # path('login/', UserLoginAPIView.as_view(), name='login' )
    path('peoplebydates/', PeopleByDates.as_view({'get': 'list'})),    
]
