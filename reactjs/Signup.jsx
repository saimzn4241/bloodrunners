import React from "react"
import { render } from "react-dom"

import SignupContainer from "./containers/SignupContainer"

class Signup extends React.Component {
  donor(){
  	this.props.type='donor';
  }
  hospital(){
  	this.props.type='hospital';
  }
  render() {

    return (
		<div>
			Registration Type :
			<br></br>
			<button class="btn btn-block btn-primary" onClick={this.donor}>Donor</button>
			<button class="btn btn-block btn-primary" onClick={this.hospital}>Hospital</button>
		<SignupContainer type={this.props.type}/>  
    	<h1>Signup</h1>
    	</div>
    );
  }
}

render(<Signup type='donor'/>, document.getElementById('Signup'))