from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth-base/', include('rest_framework.urls')),
    path('api/v1/cars/', include('cars.urls')),
    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/token', include('djoser.urls.authtoken')),

]
