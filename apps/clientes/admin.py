from django.contrib import admin
from .models import CustomerModel, AdressModel
# Register your models here.

admin.site.register(CustomerModel)
admin.site.register(AdressModel)