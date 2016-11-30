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

	render(){
		if(this.state.username!='')
		{
			return(
				<div>Havin fun {this.state.username}...?</div>

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