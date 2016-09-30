import React from "react"
import { render } from "react-dom"

import SignupContainer from "./containers/SignupContainer"

class Signup extends React.Component {
  constructor(props) {
        super(props);
        this.state = { // this is your default state
          type: 'donor'
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
  render() {

    return (
		<div>
			Registration Type :
			<br></br>
			<button onClick={this.donor.bind(this)}>Donor</button>
			<button onClick={this.hospital.bind(this)}>Hospital</button>
		<SignupContainer type={this.state.type}/>  
    	<h1>Signup</h1>
    	</div>
    );
  }
}

render(<Signup type='donor'/>, document.getElementById('Signup'))