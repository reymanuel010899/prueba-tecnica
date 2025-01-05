from rest_framework.generics import ListAPIView, RetrieveAPIView
# from taskproject.tasks import  send_email_tasks
from .models import CustomerModel
from .serializers import CustomerSerializers
from drf_yasg.utils import swagger_auto_schema


# Create your views here.


class   CustomerList(ListAPIView):
    # list a task
    serializer_class = CustomerSerializers
    @swagger_auto_schema(
        operation_summary="Obtener clientes",
        operation_description="Listas todos los clientes",
        responses={200: 'Éxito', 400: 'Error de solicitud'},
    )
    def get_queryset(self):
        return CustomerModel.objects.all()
    

class CustomerDetail(RetrieveAPIView):
    serializer_class = CustomerSerializers
    queryset = CustomerModel.objects.all()

    @swagger_auto_schema(
        operation_summary="detalle clientes",
        operation_description="Esta vista detalla cliente",
        responses={200: 'Éxito', 400: 'Error de solicitud'},
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

