"""Defines URL patterns for core"""
from django.urls import path
from django.conf.urls import url, include
from . import views

app_name = 'core'

urlpatterns = [

    path('', views.ttest, name='ttest'),
    path('ttest', views.ttest, name='ttest'),
]
