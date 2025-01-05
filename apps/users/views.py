from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView
from .models import User
from .serializers import LoginZerializer, LogoutSerializer




# Create your views here.

# aqui estoy logiando y creandole un token a el usuario 
class LoginView(APIView):
    '''This is the login view, in this view you can login and you can only open a section
      on a single computer, if it detects that they are trying to start a session on another computer,
        it automatically closes'''
    
    def post(self, request, *args, **kwargs):
        login_serializer = LoginZerializer(data=request.data)
        if login_serializer.is_valid():
            username = login_serializer.validated_data['username']
            
            usuario = User.objects.filter(username=username).first()
            if usuario and usuario.is_active:
                # Check if a token already exists for the user
                token = Token.objects.filter(user=usuario).first()
                
                # If a token already exists, delete it (to close any previous session)
                if token:
                    token.delete()

                # Create a new token
                token = Token.objects.create(user=usuario)

                # Response data
                data = {
                    'username': usuario.username,
                    'nombre': usuario.nombre,
                    'token': token.key
                }

                return Response({'message': 'Token creado exitosamente', 'user': data}, status=status.HTTP_200_OK)
            
            return Response({'error': 'El usuario está inactivo, inténtelo en otro momento'}, status=status.HTTP_404_NOT_FOUND)
        
        return Response({'error': 'Usuario no encontrado, intente de nuevo'}, status=status.HTTP_404_NOT_FOUND)


# aqui estoy serrando la secion
class logoutView(APIView):
    '''This is the view to close the section, you just have to send me the user's token by parameters'''

    def post(self, request, *args, **kwargs):
        serializer =  LogoutSerializer(data=request.data) 

        try:
            if serializer.is_valid():
                token_id = serializer.validated_data['token_id']
                token_instans = Token.objects.filter(key=token_id).first()
                if token_instans:
                    token_instans.delete()
                    return Response({'messege':'secion serrada exitosa'}, status=status.HTTP_200_OK)
                else:
                    return Response({'error':'no existen ningun usuario'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'error':'introdusca el token'}, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'error':'hubo algun tipo de exepcion , intentelo de nuevo'}, status=status.HTTP_400_BAD_REQUEST)

