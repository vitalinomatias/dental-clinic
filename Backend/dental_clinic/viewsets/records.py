from rest_framework import viewsets
from rest_framework.views import Response
from rest_framework.permissions import IsAuthenticated

#model
from ..models.records import Record

#serializer
from ..serializers.records import RecordSerializers
from ..serializers.patients import PatientSerializers
class RecordViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)  
    queryset = Record.objects.all()
    serializer_class = RecordSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})
        
class SearchRecordViewSet(viewsets.ModelViewSet):
    
    def list(self, request, id, *args, **kwargs):
        queryset = Record.objects.filter(patient__id=id)
        result = RecordSerializers(queryset, many=True)
        if result.data == []:
            return Response({'status': False, 'message': 'No existe'})
        else:
            return Response({'status': True, 'message': 'Exito', 'data': result.data})
        
        # return Response({'status': True, 'message': 'Exito', 'data': result.data})