from rest_framework import viewsets
from rest_framework.views import Response

#model
from ..models.pieces import Piece

#serializer
from ..serializers.pieces import PieceSerializers

class PieceViewSet(viewsets.ModelViewSet):
    queryset = Piece.objects.all()
    serializer_class = PieceSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})