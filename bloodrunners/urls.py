"""bloodrunners URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.views import generic
from bloodrunners.views import *
from login.views import *


urlpatterns = [
  url(r'^thanks/$', generic.TemplateView.as_view(template_name='thanks.html')),
  url(r'^search-form/$', search_form),
  url(r'^search/$', search),
  
  url(r'^admin/', admin.site.urls),
  url(r'^your_name/$',get_name),
  url(r'^home/$',
      generic.TemplateView.as_view(template_name='home.html')),
  url(r'^login/$',
      generic.TemplateView.as_view(template_name='login.html')),
  url(r'^logout/$',logout),

  url(r'^signup/$',
      generic.TemplateView.as_view(template_name='signup.html')),
  
  url(r'^addUser/$',addUser),

  url(r'^login_verify/$',login),

  url(r'^extra$',
      generic.TemplateView.as_view(template_name='extra.html')),
  url(r'^$',
      generic.TemplateView.as_view(template_name='view1.html')),
   url(r'^data$',
      generic.TemplateView.as_view(template_name='data.html')),
   url(r'^data2$',
      generic.TemplateView.as_view(template_name='data2.html')),
   url(r'^maps$',
      generic.TemplateView.as_view(template_name='maps.html')),
   url(r'^req$',req),
]