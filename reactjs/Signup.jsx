import React from "react"
import { render } from "react-dom"

import SignupContainer from "./containers/SignupContainer"

export default class Signup extends React.Component {
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

    var divStyle = {
      backgroundColor: 'white',
      width: 400
    }
    
    return (
		<div>
    <br></br>
    <form method="get" action="/home">
    < button type="submit">HOME</button>
    </form>
  
    <h1>Signup</h1>
			<h3>Registration Type :</h3>
			<button onClick={this.donor.bind(this)}>Donor</button>
			<button onClick={this.hospital.bind(this)}>Hospital</button>
			<SignupContainer type={this.state.type}/>  
    		
    	</div>
    );
  }
}
