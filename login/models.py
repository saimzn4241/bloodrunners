from __future__ import unicode_literals

from django.db import models
from datetime import datetime


# Create your models here.

class Users(models.Model):
	first_name = models.CharField(max_length=200)
	last_name = models.CharField(max_length=200)
	email = models.EmailField()
 	address = models.CharField(max_length=200)
	city = models.CharField(max_length=200)
	state = models.CharField(max_length=200)
	country = models.CharField(max_length=200)
	bg = models.CharField(max_length=200)
	username=models.CharField(max_length=200)
	password=models.CharField(max_length=200)

	badges = models.BigIntegerField(null=True)
	dob = models.DateField()
	contact = models.BigIntegerField(default=0)
	age = models.BigIntegerField(null=True)
	status = models.BigIntegerField(null=True) # 1 for active, 2 for temp, 3 for non active
	
	def __unicode__(self):
		return self.first_name
	
	# def __init__(self, dob, *args, **kwargs):
	# 	super(models.Model, self).__init__(self, *args, **kwargs)
	# 	today = date.today()
	# 	self.age = today.year - dob.year
	# 	if today.month < dob.month or today.month == dob.month and today.day < dob.day:
	# 		self.age -= 1
