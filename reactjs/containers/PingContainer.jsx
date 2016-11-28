import React from "react"
import { render } from "react-dom"
import axios from 'axios'
import firebase from 'firebase'

export default class PingContainer extends React.Component {

	constructor(props){
		super(props);
		this.state={
			username : '',
			userType : '',
			sentRequest: '',
		};
	}

	componentWillMount(){
		axios.get('/checkSession/').then(function(result) {    
              var userType=result.data.userType;
              var username=result.data.username;
              console.log("PingContainer - "+username);
              console.log("PingContainer - "+userType);
              this.setState({username: username, userType:userType})
             }.bind(this));
	}

	PING(userRecieve){
		var url = ('userHospNotif/').concat(userRecieve);
	  	const rootRef= firebase.database().ref().child(url);
	  
	  	rootRef.push({
		  	hospUsername: this.state.username,
		  	read: 'False'
	  	});
    }

    MainPing(){
      	var qs = require('qs');
        // console.log("main ping");
      	axios.post('/getNearUsers/',qs.stringify({hospital: this.state.username})).then(function(result){
        	console.log(result);
        	var numberOfRecievers = result.data.count;
	        // console.log(numberOfRecievers);
	        // console.log(result.data.users[0]);
	        var pingSendToUsers = []
	        pingSendToUsers.push(<pre>User       distance       time</pre>);
	        for (var i = 0; i < numberOfRecievers; i++) {
	        	console.log(result.data.users[i]);
	        	this.PING(result.data.users[i]);
	        	pingSendToUsers.push(<pre>{result.data.users[i]}       {result.data.dist[i]}       {result.data.time[i]}</pre>);
	        }
	        this.setState({
	        	sentRequest: pingSendToUsers
	        });
	    }.bind(this));
    }

	render(){
		if(this.state.userType=='hospital')
		{
			return(
				<div>
					<h1>Verified...!!</h1>
					<input type="button" value="PING" onClick={this.MainPing.bind(this)}/>
					{ this.state.sentRequest!=''?
						<div>
							<h1>Notifications send to Following People</h1>
							{this.state.sentRequest}
						</div>
						:
						<div></div>
					}
				</div>
			);
		}
		else
		{
			return(
				<div>
					<h1>Not Verified...!!</h1>

				</div>
			);
		}
		
	}
}