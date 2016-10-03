from __future__ import unicode_literals

from django.db import models
from datetime import datetime


# Create your models here.

class Users(models.Model):
	gender = models.CharField(max_length=200)
	username = models.CharField(max_length=50)
	password = models.CharField(max_length=50)
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=40)
	email = models.EmailField()
 	address = models.CharField(max_length=50)
	city = models.CharField(max_length=60)
	state = models.CharField(max_length=30)
	country = models.CharField(max_length=50)
	bg = models. (max_length=200)
	badges = models.BigIntegerField(null=True)
	dob = models.DateField()
	contact = models.BigIntegerField(null=True)
	age = models.BigIntegerField(default=0)
	status = models.BigIntegerField(null=True) # 1 for active, 2 for temp, 3 for non active
	
	def __unicode__(self):
		return self.first_name
	# def __init__(self, dob, *args, **kwargs):
	# 	super(models.Model, self).__init__(self, *args, **kwargs)
	# 	today = date.today()
	# 	self.age = today.year - dob.year
	# 	if today.month < dob.month or today.month == dob.month and today.day < dob.day:
	# 		self.age -= 1

class Hospitals(models.Model):
	hospitalName = models.CharField(max_length=200)
	username = models.CharField(max_length=50)
	password = models.CharField(max_length=50)
	cp1First_name = models.CharField(max_length=200)
	cp1Last_name = models.CharField(max_length=200)
	cp1Contact = models.BigIntegerField(default=9999999999)
	cp2First_name = models.CharField(max_length=200,null=True)
	cp2Last_name = models.CharField(max_length=200,null=True)
	cp2Contact = models.BigIntegerField(default=9999999999,null=True)
	cp3First_name = models.CharField(max_length=200,null=True)
	cp3Last_name = models.CharField(max_length=200,null=True)
	cp3Contact = models.BigIntegerField(default=9999999999,null=True)
	street = models.CharField(max_length=100)
	city = models.CharField(max_length=100)
	state = models.CharField(max_length=100)
	country = models.CharField(max_length=100)
	verified = models.BigIntegerField(default=0)

	def __unicode__(self):
		return self.first_name


class user2(models.Model):
	username = models.CharField(max_length=50)
	password = models.CharField(max_length=50)
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=40)

	def __unicode__(self):
		return self.first_name

class Link(models.Model):
	user = models.ForeignKey(Users, on_delete=models.CASCADE)
	hospitals = models.ForeignKey(Hospitals, on_delete=models.CASCADE)
	status=models.BooleanField(default=False)
	def __unicode__(self):
		return self.user