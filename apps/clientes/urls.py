from django.contrib import admin
from django.urls import path
from . import views

app_name = 'customer'

urlpatterns = [
    path('list/', views.CustomerList.as_view(), name='list'),
    path('detail/<int:pk>/', views.CustomerDetail.as_view(), name='detail')
]
