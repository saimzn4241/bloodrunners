import React from "react"
import { render } from "react-dom"

import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"
import {Media, Carousel, ResponsiveEmbed, Thumbnail,  Image} from "react-bootstrap"
import {bootstrapUtils,addStyle,  Fade, Collapse, ProgressBar, Alert, Badge, Label} from "react-bootstrap"

var Practice6= React.createClass({
  
   getInitialState() {
    return {
      alertVisible: true, 
      open: true
    };
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }, 

  render: function() {
    

    return(
      <div>
      {glyphInstance}
      <br/>
      {labelInstance}
      <br/>
      {labelVariationInstance}
      <br/>
      {badgeInstance}
      <br/>
      {alertInstance}
      <br/>

      {this.state.alertVisible ?

         <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
          <p>
            <Button bsStyle="danger">Take this action</Button>
            <span> or </span>
            <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
          </p>
        </Alert>

         :   

         <Button onClick={this.handleAlertShow}>Show Alert</Button>
      }


  
      <br/>
      <br/>
      {progressInstance1}
      <br/>
      <br/>
      {progressInstance2}
      <br/>
      {progressInstance3}
      <br/>
      {progressInstance4}
      <br/>
      {progressInstance5}
      <br/>
      {progressInstance6}
      <br/>
      {progressInstance7}
      <br/>
       <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Collapse>
      </div>
      <br/>
       <div>
        <Button onClick={()=> this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Fade in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Fade>
      </div>
      <br/>
      {customButtonStyle}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      </div>
    );
  }
  
});
const glyphInstance = (
  <div>
    <ButtonToolbar>
      <ButtonGroup>
        <Button><Glyphicon glyph="align-left" /></Button>
        <Button><Glyphicon glyph="align-center" /></Button>
        <Button><Glyphicon glyph="align-right" /></Button>
        <Button><Glyphicon glyph="align-justify" /></Button>
      </ButtonGroup>
    </ButtonToolbar>
    <ButtonToolbar>
      <ButtonGroup>
        <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
        <Button><Glyphicon glyph="star" /> Star</Button>
        <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
        <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </div>
);
const labelInstance = (
  <div>
    <h1>Label <Label>New</Label></h1>
    <h2>Label <Label>New</Label></h2>
    <h3>Label <Label>New</Label></h3>
    <h4>Label <Label>New</Label></h4>
    <h5>Label <Label>New</Label></h5>
    <p>Label <Label>New</Label></p>
  </div>
);
const labelVariationInstance = (
  <div>
    <Label bsStyle="default">Default</Label>&nbsp;
    <Label bsStyle="primary">Primary</Label>&nbsp;
    <Label bsStyle="success">Success</Label>&nbsp;
    <Label bsStyle="info">Info</Label>&nbsp;
    <Label bsStyle="warning">Warning</Label>&nbsp;
    <Label bsStyle="danger">Danger</Label>
  </div>
);

const badgeInstance = (
  <p>Badges <Badge>42</Badge></p>
);

const alertInstance = (
  <Alert bsStyle="warning">
    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
  </Alert>
);


const progressInstance1 = (
  <ProgressBar now={60} />
);
const now = 60;

const progressInstance2 = (
  <ProgressBar now={now} label={`${now}%`} />
);
const progressInstance3 = (
  <ProgressBar now={now} label={`${now}%`} srOnly />
);
const progressInstance4 = (
  <div>
    <ProgressBar bsStyle="success" now={40} />
    <ProgressBar bsStyle="info" now={20} />
    <ProgressBar bsStyle="warning" now={60} />
    <ProgressBar bsStyle="danger" now={80} />
  </div>
);

const progressInstance5 = (
  <div>
    <ProgressBar striped bsStyle="success" now={40} />
    <ProgressBar striped bsStyle="info" now={20} />
    <ProgressBar striped bsStyle="warning" now={60} />
    <ProgressBar striped bsStyle="danger" now={80} />
  </div>
);
const progressInstance6 = (
  <ProgressBar active now={45} />
);
const progressInstance7 = (
  <ProgressBar>
    <ProgressBar striped bsStyle="success" now={35} key={1} />
    <ProgressBar bsStyle="warning" now={20} key={2} />
    <ProgressBar active bsStyle="danger" now={10} key={3} />
  </ProgressBar>
);


const customButtonStyle = (
  <div>
    <style type="text/css">{`
    .btn-custom {
        background-color: purple;
        color: white;
    }
    `}</style>
    <Button bsStyle="custom">Custom</Button>
  </div>
);


export default Practice6
//render(<Practice6/>, document.getElementById('practice1'))


