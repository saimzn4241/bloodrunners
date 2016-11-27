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
      userType:''
      };
    },

    componentWillMount:function(){
      var _this=this;
      var type;
      var session;
      var userType;
      axios.get('/checkSession/').then(function(result) {    
              // console.log(result)
              // console.log(result.data.type)
              // console.log(result.data.username)
              type=result.data.type;
              session=result.data.username;
              userType=result.data.userType;
              console.log(type);
              console.log(session);
              console.log(userType);
              _this.setState({session: session, type:type , userType:userType})
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

       updateState:function(arg,loginEmail,loginPassword,userType1) {
        // var _this = this;
        this.setState({
          session: arg,
          email: loginEmail,
          password: loginPassword,
          userType:userType1
          },function firebaseSignIn(){
                // console.log("headline.jsx",loginEmail,loginPassword);
              this.signIN(loginEmail,loginPassword);
              this.updateUserType();
          });
        },

        updateUserType:function(){
          console.log(("72").concat(this.state.type));
          var url=("/getUserType/?type=").concat(this.state.type);
          url=(url).concat("&username=");
          url=(url).concat(this.state.session);
          console.log(url);
          axios.get(url).then(function(result){
            console.log(result.data.userType);
            this.setState({userType:result.data.userType})
          }.bind(this));
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
         _this.logOUT();
         var qs = require('qs');
        
            

            _this.setState({
              type: 'initial',
              session: ''
            });
            axios.post('/logout/' ,qs.stringify({username: this.state.session})).then(function(result) {    
              console.log(result);
              _this.logOUT();
              console.log("logout fire done");
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

        signIN:function(loginEmail,loginPassword) {
          this.setState({
            email: loginEmail,
            password: loginPassword
          },function changeNewEmail(){
              // console.log("headline.jsx 2 ",loginEmail,loginPassword);
              const auth=firebase.auth();
              const promise = auth.signInWithEmailAndPassword(loginEmail, loginPassword);
              promise.catch(e => console.log(e.message)); 
              this.stateChange();
            });
          

        },

        notif_check:function(){
          console.log("====Dekhle bc====");
          console.log(this.state.userType);
          if(this.state.userType=='hospital')
          {
            const rootRef= firebase.database().ref().child('notification/notif');
            console.log("==========28==========");
            console.log(this.state.value);
            console.log("==========30==========");
            rootRef.on('value', function(snapshot){
                console.log(snapshot.val());

                  this.setState({
                   notif: snapshot.val()
                 });     
            }.bind(this));
          }
          else if(this.state.userType=='donor')
          {
            var url=('userHospNotif/').concat(this.state.session);
            const rootRef= firebase.database().ref().child(url);
            rootRef.on('value', function(snapshot){
                console.log("=======got the donor notification========");
                console.log(snapshot.val());
                var objectReturned=snapshot.val();
                // var notifications = objectReturned.map(function(obj){
                //   console.log("===== "+obj[hospUsername]+" =====");
                // });
                var notifications = [];
                for(var key in objectReturned){
                  console.log("===== "+objectReturned[key].hospUsername+" =====");
                  notifications.push(<li>Request From :  {objectReturned[key].hospUsername}</li>);
                }
                this.setState({
                  notif: notifications
                });
            }.bind(this));
          }
        },

        logOUT:function() {
        const auth=firebase.auth().signOut();
        this.stateChange();
        },

        PING:function(userRecieve){
          var url = ('userHospNotif/').concat(userRecieve);
          const rootRef= firebase.database().ref().child(url);
          
          rootRef.push({
          hospUsername: this.state.user,
          read: 'False'
          });
        },

        MainPing:function(){
          var qs = require('qs');
          axios.post('/getNearUsers/',qs.stringify({hospital: this.state.session})).then(function(result){
            console.log(result);
            var numberOfRecievers = result.data.count;
            // console.log(numberOfRecievers);
            // console.log(result.data.users[0]);
            for (var i = 0; i < numberOfRecievers; i++) {
              console.log(result.data.users[i]);
              this.PING(result.data.users[i]);
            }
          }.bind(this));
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

            if(this.state.userType=='donor')
            {
              return (
                <div /*style={divStyle}*/ >
                  <h1>User logged in= {this.state.session}</h1>

                  {/*<button onClick={this.homefun}>Home</button>*/}
                  <form method="get" action="/home">
                  <button type="submit">HOME</button>
                  </form>
                  
                  <form id="urlForm" method="POST" action="#" onSubmit={this.getUrl}>
                  <button type="submit">Profile</button>
                  </form>

                  <form method="get" action="/maps">
                  <button type="submit">MAPS</button>
                  </form>

                  
                  <form id="logout1" method="get" action="/home" onSubmit={this.logoutfun}>
                  <button type="submit">Log-Out</button>
                  </form>

                  {/*<h1>notification={this.state.notif}</h1>*/}
                  <h1>Notifications List : </h1>
                  <div>
                    {this.state.notif}
                  </div>

                
                </div>
              );
            }

            else
            {
              return (
                <div /*style={divStyle}*/ >
                  <h1>User logged in= {this.state.session}</h1>

                  {/*<button onClick={this.homefun}>Home</button>*/}
                  <form method="get" action="/home">
                  <button type="submit">HOME</button>
                  </form>
                  
                  <form id="urlForm" method="POST" action="#" onSubmit={this.getUrl}>
                  <button type="submit">Profile</button>
                  </form>

                  <form method="get" action="/maps">
                  <button type="submit">MAPS</button>
                  </form>

                  
                  <form id="logout1" method="get" action="/home" onSubmit={this.logoutfun}>
                  <button type="submit">Log-Out</button>
                  </form>

                  <input type="button" value="PING" onClick={this.MainPing}/>

                  <h1>notification={this.state.notif}</h1>

                
                </div>
              );
            }

          }
          else{

            return (
          	<div>
              <form method="get" action="/home">
                <button type="submit">HOME</button>
              </form>
              
              <form method="get" action="/maps">
              <button type="submit">MAPS</button>
              </form>
              
              <form method="get" action="/signup">
              <button type="submit">Sign-Up</button>
              </form>
              
              <button  onClick={this.loginfun} >Login</button>
              <Login type={this.state.type} updateStateProp = {this.updateState} /> 
            	
              <h1>notification={this.state.notif}</h1>
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
