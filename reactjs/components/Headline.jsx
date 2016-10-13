import React from "react"
import Login from "../Login"
import { render } from "react-dom"
import axios from 'axios';

            
var Headline = React.createClass ({
    
    getInitialState: function() {
      

      return {
      session: '',
      type: 'initial'
      };

            
    
    },
    componentWillMount:function(){

      var _this=this;
      var type;
      var session;
      axios.get('/chechSession/').then(function(result) {    
              console.log(result)
              console.log(result.data.type)
              console.log(result.data.username)
              type=result.data.type
              session=result.data.username
              console.log(type)
              console.log(session)
              _this.setState({session: session, type:type})
             } );
      

    },

      // constructor(props) {
      //     super(props);
          

      //     //var _this = this;
      //       // this.state = {
      //       //  session: session,
      //       //  type: type
      //       // }

      //       var type;
      //       var session;

      //       axios.get('/extra1/').then(function(result) {    
      //         console.log(result)
      //         console.log(result.data.type)
      //         console.log(result.data.username)
      //         type=result.data.type
      //         session=result.data.username
      //         console.log(type)
      //         console.log(session)
      //         this.state = {
      //        session: session,
      //        type: type
      //       }    
              
      //       });
      //       console.log(type)
      //       console.log(session)

            

      //  }

       updateState:function(arg) {
        var _this = this;
        this.setState({session: arg})
        },
       
       loginfun:function() {
         var _this = this;
        
            _this.setState({
              type: 'login'
            })
        },
        signupfun:function() {
         var _this = this;
        
            _this.setState({
              type: 'signup'
            })
        },
        logoutfun:function() {
         var _this = this;
         var qs = require('qs');
        
            

            _this.setState({
              type: 'initial',
              session: ''
            });
            axios.  post('/logout/' ,qs.stringify({username: this.state.session})).then(function(result) {    
              console.log(result)
            });
            
            
        },
        homefun:function() {
         var _this = this;
         var qs = require('qs');
         var ses=_this.state.session;
         var typ=_this.state.type;
          if(_this.state.type=='login'){
            _this.setState({
              type: 'login',
              session: ses
            }); 
          }
            
        },
    
        homefun1:function() {
         var _this = this;
        
            _this.setState({
              type: 'initial'
            })
        },
      


      render:function() {
        
          if(this.state.session!=''){
            //console.log("return statement");

            console.log(this.state.session);

            return (
              <div>
                <h1>User logged in= {this.state.session}</h1>

                <button onClick={this.homefun.bind(this)}>Home</button>

                
                <button onClick={this.logoutfun.bind(this)}>Log-Out</button>
              </div>
            );

          }
            else{

            return (
          	<div>
              <button onClick={this.homefun1.bind(this)}>Home</button>

              <form method="get" action="/signup">
              < button type="submit">Sign-Up</button>
              </form>
              <button  onClick={this.loginfun.bind(this)} >Login</button>
              <Login type={this.state.type} updateStateProp = {this.updateState.bind(this)}/> 
            	<h1>session in headline={this.state.session}</h1>

          	</div>
            );
          }
      }
});
export default Headline;
