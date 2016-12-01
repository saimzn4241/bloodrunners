import React from "react"
import { render } from "react-dom"

import SignupContainer from "./containers/SignupContainer"
import Headline from "./components/Headline"


import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"
import {Media, Carousel, ResponsiveEmbed, Thumbnail,  Image} from "react-bootstrap"
import {bootstrapUtils,addStyle,  Fade, Collapse, ProgressBar, Alert, Badge, Label} from "react-bootstrap"


export default class Signup extends React.Component {
  constructor(props) {
        super(props);
        
        this.state = { // this is your default state
          type: 'initial',
          key: 1
        }
      }
  donor() {
        this.setState({
          type: 'donor'
        })
      }

  hospital() {
        this.setState({
          type: 'hospital'
        })
      }
  handleSelect(key) {
    if(key==1){
      this.setState({
          key: key,
          type: 'donor'
        })
      
    }
    else if(key==2){
      this.setState({
          key: key,
          type: 'hospital'
        })
      }

    //alert('selected ' + key);
    
  }

  render() {

    var divStyle = {
      backgroundColor: 'white',
      width: 400
    }
    
    return (
  		<div>
      <br></br>
      <Headline/>
         <div className="container">
              <div className="row">
                <div className="col-sm-12">
                          <h1>Signup</h1>
            			       <h3>Registration Type :</h3>


                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="controlled-tab-example">
                      <Tab eventKey={1} title="Donor"><SignupContainer type="donor"/></Tab>
                      <Tab eventKey={2} title="Hospital"><SignupContainer type="hospital"/></Tab>
                    </Tabs> 
            		
            	 </div>
               </div>
              </div>
              
      <br></br>
      <br></br>
      <br></br>
          </div>    
    );
  }
}
