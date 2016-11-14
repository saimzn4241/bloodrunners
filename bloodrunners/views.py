from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse

from .forms import NameForm
from firebase import firebase
    
def search_form(request):
    return render(request, 'search_form.html')

def search(request):
    # print(str(request.GET))
    if 'q' in request.GET:
        message = 'You searched for: %s' % str(request.GET['q'])
    else:
        message = 'You submitted an empty form.'
    return HttpResponse(message)

def firebase_data(request):
    Firebase = firebase.FirebaseApplication('https://bloodrunners-1475434067536.firebaseio.com/', None)
    #Firebase = firebase.FirebaseApplication('https://bloodrunners-1475434067536.firebaseio.com/', authentication=None)
    result = Firebase.get('/', None)
    
    # new_user = 'arjun'
    # result = Firebase.post('/users', data={"name":new_user}, params={'print': 'pretty'})   
    
    #result = Firebase.delete('/users', 'Arjun')    

    # authentication = Firebase.Authentication('THIS_IS_MY_SECRET', 'ozgurvt@gmail.com', extra={'id': 123})
    # Firebase.authentication = authentication
    # print authentication.extra
    
    print result
    return HttpResponse(result)    


def get_name(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = NameForm(request.POST)
        # check whether it's valid:
        #print request.keys()
        for key in request.GET:
            print ("key=", key)
        for values in request.GET:
            print ("values=", values)    
        print "sdifsidufhsih"    
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect('/thanks/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()

    return render(request, 'name.html', {'form': form})