from django.contrib import admin
from django.urls import path, iclude

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/va/cars/', include('cars.urls')),

]
