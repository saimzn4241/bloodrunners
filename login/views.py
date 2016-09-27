from django.shortcuts import render
from models import Users
import datetime
# Create your views here.
from django.http import HttpResponseRedirect, HttpResponse


def addUser(request):
	print(request.GET)
	x=str(request.GET['bday'])
	x=x.split("-")
	print x
	x=datetime.date(int(x[0]),int(x[1]),int(x[2]))
	
	user = Users(
		username=str(request.GET['username']),
		password=str(request.GET['password']),
		first_name=str(request.GET['first_name']),
		last_name=str(request.GET['last_name']),
		email=str(request.GET['email']),
		address=str(request.GET['address']),
		city=str(request.GET['city']),
		state=str(request.GET['state']),
		country=str(request.GET['country']),
		dob=x,
		
		bg=str(request.GET['bg']),
		contact=int(request.GET['contact']))
	user.save()
	#print (user.objects.all())
	return HttpResponse("got")

def login(request):
	print(request.GET)
	username=str(request.GET['username'])
	password=str(request.GET['password'])
	
	if(Users.objects.filter(password=password, username=username).exists()):
		return HttpResponse("logged-in")	
	else:
		return HttpResponse("incorrect data")	


	
