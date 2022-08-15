from curses.ascii import NUL
from rest_framework import serializers

from ..models.users import User


class UserSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = User
        # fields = '__all__'
        fields = ('id', 'username', 'first_name', 'last_name', 'password', 'rol')
        
    def to_representation(self, instance):
        
        return {
            'id': instance.id,
            'username': instance.username,
            'first_name': instance.first_name,
            'last_name': instance.last_name,
            'password': instance.password,
            'rol': instance.rol,
        }