from curses.ascii import NUL
from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

from django.contrib.auth.hashers import make_password

from ..models.users import User



class UserSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = User
        # fields = '__all__'
        fields = ('id', 'username', 'first_name', 'last_name', 'password', 'rol')
    
    def validate_password(self, value):
        return make_password(value)
        
    def to_representation(self, instance):
        
        return {
            'id': instance.id,
            'username': instance.username,
            'first_name': instance.first_name,
            'last_name': instance.last_name,
            'rol': instance.rol,
        }

# class UserModelSerializers(serializers.ModelSerializer):
    
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'first_name', 'last_name', 'password', 'rol')
        
# @csrf_exempt        
class UserLoginSerializer(serializers.Serializer):
    
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, max_length=64)
    
    # @csrf_exempt
    def validate(self,data):
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError('credenciales invalidas')
        self.context['user'] = user
        return data
    
    # @csrf_exempt
    def create(self, data):
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key