import React from "react"
import { render } from "react-dom"
import axios from 'axios'
import firebase from 'firebase'
import MapUserHosp from './MapUserHosp'
export default class LetsWaitContainer extends React.Component {

	constructor(props){
		super(props);
		this.state={
			username : '',
			userType : '',
			accepted : 'none',
			waitingFor : '',
			userAccepted : '',
			userlat: '',
			userlong: '',
			type: 1,
		};
	}

	componentWillMount(){
		axios.get('/checkSession/').then(function(result) {    
              var userType=result.data.userType;
              var username=result.data.username;
              // console.log("LetsWait - "+username);
              // console.log("LetsWait - "+userType);
              this.setState({
              	username: username, 
              	userType:userType
              },function check(){
	              	var url = window.location.href;
					var n = url.indexOf('=');
					// console.log(n);
					var username = "";
					for(var i = n+1 ;i<url.length;i++)
					{
						username=username+url[i];
					}
					// console.log(username);
					this.setState({
						waitingFor: username
					},function notif(){
						this.checkNotification();
					}.bind(this));
		        });
        }.bind(this));
		
	}

	checkNotification(){
		// console.log("inside");
		// console.log(this.state.userType);
		if(this.state.userType=='donor')
		{
			// console.log(this.state.userType);
			var url = ('hospitalAccepted/').concat(this.state.username);
			const rootRef= firebase.database().ref().child(url);

			rootRef.on('value', function(snapshot){
                console.log(snapshot.val());
                var objectReturned=snapshot.val();
                var status='';
                for(var key in objectReturned){
                	if(objectReturned[key].hospUsername==this.state.waitingFor && status=='')
                	{
                		status = objectReturned[key].status;
                	}
                }
                // rootRef.off();
            	this.setState({
              		userAccepted: status
            	});     
            }.bind(this));
		}
		else if(this.state.userType=='hospital')
		{
			// console.log(this.state.userType);
			var url = ('location/').concat(this.state.waitingFor);
			// console.log(url);
			const rootRef= firebase.database().ref().child(url);
			rootRef.on('value', function(snapshot){
                console.log(snapshot.val());
                var objectReturned=snapshot.val();
                var latitude = objectReturned.latitude;
                var longitude = objectReturned.longitude;
                
            	this.setState({
              		userlat:latitude,
              		userlong:longitude
            	});     
            }.bind(this));
		}
	}

	loc3(){
		var url = 'location/'+ this.state.username;
		console.log(url);
	    const rootRef= firebase.database().ref().child(url);
	    navigator.geolocation.getCurrentPosition(function(location) {
	      console.log("inside=>",location);

	      if(this.state.userlat!=location.coords.latitude || this.state.userlong!=location.coords.longitude){
	            // odlat=location.coords.latitude;
	            // odlong=location.coords.longitude;
	            console.log("here is change in firebase")
	            rootRef.set({
	                latitude: location.coords.latitude,
	                longitude: location.coords.longitude
	            });


	            this.setState({
	                userlat:location.coords.latitude,
	                userlong:location.coords.longitude
	            });   
	        }
	    }.bind(this))
	    
	    console.log(this.state.userlat, this.state.userlong)
	    this.setState({
	                type:1
	         });
  	}

	render(){
		if(this.state.userType=='donor')
		{
			if(this.state.userAccepted=='')
			{
				return(
					<div>
						<h3>Hello {this.state.username}, waiting for the hospital response!!</h3>
					</div>
				);
			}
			else if(this.state.userAccepted=='true')
			{
				//PAnndu maps
				return(
					<div>
						<h1>Here is your location and the hospital location </h1>
						{this.state.waitingFor!=''&& this.state.userlat!='' && this.state.userlong!=''?
						<MapUserHosp username={this.state.waitingFor} lat={this.state.userlat} long={this.state.userlong} />:<h1></h1>
						}	
						{
					        setTimeout(() => {
					          this.loc3()     
					        }, 10000)
					    }
					</div>
				);
			}
			else
			{
				return(
					<div>
						<h2 align="center">Thanks for helping...!!</h2>
						<div>
							<form method="get" action="/home">
			                	<button type="submit">HOME</button>
			                </form>
						</div>
					</div>
				);
			}
		}
		else if(this.state.userType=='hospital')
		{
			if(this.state.userlat=='' || this.state.userlong=='')
			{
				return(
					<div>
						<h3>Waiting for the user location..!!</h3>
					</div>
				);
			}
			else
			{
				//Pandu maps
				return(
					<div>
						<p>{this.state.userlat} ... {this.state.userlong}</p>
					</div>
				);
			}
		}
		else
		{
			return(
				<div>
					<h2 align="center">You are not logged in Go to home to login first...!!</h2>
						<div>
							<form method="get" action="/home">
			                	<button type="submit">HOME</button>
			                </form>
						</div>
				</div>
			);	
		}
	}
}