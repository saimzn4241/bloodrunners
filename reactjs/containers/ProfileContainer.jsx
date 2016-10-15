import React from "react"
import axios from 'axios'


var ProfileContainer = React.createClass ({
        
    getInitialState: function() {
      

      return {
      session: '',
      type: '',
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

      };

            
    
    },
    componentWillMount:function(){

      var _this=this;
      var session; 
      var url;

      axios.get('/checkSession/').then(function(result) {    
          console.log(result.data.username)
          session=result.data.username
          _this.setState({session: result.data.username})
          url=("/profile/").concat(session);
          console.log(url);
          
          axios.get(url).then(function(result) {    
                console.log(result)
                //var this1=_this;
                _this.setState({
                  type: result.data.type  
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
              <div>
              <form method="get" action="/home">
              < button type="submit">Home</button>
              </form>

              <h1>donor</h1><br></br>
              <p1>name={this.state.first_name}</p1><br></br> 
              <p1>username={this.state.username}</p1><br></br>
              <p1>first_name={this.state.first_name}</p1><br></br>
              <p1>last_name={this.state.last_name}</p1><br></br>
              <p1>email={this.state.email}</p1><br></br>
              <p1>address={this.state.address}</p1><br></br>
              <p1>city={this.state.city}</p1><br></br>
              <p1>state={this.state.state}</p1><br></br>
              <p1>country={this.state.country}</p1><br></br>
              <p1>bg={this.state.bg}</p1><br></br>
              <p1>badges={this.state.badges}</p1><br></br>
              <p1>dob={this.state.dob}</p1><br></br>
              <p1>contact={this.state.contact}</p1><br></br>
              <p1>age={this.state.age}</p1><br></br>
              <p1>status={this.state.status}</p1><br></br>
                    
              </div>
            );

            }

          else if(this.state.type=="hospital"){
            return (
              <div>
                <form method="get" action="/home">
                < button type="submit">Home</button>
                </form>
                <h1>Hospital</h1><br></br>
                <p1>HospitalName={this.state.name}</p1><br></br>
                <p1>username={this.state.username}</p1><br></br>
                <p1>city={this.state.city}</p1><br></br>
                <p1>state={this.state.state}</p1><br></br>
                <p1>country={this.state.country}</p1><br></br>
                <p1>cp1First_name={this.state.cp1First_name}</p1><br></br>
                <p1>cp2First_name={this.state.cp2First_name}</p1><br></br>
                <p1>cp3First_name  ={this.state.cp3First_name}</p1><br></br>
                <p1>cp1Last_name={this.state.cp1Last_name}</p1><br></br>
                <p1>cp2Last_name={this.state.cp2Last_name}</p1><br></br>
                <p1>cp3Last_name={this.state.cp3Last_name}</p1><br></br>
                <p1>cp1Contact={this.state.cp1Contact}</p1><br></br>
                <p1>cp2Contact={this.state.cp2Contact}</p1><br></br>
                <p1>cp3Contact={this.state.cp3Contact}</p1><br></br>
                <p1>street={this.state.street}</p1><br></br>
                <p1>verified={this.state.verified}</p1><br></br>
                
                    
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

