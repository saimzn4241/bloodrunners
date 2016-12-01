import React from "react"
import { render } from "react-dom"
import ProfileContainer from "./containers/ProfileContainer"
import Headline from "./components/Headline"
import * as firebase from 'firebase'


import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"
import {Media, Carousel, ResponsiveEmbed, Thumbnail,  Image} from "react-bootstrap"
import {bootstrapUtils,addStyle,  Fade, Collapse, ProgressBar, Alert, Badge, Label} from "react-bootstrap"


class Profile extends React.Component {

  render() {
  	var config = {
		    apiKey: "AIzaSyByJRvqKlrKvvQFOnfsIe4FlyEWkBZqEhg",
		    authDomain: "bloodrunners-1475434067536.firebaseapp.com",
		    databaseURL: "https://bloodrunners-1475434067536.firebaseio.com",
		    storageBucket: "bloodrunners-1475434067536.appspot.com",
		    messagingSenderId: "801146093422"
	    };

	  	firebase.initializeApp(config);
    return (
		<div>
		<Headline></Headline>
		<div>	
		<Well bsSize="large">
		<ProfileContainer/>
		</Well>
		</div>
		</div>
    )
  }
}

render(<Profile/>, document.getElementById('Profile'))