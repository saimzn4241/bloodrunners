import React from "react"
import { render } from "react-dom"

import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"

var Practice3= React.createClass({
  
  render: function() {
    

    return(
      <div>
      <br/>
      {gridInstance}
      <br/>
      <br/>
      {gridInstance1}
      <br/>
      {jumbotronInstance}
      <br/>
      {pageHeaderInstance}
      <br/>
      {listgroupInstance}
      <br/>
      {listgroupInstance1}
      <br/>
      {listgroupInstance2}
      
      <br/>
      {listgroupInstance3}
      <br/>
      <br/>
      {listgroupInstance4}
      <br/>
      {tableInstance}
      <br/>
      {tableInstance1}
      <br/>
      {panelsInstance}
      <br/>
      <br/>
      {panelInstance1}
      <br/>
      {accordionInstance}
      <br/>
      {wellInstance}
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


const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
      <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>
      <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
      <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
    </Row>
  </Grid>
);
const gridInstance1 = (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
      <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>
      <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
      <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
      <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
    </Row>
  </Grid>
);
const jumbotronInstance = (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
);
const pageHeaderInstance = (
  <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
);
const listgroupInstance = (
  <ListGroup>
    <ListGroupItem>Item 1</ListGroupItem>
    <ListGroupItem>Item 2</ListGroupItem>
    <ListGroupItem>...</ListGroupItem>
  </ListGroup>
);


function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

const listgroupInstance1 = (
  <ListGroup>
    <ListGroupItem href="#link1">Link 1</ListGroupItem>
    <ListGroupItem href="#link2">Link 2</ListGroupItem>
    <ListGroupItem onClick={alertClicked}>
      Trigger an alert
    </ListGroupItem>
  </ListGroup>
);
const listgroupInstance2 = (
  <ListGroup>
    <ListGroupItem href="#" active>Link 1</ListGroupItem>
    <ListGroupItem href="#">Link 2</ListGroupItem>
    <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
  </ListGroup>
);
const listgroupInstance3 = (
  <ListGroup>
    <ListGroupItem bsStyle="success">Success</ListGroupItem>
    <ListGroupItem bsStyle="info">Info</ListGroupItem>
    <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
    <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
  </ListGroup>
);
const listgroupInstance4 = (
  <ListGroup>
    <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
    <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
    <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
  </ListGroup>
);

const tableInstance = (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
);
const tableInstance1 = (
  <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
);

const title = (
  <h3>Panel title</h3>
);

const panelsInstance = (
  <div>
    <Panel header={title}>
      Panel content
    </Panel>

    <Panel header={title} bsStyle="primary">
      Panel content
    </Panel>

    <Panel header={title} bsStyle="success">
      Panel content
    </Panel>

    <Panel header={title} bsStyle="info">
      Panel content
    </Panel>

    <Panel header={title} bsStyle="warning">
      Panel content
    </Panel>

    <Panel header={title} bsStyle="danger">
      Panel content
    </Panel>
  </div>
);



const panelInstance1 = (
  <Panel collapsible defaultExpanded header="Panel heading">
    Some default panel content here.
    <ListGroup fill>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
      <ListGroupItem>&hellip;</ListGroupItem>
    </ListGroup>
    Some more panel content here.
  </Panel>
);
const accordionInstance = (
  <Accordion>
    <Panel header="Collapsible Group Item #1" eventKey="1">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel header="Collapsible Group Item #2" eventKey="2">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel header="Collapsible Group Item #3" eventKey="3">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
  </Accordion>
);
const wellInstance = (
  <div>
    <Well bsSize="large">Look I'm in a large well!</Well>
    <Well bsSize="small">Look I'm in a small well!</Well>
  </div>
);





export default Practice3
//render(<Practice3/>, document.getElementById('practice1'))
