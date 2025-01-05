from django.db import models
from apps.users.models import User
# Create your models here.

class AdressModel(models.Model):
    street = models.CharField(max_length=12)
    city = models.CharField(max_length=12)
    state = models.CharField(max_length=12)
    postal_code = models.CharField(max_length=4)
    number = models.IntegerField(null=True, blank=True)
    country = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Direcion'
        verbose_name_plural = 'Direciones'
        ordering = ['created_at']

    def __str__(self):
        return self.street

class CustomerModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customer')
    adress = models.ManyToManyField(AdressModel)
    maternal_last_name = models.CharField(max_length=15)
    paternal_last_name = models.CharField(max_length=15)
    phone = models.CharField(max_length=20)
    birth_date = models.DateField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_created=True, null=True, blank=True)

    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        ordering = ['created_at']

    def get_full_name(self):
        full_name = ''
        if self.paternal_last_name and self.maternal_last_name:
            full_name =  self.user.nombre + " "  + self.paternal_last_name + " " + self.maternal_last_name
        elif self.paternal_last_name and not self.maternal_last_name:
            full_name = self.user.nombre + " "  + self.paternal_last_name 
        elif self.maternal_last_name and not self.paternal_last_name:
            full_name = self.user.nombre + " "  + self.maternal_last_name

        return full_name
    
    def __str__(self):
        return self.user.username