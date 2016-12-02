import React from "react"
import { render } from "react-dom"
import axios from 'axios'
import firebase from 'firebase'



import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"
import {Media, Carousel, ResponsiveEmbed, Thumbnail,  Image} from "react-bootstrap"
import {bootstrapUtils,addStyle,  Fade, Collapse, ProgressBar, Alert, Badge, Label} from "react-bootstrap"


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

	        

	        //pingSendToUsers.push(<pre>User          distance         time</pre>);
	        for (var i = 0; i < numberOfRecievers; i++) {
	        	console.log(result.data.users[i]);
	        	this.PING(result.data.users[i]);
	        	pingSendToUsers.push(
	        		<tr>
				        <td>{result.data.users[i]}</td>
				        <td>{result.data.dist[i]}</td>
				        <td>{result.data.time[i]}</td>
				 	</tr>
	        	);
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
				<div style={{backgroundColor: 'Black'}} style={{display: 'flex', justifyContent: 'center'}}>
					{ this.state.sentRequest!=''?
						<Well>
							<h1><b><u>Notification sent to following peoples</u></b></h1><br></br>
							<Table striped bordered condensed hover>
						    <thead>
						      <tr>
						        <th>User</th>
						        <th>Distance(in meters)</th>
						        <th>Time(in seconds)</th>
						      </tr>
						    </thead>
						    <tbody>
							{this.state.sentRequest}
							</tbody>
  							</Table>

						</Well>
						

						:
						
						<div style={{display: 'flex', justifyContent: 'center'}}>
						<h1 style={{display: 'flex', justifyContent: 'center' ,color:'White'}}>Press PING to initiate a blood request.  .</h1><br></br>
						<Button  style={{display: 'flex', justifyContent: 'center'}} value="PING" onClick={this.MainPing.bind(this)}><b>Ping</b></Button>
						</div>
					}
				</div>
			);
		}
		else
		{
			return(
				<div>
					<h1 style={{color: 'Red'}}>Login or refresh(F5) to proceed Further.</h1>

				</div>
			);
		}
		
	}
}