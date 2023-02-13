from django.contrib import admin
from django.urls import path, include

from core import views as core_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('vue-test', core_views.vue_test),
]
