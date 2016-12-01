from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.http import HttpResponseRedirect, HttpResponse
from login.models import *
from geopy.distance import vincenty
from urllib2 import urlopen
import json



# Create your views here.

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
	c=0;

	for i in users:
		data={}
		data['type'] = 'donor'
		data['username'] = str(i.username)
		data['first_name'] = str(i.first_name)
		data['last_name'] = str(i.last_name)

		data['lat'] = str(i.cur_lat) 
		data['long'] = str(i.cur_long)
		data['id']=c
		c+=1
		
		retData.append(data)

	for i in hosps:
		data={}
		data['type'] = 'hospital'
		data['name'] = str(i.hospitalName)
		data['username'] = str(i.username)
		data['lat'] = str(i.fix_lat)
		data['long'] = str(i.fix_long)
		data['id']=c
		c+=1
		
		retData.append(data)
						


	return JsonResponse(retData, safe = False)	

def updateLocation(request):
	retval = {'error': False, 'updated' : True}
	if(request.method=='GET'):
		username = request.GET['username']
		newlat = request.GET['lat']
		newlong =request.GET['long']
		if(Users.objects.filter(username=username).exists()):
			Users.objects.filter(username=username).update(cur_lat = newlat , cur_long = newlong)
			return JsonResponse(retval)
		else :
			retval['error'] = 'Username does not exists user returend at backend : ' + str(username)
			retval['updated'] = False
			return JsonResponse(retval)
	else:
		retval['error'] = 'Expected Get Request'
		return JsonResponse(retval)






# To make the function work for email just change the username field to email
# It will take 'hospital' as a parameter for email or username
# To see the format of the data recieved run the command given below from terminal
# 'curl --data 'hospital={username or email without brackets}' http://localhost:8000/getNearUsers/'
# Also you need to run 'pip install geopy' and please remove the unnecessary commands after reading them :p


def road_distance(hosp, allusers,type):
	userListToBeReturned = {'count':0}
	maximum_distance=287162252452

	key="&key=AIzaSyCxLotVeAyJaSZJwnoYmYmTRDTiIDriJ0M"
	url="https://maps.googleapis.com/maps/api/distancematrix/json?units=metric"
	origin="&origins="
	
	if(type=='hosp'):
		for i in allusers:
			origin=origin+str(i.cur_lat)+","+str(i.cur_long)+"|"
	else:
		for i in allusers:
			origin=origin+str(i.fix_lat)+","+str(i.fix_long)+"|"
			# print i.fix_lat, i.fix_long, i.username
	
	origin = origin[:-1]	
	
	destination="&destinations="+str(hosp[0])+","+(str(hosp[1]))
	
	url=url+origin+destination+key
	
	response = urlopen(url).read()
	response=json.loads(response)

	c=-1
	for i in allusers:
		c+=1
		if(response['rows'][c]['elements'][0]['status']!="ZERO_RESULTS"):
			dist=int(response['rows'][c]['elements'][0]['distance']['value'])
			time=int(response['rows'][c]['elements'][0]['duration']['value'])
			
			if(dist<=maximum_distance):
					if(userListToBeReturned['count']==0):
						userListToBeReturned['users']=[]
						userListToBeReturned['dist']=[]
						userListToBeReturned['time']=[]
						userListToBeReturned['lat']=[]
						userListToBeReturned['long']=[]
					
					userListToBeReturned['count']+=1
					userListToBeReturned['users'].append(i.username)
					userListToBeReturned['dist'].append(dist)
					userListToBeReturned['time'].append(time)
					if(type=='hosp'):
						userListToBeReturned['lat'].append(i.cur_lat)
						userListToBeReturned['long'].append(i.cur_long)
					else:
						userListToBeReturned['lat'].append(i.fix_lat)
						userListToBeReturned['long'].append(i.fix_long)
	print userListToBeReturned	
	return (userListToBeReturned)				






@csrf_exempt
def nearUsers(request):
	maximum_distance=2871622
	userListToBeReturned = {'count':0}
	if request.method=='POST':
		blood_required_at_hospital_data = {}
		blood_required_at_hospital_data['username']=str(request.POST.get('hospital'))
		if(Hospitals.objects.filter(username=blood_required_at_hospital_data['username']).exists()):
			hospital=Hospitals.objects.filter(username=blood_required_at_hospital_data['username'])
			blood_required_at_hospital_data['lat']=hospital[0].fix_lat
			blood_required_at_hospital_data['long']=hospital[0].fix_long

			allUsers=Users.objects.all()
			hosp = (blood_required_at_hospital_data['lat'],blood_required_at_hospital_data['long'])
			retVal = road_distance(hosp, allUsers , 'hosp')
			# print retVal
			return JsonResponse(retVal)
		else:
			print "ERROR :--- Hospital does not exists"
			return JsonResponse(userListToBeReturned)
	else:
		print "ERROR :--- Expected POST REQUEST"
		return JsonResponse(userListToBeReturned)
						
@csrf_exempt
def nearHosps(request):
	maximum_distance=2871622
	userListToBeReturned = {'count':0,'error':False}
	if request.method=='POST':
		nearData = {}
		nearData['username']=str(request.POST.get('username'))
		print nearData['username']
		if(Users.objects.filter(username=nearData['username']).exists()):
			user=Users.objects.filter(username=nearData['username'])
			nearData['lat']=user[0].cur_lat
			nearData['long']=user[0].cur_long
			# print ("near lat long =", nearData['lat'], nearData['long'])

			allHospitals=Hospitals.objects.all()
			user = (nearData['lat'],nearData['long'])
			retVal = road_distance(user, allHospitals,'user')
			# print retVal
			return JsonResponse(retVal)
		else:
			userListToBeReturned['error']='User Does not Exist. Recieved username at backend : ' + str(nearData['username'])
			print "ERROR :--- User Does not Exist. Recieved username at backend : " + str(nearData['username'])
			return JsonResponse(userListToBeReturned)
	else:
		userListToBeReturned['error']='Expected POST REQUEST'
		print "ERROR :--- Expected POST REQUEST"
		return JsonResponse(userListToBeReturned)
						
@csrf_exempt				
def FrontendDistance(request):
	ret={}
	ret['distance']="null"
	ret['time']="null"
	url=str(request.POST.get('url'))
	response = urlopen(url).read()
	response=json.loads(response)
	c=0	
	if(response['rows'][c]['elements'][0]['status']!="ZERO_RESULTS"):
		dist=str(response['rows'][c]['elements'][0]['distance']['text'])
		time=str(response['rows'][c]['elements'][0]['duration']['text'])
		ret['distance']=dist
		ret['time']=time
	
	print ret	
	return JsonResponse(ret)



@csrf_exempt
def RetHospLoc(request):
	ret={}
	hosp=str(request.POST.get('username'))

	ret['error']="true"
	if(Hospitals.objects.filter(username=hosp).exists()):
			hospital=Hospitals.objects.filter(username=hosp)
			ret['username']=hosp
			ret['lat']=hospital[0].fix_lat
			ret['long']=hospital[0].fix_long
			ret['error']="false"
	return JsonResponse(ret)

