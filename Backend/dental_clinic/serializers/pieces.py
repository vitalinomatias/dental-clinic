from rest_framework import serializers

#model
from ..models.pieces import Piece

class PieceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Piece
        fields = '__all__'