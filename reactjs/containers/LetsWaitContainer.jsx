import React from "react"
import { render } from "react-dom"
import axios from 'axios'
import firebase from 'firebase'

export default class LetsWaitContainer extends React.Component {

	constructor(props){
		super(props);
		this.state={
			username : '',
			userType : '',
			accepted : 'none'
		};
	}

	componentWillMount(){
		axios.get('/checkSession/').then(function(result) {    
              var userType=result.data.userType;
              var username=result.data.username;
              console.log("LetsWait - "+username);
              console.log("LetsWait - "+userType);
              this.setState({username: username, userType:userType})
        }.bind(this));
	}

	checkNotification(){
		if(this.state.userType=='donor')
		{
			var url = ('hospitalAccepted/').concat(this.state.username);
		}
	}

	render(){
		if(this.state.username!='')
		{
			return(
				<div>
					<h3>Hello {this.state.username}, waiting for the hospital response!!</h3>
				</div>

			);
		}
		else
		{
			return(
				<div>Havin fun {this.state.username}...?</div>
			);	
		}
	}
}