from rest_framework import viewsets
from rest_framework.views import Response

#model
from ..models.record_detail import RecordDetail

#serializer
from ..serializers.record_detail import RecordDetailSerializers

class RecordDetailViewSet(viewsets.ModelViewSet):
    queryset = RecordDetail.objects.all()
    serializer_class = RecordDetailSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})