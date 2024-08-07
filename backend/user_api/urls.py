from django.urls import path
from . import views

urlpatterns = [
	path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
    path('check-auth', views.CheckAuthView.as_view(), name='check-auth'),
	path('user', views.UserView.as_view(), name='user'),
]
