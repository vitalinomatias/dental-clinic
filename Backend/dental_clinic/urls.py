from django.db import router
from django.urls import path

from rest_framework.routers import DefaultRouter

#views

from .viewsets.appointment import AppointmentViewSet, SearchAppointmentViewSet
from .viewsets.areas import AreaViewSet
from .viewsets.patients import PatientViewSet
from .viewsets.pieces import PieceViewSet
from .viewsets.record_detail import RecordDetailViewSet, SearchRecordDetailViewSet
from .viewsets.records import RecordViewSet, SearchRecordViewSet
from .viewsets.reservations import ReservationViewSet
from .viewsets.specialities import SpecialityViewSet, SpecilistsViewSet, UserSpecialist
from .viewsets.users import UserViewSet, Login, Logout
from .viewsets.reports import Report

router = DefaultRouter()

router.register(r'users', UserViewSet)
router.register(r'specialities', SpecialityViewSet)
router.register(r'specialists', SpecilistsViewSet)
router.register(r'pieces', PieceViewSet)
router.register(r'areas', AreaViewSet)
router.register(r'patients', PatientViewSet)
router.register(r'reservations', ReservationViewSet)
router.register(r'records', RecordViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r'record_detail', RecordDetailViewSet)

urlpatterns = router.urls

urlpatterns += [
    # path('login/', UserLoginAPIView.as_view(), name='login' )
    path('report/', Report.as_view({'get': 'list'})),
    # path('report/notassistdate/', NotAssistDate.as_view({'get': 'list'}) ),
    
    # path('login/', UserLoginAPIView.as_view(), name='login'),
    path('login/', Login.as_view()),
    path('logout/', Logout.as_view()),
    path('userspecialist/', UserSpecialist.as_view({'get': 'list'})),
    path('searchrecord/<int:id>/', SearchRecordViewSet.as_view({'get': 'list'})),
    path('recordetail/<int:id>/', SearchRecordDetailViewSet.as_view({'get': 'list'})),
    path('searchappointment/<int:id>', SearchAppointmentViewSet.as_view({'get': 'list'}))
    
]
