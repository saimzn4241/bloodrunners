from django.shortcuts import render
from login.models import *
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def getUserInfo(request,name):
	print name
	#username=request.POST.get('username')
	username = name
	if(Users.objects.filter(username=username).exists()):
		data = {}
		x = Users.objects.filter(username=username)
		data['type'] = 'donor'
		data['username'] = str(x[0].username)
		data['first_name'] = str(x[0].first_name)
		data['last_name'] = str(x[0].last_name)
		data['email'] = str(x[0].email)
		data['address'] = str(x[0].address)
		data['city']=str(x[0].city)
		data['state'] = str(x[0].state)
		data['country'] = str(x[0].country)
		data['bg']=str(x[0].bg)
		print(type(x[0].badges))
		data['badges']=int(x[0].badges)
		data['dob']=str(x[0].dob)
		data['contact']=int(x[0].contact)
		data['age']=int(x[0].age)
		data['status']=int(x[0].status)
		data['hospitals']= []
		contribution=Link.objects.filter(user=x[0])
		if(contribution.exists()):
			for i in contribution:
				when={}
				when['name']=str(i.hospitals.hospitalName)
				when['status']=i.status
				data['hospitals'].append(when)
		return JsonResponse(data)
	
	elif(Hospitals.objects.filter(username=username).exists()):
		data = {}
		x = Hospitals.objects.filter(username=username)
		
		data['name'] = str(x[0].hospitalName)
		data['type'] = 'hospital'
		data['username'] = str(x[0].username)
		data['cp1First_name']=str(x[0].cp1First_name)
		data['cp1Last_name']=str(x[0].cp1Last_name)
		data['cp1Contact']=int(x[0].cp1Contact)

		data['cp2First_name']=str(x[0].cp2First_name)
		data['cp2Last_name']=str(x[0].cp2Last_name)
		data['cp2Contact']=int(x[0].cp2Contact)

		data['cp3First_name']=str(x[0].cp3First_name)
		data['cp3Last_name']=str(x[0].cp3Last_name)
		data['cp3Contact']=int(x[0].cp3Contact)

		data['street']=str(x[0].street)
		data['city']=str(x[0].city)
		data['state']=str(x[0].state)
		data['country']=str(x[0].country)
		data['verified']=int(x[0].verified)

		data['users']= []
		contribution=Link.objects.filter(hospitals=x[0])
		if(contribution.exists()):
			for i in contribution:
				when={}
				when['first_name']=str(i.user.first_name)
				when['last_name']=str(i.user.last_name)
				when['status']=i.status
				data['users'].append(when)
		return JsonResponse(data)
	else :
		data = {}
		data['type'] = 'null'
		return JsonResponse(data)

def getUserLocation(request):
	userLocationData = Users.objects.values_list('fix_lat','fix_long')
	retData = []
	for i in userLocationData:
		tempData = []
		tempData.append(i[0])
		tempData.append(i[1])
		retData.append(tempData)
	return JsonResponse(retData,safe = False)

def getHospitalLocation(request):
	hospitalLocationData = Hospitals.objects.values_list('hospitalName','fix_lat','fix_long')
	retData = []
	for i in hospitalLocationData:
		tempData = []
		tempData.append(i[1])
		tempData.append(i[2])
		tempData.append(i[0])
		retData.append(tempData)
	return JsonResponse(retData,safe = False)

@csrf_exempt
def MarkerInfo(request):
	users=Users.objects.all()
	hosps=Hospitals.objects.all()
	retData=[]

	for i in users:
		data={}
		data['type'] = 'donor'
		data['username'] = str(i.username)
		data['first_name'] = str(i.first_name)
		data['last_name'] = str(i.last_name)

		data['lat'] = str(i.cur_lat) 
		data['long'] = str(i.cur_long)
		data['toggle']=0
		retData.append(data)

	for i in hosps:
		data={}
		data['type'] = 'hospital'
		data['name'] = str(i.hospitalName)
		data['username'] = str(i.username)
		data['lat'] = str(i.fix_lat)
		data['long'] = str(i.fix_long)
		data['toggle']=0
		retData.append(data)
						


	return JsonResponse(retData, safe = False)	