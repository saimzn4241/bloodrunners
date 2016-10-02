import React from "react"
import Login from "../Login"
import { render } from "react-dom"
import axios from 'axios';

            
export default class Headline extends React.Component {
      
      
      constructor(props) {
          super(props);
        
          this.state = {
             session: '',
             type: 'initial'
          }

       }

       updateState(arg) {
        var _this = this;
        this.setState({session: arg})
        }
       
       loginfun() {
         var _this = this;
        
            _this.setState({
              type: 'login'
            })
        }
        signupfun() {
         var _this = this;
        
            _this.setState({
              type: 'signup'
            })
        }
        logoutfun() {
         var _this = this;
         var qs = require('qs');
        
            

            _this.setState({
              type: 'initial',
              session: ''
            });
            axios.post('/logout/' ,qs.stringify({username: this.state.session})).then(function(result) {    
              console.log(result)
            });
            
            
        }
    
        
      


      render() {
        
          if(this.state.session!=''){

            return (
              <div>
                <h1>User logged in= {this.state.session}</h1>

                <form method="get" action="/home">
                < button type="submit">Home</button>
                </form>
                
                <button onClick={this.logoutfun.bind(this)}>Log-Out</button>
                
                
                
                <h1>{ this.props.children }</h1>
              </div>
            );

          }

          else{
            return (
          	<div>
              <form method="get" action="/home">
              < button type="submit">Home</button>
              </form>
              
              <form method="get" action="/signup">
              < button type="submit">Sign-Up</button>
              </form>
            
              <button  onClick={this.loginfun.bind(this)} >Login</button>
              <Login type={this.state.type} updateStateProp = {this.updateState.bind(this)}/> 
            	<h1>session in headline={this.state.session}</h1>

            	<h1>{ this.props.children }</h1>
          	</div>
            );
          }
      }
}