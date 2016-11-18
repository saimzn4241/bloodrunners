import React from "react"
import Login from "../Login"
import { render } from "react-dom"
import axios from 'axios';
import firebase from 'firebase';

//import { Button } from 'react-bootstrap';
//import StyleSheet from 'react-style';
            
var Headline = React.createClass ({

    

        
    getInitialState: function() {
      return {
      session: '',
      type: 'initial',
      user:'',
      value: 'notloggedin',
      password: '',
      email: '',
      notif:'',
      };
    },

    componentWillMount:function(){
      var _this=this;
      var type;
      var session;
      axios.get('/checkSession/').then(function(result) {    
              // console.log(result)
              // console.log(result.data.type)
              // console.log(result.data.username)
              type=result.data.type
              session=result.data.username
              console.log(type)
              console.log(session)
              _this.setState({session: session, type:type})
             } );
    },

    componentDidMount:function(){
      this.stateChange();
    },

      getUrl:function(){
        //var url=("/profile/").concat(this.state.session);
        //console.log(url);
        var url=("/profile/")
        document.getElementById('urlForm').setAttribute('action', url);
      },

       updateState:function(arg) {
        var _this = this;
        _this.setState({session: arg})
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
            axios.post('/logout/' ,qs.stringify({username: this.state.session})).then(function(result) {    
              console.log(result)
              _this.logOUT();
              
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

        signIN:function(a_email,a_password) {
          this.setState({
            email: a_email,
            password: a_password
          },function changeNewEmail(){
              const auth=firebase.auth();
              const promise = auth.signInWithEmailAndPassword(a_email, a_password);
              promise.catch(e => console.log(e.message)); 
              this.stateChange();
            });
          

        },

        notif_check:function(){
          var that=this;
          const rootRef= firebase.database().ref().child('notification/notif');
          console.log("==========28==========");
          console.log(this.state.value);
          console.log("==========30==========");
          rootRef.on('value', function(snapshot){
              console.log(snapshot.val());

                that.setState({
                 notif: snapshot.val()
               });     
          });
        },

        logOUT:function() {
        const auth=firebase.auth().signOut();
        this.stateChange();
        },

        stateChange:function(){
        firebase.auth().onAuthStateChanged(firebaseUser=>{
          if(firebaseUser){
            console.log(firebaseUser);
            this.setState({
              user:firebaseUser.email,
              value:"loggedin"
            }, function afterStateChange (){
              this.notif_check();
            });
          }
          else{
           console.log("not logged in stateChange");
           console.log(this.state.value); 
           this.setState({
              value:"notloggedin",
              user:"",
              notif:""
            }); 
          }
        });

      },


      render:function() {

        //var divStyle = {color: 'black' };
          
          if(this.state.session!=''){
            //console.log("return statement");

            console.log(this.state.session);

            return (
              <div /*style={divStyle}*/ >
                <h1>User logged in= {this.state.session}</h1>

                {/*<button onClick={this.homefun}>Home</button>*/}
                <form method="get" action="/home">
                < button type="submit">HOME</button>
                </form>
                
                <form id="urlForm" method="POST" action="#" onSubmit={this.getUrl}>
                < button type="submit">Profile</button>
                </form>

                <form method="get" action="/maps">
                < button type="submit">MAPS</button>
                </form>

                
                <form id="logout1" method="get" action="/home" onSubmit={this.logoutfun}>
                < button type="submit">Log-Out</button>
                </form>

              
              </div>
            );

          }
            else{

            return (
          	<div>
              <button  onClick={this.homefun1}>Home</button>
              <form method="get" action="/maps">
              < button type="submit">MAPS</button>
              </form>
              <form method="get" action="/signup">
              <button type="submit">Sign-Up</button>
              </form>
              <button  onClick={this.loginfun} >Login</button>
              <Login type={this.state.type} updateStateProp = {this.updateState} signIN={this.signIN} /> 
            	

          	</div>
            );
          }
      }
});


// const styles = StyleSheet.create({
//     button: {
//         padding: 10,
//         borderColor: 'blue',
//         borderWidth: 1,
//         borderRadius: 5,
//         borderColor: '#000066',
//         backgroundColor: '#000066',
//         borderWidth: 1,
//         },
// });


export default Headline;
