import React from "react"
import { render } from "react-dom"

import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"
import {Media, Carousel, ResponsiveEmbed, Thumbnail,  Image} from "react-bootstrap"

var Practice5= React.createClass({
  
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {
    alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },


  render: function() {
    

    return(
      <div>
      <br/>
      {imageShapeInstance}
      <br/>
      {responsiveEmbedInstance}
      <br/>
      {carouselInstance}
      <br/>
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('./thumbnail.jpg')}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('./thumbnail.jpg')}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('./thumbnail.jpg')}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br/>
      <br/>
      <br/>
      <br/>
      
      {mediaInstance1}
      <br/>
      <br/>
      <br/>
      
      {mediaListInstance1}
      <br/>
      <br/>
      <br/>
      
      {mediaAlignmentInstance1}
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


const imageShapeInstance = (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Image src={require('./thumbnail.png')} rounded />
      </Col>

      <Col xs={6} md={4}>
        <Image src={require('./thumbnail.png')} circle />
      </Col>
      <Col xs={6} md={4}>
        <Image src={require('./thumbnail.png')} thumbnail />
      </Col>
    </Row>
    <Row>
      <Col>
       <Image src={require('./thumbnail.png')} responsive />
      </Col>
    </Row>
    <Row>
      <Col xs={6} md={3}>
        <Thumbnail href="#" alt="171x180" src={require('./thumbnail.png')} />
      </Col>
      <Col xs={6} md={3}>
        <Thumbnail href="#" alt="171x180" src={require('./thumbnail.png')} />
      </Col>
      <Col xs={6} md={3}>
        <Thumbnail href="#" alt="171x180" src={require('./thumbnail.png')} />
      </Col>
    </Row>

    <Row>
      <Col xs={6} md={4}>
        <Thumbnail src={require('./thumbnail.png')} alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src={require('./thumbnail.png')} alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src={require('./thumbnail.png')} alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
    </Row>
  


  </Grid>
);
const responsiveEmbedInstance = (
  <div style={{width: 660, height: 'auto'}}>
    <ResponsiveEmbed a16by9>
      <embed type="image/svg+xml" src={require('./thumbnail.png')} />
    </ResponsiveEmbed>
  </div>
);
const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={require('./thumbnail.png')}/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={require('./thumbnail.png')}/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={require('./thumbnail.png')}/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);


const mediaInstance1 = (
  <div>
    <Media>
     <Media.Left>
        <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </Media.Body>
    </Media>
    <Media>
      <Media.Left>
        <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <Media>
          <Media.Left>
            <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Nested Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
        </Media>
      </Media.Body>
    </Media>
    <Media>
      <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </Media.Body>
      <Media.Right>
        <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
      </Media.Right>
    </Media>
    <Media>
      <Media.Left>
        <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </Media.Body>
       <Media.Right>
        <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
      </Media.Right>
    </Media>
  </div>
);
const mediaAlignmentInstance1 = (
  <div>
    <Media>
      <Media.Left align="top">
        <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Top aligned media</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </Media.Body>
    </Media>
    <Media>
      <Media.Left align="middle">
        <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Middle aligned media</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </Media.Body>
    </Media>
    <Media>
      <Media.Left align="bottom">
        <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Bottom aligned media</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </Media.Body>
    </Media>
  </div>
);

const mediaListInstance1 = (
  <div>
    <Media.List>
      <Media.ListItem>
        <Media.Left>
          <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Media heading</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

            <Media>
              <Media.Left>
                <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Nested media heading</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

                <Media>
                  <Media.Left>
                    <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Nested media heading</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                  </Media.Body>
                </Media>
              </Media.Body>
            </Media>

            <Media>
              <Media.Left>
                <img width={64} height={64} src={require('./thumbnail.png')} alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Nested media heading</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
              </Media.Body>
            </Media>
        </Media.Body>
      </Media.ListItem>
    </Media.List>
  </div>
);

export default Practice5
//render(<Practice5/>, document.getElementById('practice1'))
