import React from "react"
import { render } from "react-dom"

import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"


var Practice4= React.createClass({
  
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render: function() {
    

    return(
      <div>
      <br/>
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}>
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>
      <br/>
      {formInstance}
      <br/>
      {formInstance1}
      <br/>
      {formInstance2}
      <br/>
      {formInstance3}
      <br/>
      {formInstance4}
      <br/>
      {formInstance5}
      <br/>
      <br/>
      </div>
    );
  }
  
});


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const formInstance = (
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup
      id="formControlsPassword"
      label="Password"
      type="password"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>

    <FormGroup>
      <Checkbox inline>
        1
      </Checkbox>
      {' '}
      <Checkbox inline>
        2
      </Checkbox>
      {' '}
      <Checkbox inline>
        3
      </Checkbox>
    </FormGroup>
    <FormGroup>
      <Radio inline>
        1
      </Radio>
      {' '}
      <Radio inline>
        2
      </Radio>
      {' '}
      <Radio inline>
        3
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </FormGroup>

    <Button type="submit">
      Submit
    </Button>
  </form>
);
 

const formInstance1 = (
  <Form inline>
    <FormGroup controlId="formInlineName">
      <ControlLabel>Name</ControlLabel>
      {' '}
      <FormControl type="text" placeholder="Jane Doe" />
    </FormGroup>
    {' '}
    <FormGroup controlId="formInlineEmail">
      <ControlLabel>Email</ControlLabel>
      {' '}
      <FormControl type="email" placeholder="jane.doe@example.com" />
    </FormGroup>
    {' '}
    <Button type="submit">
      Send invitation
    </Button>
  </Form>
);

const formInstance2 = (
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
);
const formInstance3 = (
  <form>
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <InputGroup>
        <FormControl type="text" />
        <InputGroup.Addon>.00</InputGroup.Addon>
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>$</InputGroup.Addon>
        <FormControl type="text" />
        <InputGroup.Addon>.00</InputGroup.Addon>
      </InputGroup>
    </FormGroup>

    <FormGroup>
      <InputGroup>
        <FormControl type="text" />
        <InputGroup.Addon>
          <Glyphicon glyph="music" />
        </InputGroup.Addon>
      </InputGroup>
    </FormGroup>

    <FormGroup>
      <InputGroup>
        <InputGroup.Button>
          <Button>Before</Button>
        </InputGroup.Button>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <InputGroup>
        <FormControl type="text" />
        <DropdownButton
          componentClass={InputGroup.Button}
          id="input-dropdown-addon"
          title="Action"
        >
          <MenuItem key="1">Item</MenuItem>
        </DropdownButton>
      </InputGroup>
    </FormGroup>

    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>
          <input type="radio" aria-label="..." />
        </InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>
          <input type="checkbox" aria-label="..." />
        </InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
  </form>
);

const formInstance4 = (
  <form>
    <FormGroup bsSize="large">
      <FormControl type="text" placeholder="Large text" />
    </FormGroup>
    <FormGroup>
      <FormControl type="text" placeholder="Normal text" />
    </FormGroup>
    <FormGroup bsSize="small">
      <FormControl type="text" placeholder="Small text" />
    </FormGroup>
  </form>
);

const formInstance5 = (
  <form>
    <FormGroup controlId="formValidationSuccess1" validationState="success">
      <ControlLabel>Input with success</ControlLabel>
      <FormControl type="text" />
      <HelpBlock>Help text with validation state.</HelpBlock>
    </FormGroup>

    <FormGroup controlId="formValidationWarning1" validationState="warning">
      <ControlLabel>Input with warning</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

    <FormGroup controlId="formValidationError1" validationState="error">
      <ControlLabel>Input with error</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

    <FormGroup controlId="formValidationNull" validationState={null}>
      <ControlLabel>Input with no validation state</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

    <FormGroup controlId="formValidationSuccess2" validationState="success">
      <ControlLabel>Input with success and feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="formValidationWarning2" validationState="warning">
      <ControlLabel>Input with warning and feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="formValidationError2" validationState="error">
      <ControlLabel>Input with error and feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="formValidationSuccess3" validationState="success">
      <ControlLabel>Input with success and custom feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback>
        <Glyphicon glyph="music" />
      </FormControl.Feedback>
    </FormGroup>

    <FormGroup controlId="formValidationWarning3" validationState="warning">
      <ControlLabel>Input group with warning</ControlLabel>
      <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
      <FormControl.Feedback />
    </FormGroup>

    <Form componentClass="fieldset" horizontal>
      <FormGroup controlId="formValidationError3" validationState="error">
        <Col componentClass={ControlLabel} xs={3}>
          Input with error
        </Col>
        <Col xs={9}>
          <FormControl type="text" />
          <FormControl.Feedback />
        </Col>
      </FormGroup>

      <FormGroup controlId="formValidationSuccess4" validationState="success">
        <Col componentClass={ControlLabel} xs={3}>
          Input group with success
        </Col>
        <Col xs={9}>
          <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
            <FormControl type="text" />
          </InputGroup>
          <FormControl.Feedback />
        </Col>
      </FormGroup>
    </Form>

    <Form componentClass="fieldset" inline>
      <FormGroup controlId="formValidationWarning4" validationState="warning">
        <ControlLabel>Input with warning</ControlLabel>
        {' '}
        <FormControl type="text" />
        <FormControl.Feedback />
      </FormGroup>
      {' '}
      <FormGroup controlId="formValidationError4" validationState="error">
        <ControlLabel>Input group with error</ControlLabel>
        {' '}
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl type="text" />
        </InputGroup>
        <FormControl.Feedback />
      </FormGroup>
    </Form>

    <Checkbox validationState="success">
      Checkbox with success
    </Checkbox>
    <Radio validationState="warning">
      Radio with warning
    </Radio>
    <Checkbox validationState="error">
      Checkbox with error
    </Checkbox>

    {/* This requires React 15's <span>-less spaces to be exactly correct. */}
    <FormGroup validationState="success">
      <Checkbox inline>
        Checkbox
      </Checkbox>
      {' '}
      <Checkbox inline>
        with
      </Checkbox>
      {' '}
      <Checkbox inline>
        success
      </Checkbox>
    </FormGroup>
  </form>
);


export default Practice4
//render(<Practice4/>, document.getElementById('practice1'))
