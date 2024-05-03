from django.urls import path
from api import views
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path("token/", views.TokenView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("dashboard/", views.dashboard),

]
