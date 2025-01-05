from rest_framework import serializers
from .models import CustomerModel, AdressModel
from apps.users.models import User
# from apps.users.serializers import UserSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'gmail']  # Asegúrate de incluir los campos que necesitas


class AdressSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdressModel
        fields = ['id', 'street', 'city', 'state', 'number', 'country']
        # fields = '__all__'

class CustomerSerializers(serializers.ModelSerializer):
    adress = AdressSerializer(many=True)  # Relación de uno a muchos
    user = UserSerializer()
    # user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())


    class Meta:
        model = CustomerModel
        fields = [
            'id',
            'birth_date',
            'created_at',
            'is_active',
            'maternal_last_name',
            'paternal_last_name',
            'phone',
            'updated_at',
            'adress',  # Corrige el nombre aquí
            'user'
        ]
