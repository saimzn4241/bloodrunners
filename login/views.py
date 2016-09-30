from django.shortcuts import render
from models import Users,Hospitals

# Create your views here.
from django.http import HttpResponseRedirect, HttpResponse
import datetime
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def addUser(request):
	# print ("SEE THIS :-",str(request.POST.get('username')),"GOt NOTHING")
	if request.method=='GET':
		if(request.POST.get('type')=='donor'):
			print "Got the post req"
			print(request.POST.get('bday'))
			x=str(request.POST.get('bday'))
			x=x.split("-")
			print(x[2],x[0],x[2])
			x=datetime.date(int(x[2]),int(x[1]),int(x[0]))

			user = Users(
				username=str(request.POST.get('username')),
				password=str(request.POST.get('password')),
				first_name=str(request.POST.get('first_name')),
				last_name=str(request.POST.get('last_name')),
				email=str(request.POST.get('email')),
				address=str(request.POST.get('address')),
				city=str(request.POST.get('city')),
				state=str(request.POST.get('state')),
				country=str(request.POST.get('country')),
				dob=x,
				gender=str(request.POST.get('gender')),
				bg=str(request.POST.get('bg')),
				contact=str(request.POST.get('contact')))
			user.save()
		elif(request.POST.get('type')=='hospital'):
			user = Hospitals(
				username=str(request.POST.get('username')),
				password=str(request.POST.get('password')),
				cp1First_name=str(request.POST.get('cp1First_name')),
				cp1Last_name=str(request.POST.get('cp1Last_name')),
				cp1Contact=str(request.POST.get('cp1Contact'))
				)
			user.save()
		return HttpResponse("got")
	else :
		return HttpResponse("Not ")

@csrf_exempt
def login(request):
	print(request.POST.get('username'))
	username=str(request.POST.get('username'))
	password=str(request.POST.get('password'))
	
	if(Users.objects.filter(password=password, username=username).exists()):
		return HttpResponse("logged-in")	
	else:
		return HttpResponse("incorrect data")	

