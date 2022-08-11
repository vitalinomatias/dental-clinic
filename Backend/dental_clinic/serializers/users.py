# from django.contrib.auth import authenticate

# from rest_framework import serializers

# class UserLoginSerializer(serializers.Serializer):
#     username = serializers.usernameField()
#     password = serializers.CharField(min_length=8, max_length=64)
    
#     def validate(self,data):
#         user = authenticate(username=data['username'], password=data['password'])
#         if not user:
#             raise serializers.ValidationError('Credenciales invalidas')
#         return data

from rest_framework import serializers

from ..models.users import User


class UserSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = '__all__'
        
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'username': instance.username,
            'first_name': instance.first_name,
            'last_name': instance.last_name,
            'password': instance.password,
            'rol': instance.rol,
            'speciality': {
                'id': instance.speciality.id,
                'name': instance.speciality.name
            }
        }