from rest_framework import viewsets

from ..serializers.users import UserSerializers

from ..models.users import User


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers