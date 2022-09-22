from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken ##para el token de autenticacion
from django.contrib.sessions.models import Session
from rest_framework.response import Response



from ..serializers.users import UserSerializers, UserLoginSerializer#, UserModelSerializers
from django.contrib.auth import authenticate, login, logout

from ..models.users import User


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(status=True)
    serializer_class = UserSerializers
    
    def list(self, request, *args, **kwargs):
        
        try:
            data = super().list(request, *args, **kwargs)
            
            return Response({'status': True, 'message': 'Exito', 'data': data.data})
        except Exception as e:
            return Response({'status': False, 'message': str(e)})
        
    
# class UserLoginAPIView(APIView):
    
#         # @csrf_exempt
#         def post(self, request, *args, **kwargs):
#             serializer = UserLoginSerializer(data=request.data)
#             serializer.is_valid(raise_exception=True)
#             user, token = serializer.save()
#             data = {
#                 'user': UserModelSerializers(user).data,
#                 'access_token': token
#             }
#             return Response(data, status=status.HTTP_201_CREATED)
        
class Login(ObtainAuthToken):
    
    def post(self, request, *args, **kwargs):
        login_serializer = self.serializer_class(data = request.data, context={'request': request})
        if login_serializer.is_valid():
            user = login_serializer.validated_data['user']
            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                user_serializer = UserSerializers(user)
                if created:
                    return Response({'status':True, 'Token': token.key, 'user': user_serializer.data}, status=status.HTTP_201_CREATED)
                else:
                    token.delete()
                    token = Token.objects.create(user=user)
                    return Response({'status':True, 'Token': token.key, 'user': user_serializer.data}, status=status.HTTP_201_CREATED)
            else:
                return Response({'status': 'Inactive', 'message':'Usuario inactivo'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'status': False, 'message': 'Credenciales invalidas'}, status=status.HTTP_400_BAD_REQUEST)
        
        # return Response({'message':'hoa desde response'}, status=status.HTTP_200_OK)

class Logout(APIView):
    
    def post(self, request, *args, **kwargs):
        try:
            token = request.data['token']
            token = Token.objects.filter(key = token).first()
            if token:
                token.delete()
                return Response({'status': True, 'message': 'token eliminado'})
            return Response({'message': 'token no coincida'})
        except:
            return Response({'message': 'no se ha encontrado token en la peticion'})

