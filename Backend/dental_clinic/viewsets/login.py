# from rest_framework import status
# from rest_framework.views import APIView

# #serializers
# from ..serializers.users import (UserLoginSerializer)
# class UserLoginAPIView(APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = UserLoginSerializer(data= request.data)
#         serializer.is_valid(raise_exception=True)
#         token = serializer.save()
#         data = {
#             'status': 'ok',
#             'token': token
#         }
#         return Response(data, status=status.HTTP_201_CREATED)