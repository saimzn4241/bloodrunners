from django.conf.urls import url, include
from rest_framework import routers
from fcm.views import DeviceViewSet

from rest_framework import serializers
from fcm.models import Device

from rest_framework import viewsets
from fcm.models import Device
from fcm.serializers import DeviceSerializer


