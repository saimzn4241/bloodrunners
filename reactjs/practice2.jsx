import React from "react"
import { render } from "react-dom"

import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"

var Practice2= React.createClass({
  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  },
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect1(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },

  render: function() {
    
    

    return(
      <div>
        <br/>
        {navInstance}
        <br/>
            <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
            <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
            <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
            <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
            <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        <br/>
        {navInstance1}
        <br/>
        
        <br/>
        {navInstance2}
        
        <br/>
        {navbarInstance1}
      
        <br/>
      {navbarInstance2}
      
        <br/>
      {navbarInstance3}
        <br/>
      {navbarInstance4}
        <br/>
      {breadcrumbInstance}
        <br/>
        <br/>
        {tabsInstance}
        <br/>
        {tabsInstance1}
        
        <br/>
        {tabsInstance2}
        
        <br/>
        {tabsInstance3}
        <br/>
        <div>
          <Pagination
            bsSize="large"
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect1} />
          <br />
  ​
          <Pagination
            bsSize="medium"
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect1} />
          <br />
  ​
          <Pagination
            bsSize="small"
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect1} />
        </div>
        <br/>
        <br/>
            <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={20}
            maxButtons={5}
            activePage={this.state.activePage}
            onSelect={this.handleSelect1} />
        <br/>
        {pagerInstance1}
        <br/>
        {pagerInstance2}
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
        <br/>
        
      </div>  

    );
  }
  
});


function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

const navInstance = (
  <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
  </Nav>
);

const navInstance1 = (
  <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
  </Nav>
);
const navInstance2 = (

<div>

  <div><Nav bsStyle="tabs" justified activeKey={1} onSelect={handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
       </div>
        <br />
       
       <div>
       
        <Nav bsStyle="pills" justified activeKey={1} onSelect={handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
  </Nav>
  </div>
</div>
       
);

const navbarInstance1 = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);
const navbarInstance2 = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
const navbarInstance3 = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
);
const navbarInstance4 = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text>
        Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
      </Navbar.Text>
      <Navbar.Text pullRight>
        Have a great day!
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

const breadcrumbInstance = (
  <Breadcrumb>
    <Breadcrumb.Item href="#">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      Data
    </Breadcrumb.Item>
  </Breadcrumb>
);




const tabsInstance = (
  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
  </Tabs>
);

const tabsInstance1 = (
<Tabs activeKey={1} onSelect={handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
);


const tabsInstance2 = (
  <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
    <Row className="clearfix">
      <Col sm={12}>
        <Nav bsStyle="tabs">
          <NavItem eventKey="first">
            Tab 1
          </NavItem>
          <NavItem eventKey="second">
            Tab 2
          </NavItem>
          <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">
            <MenuItem eventKey="3.1">Action</MenuItem>
            <MenuItem eventKey="3.2">Another action</MenuItem>
            <MenuItem eventKey="3.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="3.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Col>
      <Col sm={12}>
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
            Tab 1 content
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            Tab 2 content
          </Tab.Pane>
          <Tab.Pane eventKey="3.1">
            Tab 3.1 content
          </Tab.Pane>
          <Tab.Pane eventKey="3.2">
            Tab 3.2 content
          </Tab.Pane>
          <Tab.Pane eventKey="3.3">
            Tab 3.3 content
          </Tab.Pane>
          <Tab.Pane eventKey="3.4">
            Tab 3.4 content
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);

const tabsInstance3 = (
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row className="clearfix">
      <Col sm={4}>
        <Nav bsStyle="pills" stacked>
          <NavItem eventKey="first">
            Tab 1
          </NavItem>
          <NavItem eventKey="second">
            Tab 2
          </NavItem>
        </Nav>
      </Col>
      <Col sm={8}>
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
            Tab 1 content
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            Tab 2 content
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);
 
const pagerInstance1 = (
  <Pager>
    <Pager.Item href="#">Previous</Pager.Item>
    {' '}
    <Pager.Item href="#">Next</Pager.Item>
  </Pager>
);


const pagerInstance2 = (
  <Pager>
    <Pager.Item previous href="#">&larr; Previous Page</Pager.Item>
    <Pager.Item next href="#">Next Page &rarr;</Pager.Item>
  </Pager>
);

export default Practice2
//render(<Practice2/>, document.getElementById('practice1'))
