import React from "react"
import axios from 'axios'
import Headline from "../components/Headline"


var ProfileContainer = React.createClass ({
        
    getInitialState: function() {
      

      return {
      session: '',
      type: '',
      userType : '',
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      country: '',
      bg: '',
      badges: '',
      dob: '',
      contact: '',
      age: '',
      status: '',
      hospitals: '',
      name: '',
      cp1First_name: '',
      cp2First_name: '',
      cp3First_name  : '',
      cp1Last_name: '',
      cp2Last_name: '',
      cp3Last_name: '',
      cp1Contact: '',
      cp2Contact: '',
      cp3Contact: '',
      street: '',
      verified: '',
      users: '',
      userViewingOwnProfile : ''

      };

            
    
    },
    componentWillMount:function(){

      var _this=this;
      var session; 
      var url;

      axios.get('/checkSession/').then(function(result) {    
          console.log(result.data.username)
          session=result.data.username
          _this.setState({session: result.data.username, userType : result.data.userType})
          var viewUser = window.location.pathname;
          var userViewed="";
          for(var i=9;i<viewUser.length-1;i++)
          {
            userViewed = userViewed+ viewUser[i];
          }
          var sameUser = 'false';
          if(userViewed==session)
          {
            sameUser = 'true'; 
          }
          url=("/profileFetch/").concat(userViewed);
          console.log(url);
          
          axios.get(url).then(function(result) {    
                console.log(result)
                //var this1=_this;
                _this.setState({
                  type: result.data.type,
                  userViewingOwnProfile: sameUser
                });
                console.log(_this.state.type)
                
                if(_this.state.type=="donor"){
                  
                  _this.setState({
                    username: result.data.username,
                    first_name: result.data.first_name,
                    last_name: result.data.last_name,
                    email: result.data.email,
                    address: result.data.address,
                    city: result.data.city,
                    state: result.data.state,
                    country: result.data.country,
                    bg: result.data.bg,
                    badges: result.data.badges,
                    dob: result.data.dob,
                    contact: result.data.contact,
                    age: result.data.age,
                    status: result.data.status,
                    hospitals: result.data.hospitals
                  });

                }
                else if(_this.state.type=="hospital"){
                  
                  _this.setState({
                    name: result.data.name,
                    username: result.data.username,
                    city: result.data.city,
                    state: result.data.state,
                    country: result.data.country,
                    cp1First_name: result.data.cp1First_name,
                    cp2First_name: result.data.cp2First_name,
                    cp3First_name  : result.data.cp3First_name,
                    cp1Last_name: result.data.cp1Last_name,
                    cp2Last_name: result.data.cp2Last_name,
                    cp3Last_name: result.data.cp3Last_name,
                    cp1Contact: result.data.cp1Contact,
                    cp2Contact: result.data.cp2Contact,
                    cp3Contact: result.data.cp3Contact,
                    street: result.data.street,
                    verified: result.data.verified,
                    users: result.data.users

                  });
                }
          });  
      });

    },

    render:function() {
          
            if(this.state.type=="donor"){
            return (

              <div className="container">
              <div className="row">
                <div className="col-sm-12">

                    <div>
                  {/*<form method="get" action="/home">
                  < button type="submit">HOME</button>
                  </form>
                  */}
                  <h1><u>donor</u></h1>
                  <h4>name : {this.state.first_name}</h4>  
                  <h4>username : {this.state.username}</h4> 
                  <h4>first name : {this.state.first_name}</h4> 
                  <h4>last name : {this.state.last_name}</h4> 
                  <h4>email : {this.state.email}</h4> 
                  <h4>address : {this.state.address}</h4> 
                  <h4>city : {this.state.city}</h4> 
                  <h4>state : {this.state.state}</h4> 
                  <h4>country : {this.state.country}</h4> 
                  <h4>bg : {this.state.bg}</h4> 
                  <h4>badges : {this.state.badges}</h4> 
                  <h4>dob : {this.state.dob}</h4> 
                  <h4>contact : {this.state.contact}</h4> 
                  <h4>age : {this.state.age}</h4> 
                  <h4>status : {this.state.status}</h4> 
                        
                  </div>



                </div>
              </div>
            </div>
                          );

            }

          else if(this.state.type=="hospital"){
            return (
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                             

                    <div>
                      <h1><u>Hospital</u></h1>
                      <h4>HospitalName : {this.state.name}</h4>
                      <h4>username : {this.state.username}</h4>
                      <h4>city : {this.state.city}</h4>
                      <h4>state : {this.state.state}</h4>
                      <h4>country : {this.state.country}</h4>
                      <h4>cp1First_name : {this.state.cp1First_name}</h4>
                      <h4>cp1Last_name : {this.state.cp1Last_name}</h4>
                      
                      <h4>cp2First_name : {this.state.cp2First_name}</h4>
                      <h4>cp2Last_name : {this.state.cp2Last_name}</h4>
                      
                      <h4>cp3First_name   : {this.state.cp3First_name}</h4>
                      <h4>cp3Last_name : {this.state.cp3Last_name}</h4>
                      <h4>cp1Contact : {this.state.cp1Contact}</h4>
                      <h4>cp2Contact : {this.state.cp2Contact}</h4>
                      <h4>cp3Contact : {this.state.cp3Contact}</h4>
                      <h4>street : {this.state.street}</h4>
                      <h4>verified : {this.state.verified}</h4>
                      
                          
                    </div>
                  </div>
                </div>
              </div>


              
            );
          }
          else{
            return (
              <div>
              <p1>null</p1><br></br>
              </div>
            );
          } 
    }



});

export default ProfileContainer;

