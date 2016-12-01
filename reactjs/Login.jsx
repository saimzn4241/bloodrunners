import React from "react"
import { render } from "react-dom"


import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"
import {Media, Carousel, ResponsiveEmbed, Thumbnail,  Image} from "react-bootstrap"
import {bootstrapUtils,addStyle,  Fade, Collapse, ProgressBar, Alert, Badge, Label} from "react-bootstrap"


import LoginContainer from "./containers/LoginContainer"

export default class Login extends React.Component {
	  
	  constructor(props) {
	      super(props);
			
	      this.state = {
	         session: '',
	         showModal: this.props.showModal
	      }

	      this.updateState = this.updateState.bind(this);
	   }

	  close() {
	    this.props.closeProp();
	    //this.setState({ showModal: false });

	  }

	  open() {
	    this.setState({ showModal: true });
	  }


	   updateState(arg,loginEmail,loginPassword,userType) {
	      var _this = this;
	      this.setState({
	      	session: arg,
	        email: loginEmail,
	        password: loginPassword
      	});
	      this.props.updateStateProp(arg,loginEmail,loginPassword,userType);
	   }
	  

	  render() {

	  	if(this.props.type=='login'){
		    return (
				<div>  
				
				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
		          <Modal.Header closeButton>
		            <Modal.Title>Login</Modal.Title>
		          </Modal.Header>
				 <Modal.Body>
				<LoginContainer  
				 updateStateProp = {this.updateState}
				/>  
		    	<h1>{this.state.session}</h1>	  
		    	
		    	</Modal.Body>
		    	<Modal.Footer>
	            <Button onClick={this.close.bind(this)}>Close</Button>
	          	</Modal.Footer>
		    	</Modal>
		    	</div>
		    )
	    }
	    else{
	    	return (<div></div>)
	    }
	  }
}
