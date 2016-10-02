import React from "react"

import Headline from "../components/Headline"
import axios from 'axios';

export default class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      password: '',
      username: ''
      
    }
  }

  request() {
    var username=this.state.username;
    var password= this.state.password;
    var qs = require('qs');
    var _this = this;
    axios.post('/login_verify/',qs.stringify({password: password , username: username}))
    .then(function (response) {
     
      console.log(response);
      console.log("here");
      
    _this.setState({
          value: response.data.login_value
          });
    })
    .catch(function (error) {
      console.log(error);
    });

  }    


  updateUsername(e) {
      this.setState({username: e.target.value});
   }

   updatePassword(e) {
      this.setState({password: e.target.value});
   }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Login Container</Headline>
            
                Username:
                <input type="text"   name="username" onChange = {this.updateUsername.bind(this)}>
                </input>
                <br></br>

                Password:   
                <input type="password"  name="password" onChange = {this.updatePassword.bind(this)}>
                </input>
                
                
                <br></br>
                
                
                <input type="button" value="Submit" onClick={this.request.bind(this)}/>
                
                <h1>{this.state.value}</h1>
                

          </div>
        </div>
      </div>
    )
  }
}