import React from "react"

import axios from 'axios';


import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"
import {Media, Carousel, ResponsiveEmbed, Thumbnail,  Image} from "react-bootstrap"
import {bootstrapUtils,addStyle,  Fade, Collapse, ProgressBar, Alert, Badge, Label} from "react-bootstrap"


export default class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      password: '',
      username: ''
      
    }
  }

  request() {
    var username=this.state.username;
    var password= this.state.password;
    var qs = require('qs');
    var _this = this;
    axios.post('/login_verify/' ,qs.stringify({password: password , username: username}))
    .then(function (response) {
     
        console.log(response);
        console.log("here");
          
       

          if(response.data.login_value=="ok"){

             _this.setState({
            value: response.data.login_value
            });

            console.log("okok1");
            var arg=_this.state.username;
            var email=(arg).concat("@gmail.com");
            console.log(arg,email,password);
             _this.props.updateStateProp(arg,email,password,response.data.userType);
          }
          else{
             _this.setState({
            value: "(incorrect username or password)"
            });
          }       
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }    


  updateUsername(e) {
      this.setState({username: e.target.value});
   }

   updatePassword(e) {
      this.setState({password: e.target.value});
   }

  render() {
    
      return (
        <div className="container">
          <div className="row">
            <div style={Style1}>

                  
                    <FieldGroup
                      id="formControlsText"
                      type="text"
                      label="Username"
                      placeholder="Enter your username"
                      onChange = {this.updateUsername.bind(this)}
                    />
                    <FieldGroup
                      id="formControlsPassword"
                      label="Password"
                      type="password"
                      placeholder="Enter your password" 
                      onChange = {this.updatePassword.bind(this)}
                    />
                  
                  <h4>{this.state.value}</h4>
                  
                  <Button type="submit" onClick={this.request.bind(this)}>
                    Login
                  </Button>

                  
                  

            </div>
          </div>
        </div>
      )
    

  }
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

var Style1 = {
    width: "30%",

    
};