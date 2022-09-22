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
        
    def create(self, request, *args, **kwargs):
        data = super().create(request, *args, **kwargs)
        return Response({'status': True, 'message': 'Exito', 'data': data.data})
    
    def update(self, request, *args, **kwargs):
        
        data =  super().update(request, *args, **kwargs)
        return Response({'status': True, 'message': 'Exito', 'data': data.data})
    
class SearchRecordDetailViewSet(viewsets.ModelViewSet):
    
    def list(self, request, id, *args, **kwargs):
        queryset = RecordDetail.objects.filter(record__id=id)
        result = RecordDetailSerializers(queryset, many=True)
        
        if result.data == []:
            return Response({'status': False, 'message': 'No existe'})
        else:
            
            costo = [res['cost'] for res in result.data]
            total = sum(costo)                            
            return Response({'status': True, 'message': 'Exito', 'data': result.data, 'total': total})
    