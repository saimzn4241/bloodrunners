import React from "react"
import { render } from "react-dom"

import SignupContainer from "./containers/SignupContainer"

class Signup extends React.Component {
  constructor(props) {
        super(props);
        this.state = { // this is your default state
          type: 'initial'
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
			<h1>Registration Type :</h1>
			<br></br>
			<button onClick={this.donor.bind(this)}>Donor</button>
			<button onClick={this.hospital.bind(this)}>Hospital</button>
			<SignupContainer type={this.state.type}/>  
    		<h1>Signup</h1>
    	</div>
    );
  }
}

render(<Signup />, document.getElementById('Signup'))