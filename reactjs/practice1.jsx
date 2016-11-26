import React from "react"
import { render } from "react-dom"

import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import './practice1.css'

var Practice1= React.createClass({
  getInitialState: function() {
    return {
      text: "",
      
      isLoading: false,
      
      showModal: false ,
      
      show: false,

      smShow: false, lgShow: false, 
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
  },
  handleClick() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  },
   
  //modal start
  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  //modal end
  render: function() {
     let isLoading = this.state.isLoading;
     let close = () => this.setState({ show: false});
  //modal start


   let smClose = () => this.setState({ smShow: false });
    let lgClose = () => this.setState({ lgShow: false });
    
    const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
    const tooltip = (
          <Tooltip id="modal-tooltip">
            wow.
          </Tooltip>
        );

  //modal end
    


    return (
    <div >

            {buttonsInstance}
            <br/>
            
            {buttonsInstance2}
            <br/>
            {buttonsInstance3}
            <br/>
            {buttonsInstance4}
            <br/>
            {buttonsInstance5}
            <br/>
            {buttonsInstance6}
                        
            <Button
              bsStyle="primary"
              disabled={isLoading}
              onClick={!isLoading ? this.handleClick : null}>
              {isLoading ? 'Loading...' : 'Loading state'}
            </Button>
            <br/>
            <br/>
            {buttonGroupInstance}
            <br/>
            <br/>
            {buttonGroupInstance1}
            <br/>
            <br/>
            {buttonGroupInstance2}
            <br/>
            <br/>
            {buttonGroupInstance3}
            <br/>
            <br/>
            {buttonGroupInstance4}
            <br/>
            <br/>
            {buttonGroupInstance5}
            <br/>
            <br/>
            {buttonGroupInstance6}
            <br/>
            <br/>

          <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>

            <br/>
            <br/>
          <ButtonToolbar>{BUTTONS.map(renderDropdownButton1)}</ButtonToolbar>


            <br/>
            <br/>
        {buttonInstance7}
            

            <br/>
            <br/>
        {buttonsInstance8}
            

            <br/>
            {MenuItems1}
            <br/>
            <br/>
           {/*{modalInstance}*/} 
             

            <br/>
          {/*modal........................*/}
            
            <div>
              <p>Click to get the full Modal experience!</p>

              <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.open}
              >
                Launch demo modal
              </Button>

              <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Text in a modal</h4>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                  <h4>Popover in a modal</h4>
                  <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

                  <h4>Tooltips in a modal</h4>
                  <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

                  <hr />

                  <h4>Overflowing text to show scroll behavior</h4>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>


          {/*modal........................*/}
            <br/>
            <br/>

             <div className="modal-container" style={{height: 200}}>
                <Button
                  bsStyle="primary"
                  bsSize="large"
                  onClick={() => this.setState({ show: true})}
                >
                  Launch contained modal
                </Button>

                <Modal
                  show={this.state.show}
                  onHide={close}
                  container={this}
                  aria-labelledby="contained-modal-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={close}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            <br/>

           <ButtonToolbar>
            <Button bsStyle="primary" onClick={()=>this.setState({ smShow: true })}>
              Launch small demo modal
            </Button>
            <Button bsStyle="primary" onClick={()=>this.setState({ lgShow: true })}>
              Launch large demo modal
            </Button>

            <MySmallModal show={this.state.smShow} onHide={smClose} />
            <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
          </ButtonToolbar>
          <br/>
            {tooltipInstance}
            <br/>
        {positionerInstance}
            <br/>
            {copyInstance}
            <br/>
            <div>
            <Popover
              id="popover-basic"
              placement="right"
              positionLeft={200}
              positionTop={50}
              title="Popover right"
            >
              And here's some <strong>amazing</strong> content. It's very engaging. right?
            </Popover>
            </div>
            <br/>
            
            <br/>
            <ButtonToolbar>
              <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button>Holy guacamole!</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                <Button>Holy guacamole!</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                <Button>Holy guacamole!</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                <Button>Holy guacamole!</Button>
              </OverlayTrigger>
            </ButtonToolbar>
            <br/>
            <br/>
            <ButtonToolbar>
              <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
                <Button>Click</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
                <Button>Hover + Focus</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
                <Button>Focus</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
                <Button>Click w/rootClose</Button>
              </OverlayTrigger>
            </ButtonToolbar>
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

const buttonsInstance = (
  <ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);
const buttonsInstance2 = (
  <div>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="large">Large button</Button>
      <Button bsSize="large">Large button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary">Default button</Button>
      <Button>Default button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="small">Small button</Button>
      <Button bsSize="small">Small button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
      <Button bsSize="xsmall">Extra small button</Button>
    </ButtonToolbar>
  </div>
);

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const buttonsInstance3 = (
  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
    <Button bsSize="large" block>Block level button</Button>
  </div>
);

const buttonsInstance4 = (
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    <Button bsSize="large" active>Button</Button>
  </ButtonToolbar>
);

const buttonsInstance5 = (
    <ButtonToolbar>
      <Button href="#">Link</Button>
      <Button>Button</Button>
    </ButtonToolbar>
  );
const buttonsInstance6 = (
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" disabled>disabled button</Button>
    <Button bsSize="large" disabled>Button</Button>
  </ButtonToolbar>
);


const buttonGroupInstance = (
  <ButtonGroup>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
);
const buttonGroupInstance1 = (
  <ButtonToolbar>
    <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button>8</Button>
    </ButtonGroup>
  </ButtonToolbar>
);

const buttonGroupInstance2 = (
  <div>
    <ButtonToolbar>
      <ButtonGroup bsSize="large">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>
​
    <ButtonToolbar>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>
​
    <ButtonToolbar>
      <ButtonGroup bsSize="small">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>
​
    <ButtonToolbar>
      <ButtonGroup bsSize="xsmall">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>
</div>
);

const buttonGroupInstance3 = (
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <DropdownButton title="Dropdown" id="bg-nested-dropdown">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);
const buttonGroupInstance4 = (
  <ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <Button>Button</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);

const buttonGroupInstance5 = (
  <ButtonGroup vertical block>
    <Button>Full width button</Button>
    <Button>Full width button</Button>
  </ButtonGroup>
);

const buttonGroupInstance6 = (
  <ButtonGroup justified>
    <Button href="#">Left</Button>
    <Button href="#">Middle</Button>
    <DropdownButton title="Dropdown" id="bg-justified-dropdown">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

function renderDropdownButton(title, i) {
  return (
    <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>Active Item</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  );
}
function renderDropdownButton1(title, i) {
  return (
    <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </SplitButton>
  );
}

const buttonInstance7 = (
  <ButtonToolbar>
    <DropdownButton bsStyle="default" title="No caret" noCaret id="dropdown-no-caret">
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  </ButtonToolbar>
);

const buttonsInstance8 = (
  <div>
    <ButtonToolbar>
      <SplitButton title="Dropup" dropup id="split-button-dropup">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </SplitButton>
    </ButtonToolbar>

    <ButtonToolbar>
      <SplitButton bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </SplitButton>
    </ButtonToolbar>
  </div>
);

function onSelectAlert(eventKey) {
  alert(`Alert from menu item.\neventKey: ${eventKey}`);
}


const MenuItems1 = (
  <Clearfix>
    <ul className="dropdown-menu open">
      <MenuItem header>Header</MenuItem>
      <MenuItem>link</MenuItem>
      <MenuItem divider/>
      <MenuItem header>Header</MenuItem>
      <MenuItem>link</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem title="See? I have a title.">
        link with title
      </MenuItem>
      <MenuItem eventKey={1} href="#someHref" onSelect={onSelectAlert}>
        link that alerts
      </MenuItem>
    </ul>
  </Clearfix>
);



const modalInstance = (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);



const MySmallModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const MyLargeModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});
const tooltipInstance = (
  <div>
    <Tooltip placement="right" className="in" id="tooltip-right">
      Tooltip right
    </Tooltip>
    <br/>
    <br/>
    
    <Tooltip placement="top" className="in" id="tooltip-top">
      Tooltip top
    </Tooltip>
    <br/>
    <br/>
    
    <Tooltip placement="left" className="in" id="tooltip-left">
      Tooltip left
    </Tooltip>
    <br/>
    <br/>
    
    <Tooltip placement="bottom" className="in" id="tooltip-bottom">
      Tooltip bottom
    </Tooltip>
    <br/>
    <br/>
    
  </div>
);

const tooltip = (
  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);

const positionerInstance = (
  <ButtonToolbar>
    <OverlayTrigger placement="left" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="top" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="right" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>
  </ButtonToolbar>
);

const LinkWithTooltip = React.createClass({
  render() {
    let tooltip = <Tooltip id={this.props.id}>{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip} placement="top"
        delayShow={300} delayHide={150}
      >
        <a href={this.props.href}>{this.props.children}</a>
      </OverlayTrigger>
    );
  }
});
const copyInstance = (
  <p className="muted" style={{ marginBottom: 0 }}>
    Tight pants next level keffiyeh <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">you probably</LinkWithTooltip> haven't
    heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's
    fixie sustainable quinoa 8-bit american apparel <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#" id="tooltip-2">have a</LinkWithTooltip>
    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four
    loko mcsweeney's cleanse vegan chambray. A really ironic artisan <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">whatever keytar</LinkWithTooltip>,
    scenester farm-to-table banksy Austin <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">twitter handle</LinkWithTooltip> freegan
    cred raw denim single-origin coffee viral.
  </p>
);



const popoverLeft = (
  <Popover id="popover-positioned-left" title="Popover left">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverTop = (
  <Popover id="popover-positioned-top" title="Popover top">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverBottom = (
  <Popover id="popover-positioned-bottom" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);



const popoverClick = (
  <Popover id="popover-trigger-click" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverFocus = (
  <Popover id="popover-trigger-focus" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverClickRootClose = (
  <Popover id="popover-trigger-click-root-close" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);







render(<Practice1/>, document.getElementById('practice1'))


