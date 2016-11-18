import React from "react"
import firebase from 'firebase';
import Headline from "../components/Headline"
import axios from 'axios';

//No support for mixins 
//var LinkedStateMixin = require('react-addons-linked-state-mixin');
//import linkState from "react-addons-linked-state-mixin"

var BaseApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?&address=';
var Key = '&key=AIzaSyCEZBUCbawCF7xfnms9xdgDodS7s423b2E';

export default class SignupContainer extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
        type: '',
        name: '',
        street: '',
        city: '',
        zip: '',
        state: '',
        country: '',
        flat: '',
        flong: '',
        dlat: '',
        dlong: '',
        count: 0,
        user:'',
        value: 'notloggedin',
        password: '',
        email: '',
        notif:'',
    }
    navigator.geolocation.getCurrentPosition(function(location) {
        // console.log("==========");
        // console.log(location.coords.latitude);
        // console.log(location.coords.longitude);
        // console.log(location.coords.accuracy);
        this.setState({
            dlat:location.coords.latitude,
            dlong:location.coords.longitude
        });
    }.bind(this));
  }
  // componentWillMount(){
  //   console.log("=====1=====");
  //   console.log(this.count);
  //   navigator.geolocation.getCurrentPosition(function(location) {
  //       console.log("==========");
  //       console.log(location.coords.latitude);
  //       console.log(location.coords.longitude);
  //       console.log(location.coords.accuracy);
  //       this.setState({
  //           dlat:location.coords.latitude,
  //           dlong:location.coords.longitude
  //       });
  //   });
  // }

  signUP() {
    var email=this.state.email;
    var password= this.state.password;
    var _this = this;
    const auth=firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message)); 

    this.stateChange();
  }

  logOUT() {
    const auth=firebase.auth().signOut();
    this.stateChange();
  }

  stateChange(){

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

  }

  updatFLocat(){
    this.setState({count : this.state.count + 1});
    console.log(this.state.count);
    var _this=this;
    console.log(this.props.type);
    var checkurl=BaseApiUrl;
    if(this.props.type=='hospital'){
        checkurl+=this.state.name+'%2C';
    }
    var url=checkurl+this.state.street+'%2C'+this.state.city+'%2C'+this.state.zip+'%2C'+this.state.country+Key;
    console.log(url);
    axios.post(url)
    .then(function (response) {
        var result = response.data
        // console.log(result)
        console.log("======")
        for(var key in result){
            
            console.log(result.results.length)

        }
        var locaIndex=result.results.length-1;
        console.log("=====")
        console.log(response.data)
        console.log("seperate")
        if(response.data.status=='OK'){

        console.log(response.data.results[locaIndex].geometry.location);
          
        _this.setState({
            flat: response.data.results[locaIndex].geometry.location.lat,
            flong: response.data.results[locaIndex].geometry.location.lng
            });
        }

        // console.log(this.state.flat)       
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateType(e){
    this.setState({
        type: e
    });
  }

  updatePassword(e){
    this.setState({
        password: e.target.value
    });
  }

  updateUsername(e){
    this.setState({
        username: e.target.value,
        email: (e.target.value).concat("@gmail.com")
    });
  }

  updateName(e){
    this.setState({
        name: e.target.value
    },
    function(){
        this.updatFLocat();
    });
  }

  updateStreet(e){
    this.setState({
        street: e.target.value
    },
    function(){
        this.updatFLocat();
    });
  }

  updateCity(e){
    this.setState({
        city: e.target.value
    },
    function(){
        this.updatFLocat();
    });
  }

  updateZip(e){
    this.setState({
        zip: e.target.value
    },
    function(){
        this.updatFLocat();
    });
    
  }

  updateCountry(e){
    this.setState({
        country: e.target.value
    },
    function(){
        this.updatFLocat();
    });
    // console.log(this.state.country+' 86' );
    
  }

  getUrl(){
        //var url=("/profile/").concat(this.state.session);
        //console.log(url);
        this.signUP();
        this.logOUT();
        var url=("/addUser/");
        document.getElementById('urlForm').setAttribute('action', url);
      }


  render() {
  var divStyle = {
        color: 'black'
  };
  // console.log(location.pathname);
  if(this.props.type=='donor'){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form id="urlForm" action="#" method="POST" onSubmit={this.getUrl} >
                <input type="hidden" name="type" value="donor"/>

                {/* For fixed location */}
                <input type="hidden" name="flat" value={this.state.flat}/>
                <input type="hidden" name="flong" value={this.state.flong}/>

                {/* For variable location */}
                <input type="hidden" name="dlat" value={this.state.dlat}/>
                <input type="hidden" name="dlong" value={this.state.dlong}/>

                {/*-- Main Form --*/}
                First Name:
                <input type="text"  name="first_name">
                </input>

                <br></br>
                Last Name:
                <input type="text"  name="last_name"/>
                <br></br>
                Gender:  
                <input type="radio" name="gender" value="male"/>Male
                <input type="radio" name="gender" value="female"/> Female
                <br></br>

                UserName:
                <input type="text"  name="username" onChange={this.updateUsername.bind(this)}>
                </input>
                <br></br>

                Password:
                <input type="password"  name="password" onChange={this.updatePassword.bind(this)}>
                </input>

                <br></br>

                Birthday:
                <input type="date" name="bday"/>
                <br></br>
                
                City:
                <input type="text" name="city" onChange={this.updateCity.bind(this)}/>
                <br></br>
                Zip:
                <input type="text" name="zip" onChange={this.updateZip.bind(this)}/>
                <br></br>
                
                Mobile Num:
                <input type="text"  name="contact"/>
                <br></br>
                Address:
                <input type="text"  name="address" onChange={this.updateStreet.bind(this)}/>
                <br></br>
                State:
                <input type="text"  name="state" />
                <br></br>
                Country:
                <input type="text"  name="country" onChange={this.updateCountry.bind(this)}/>
                <br></br>
                Email:
                <input type="text"  name="email"/>
                <br></br>
                Blood Group:
                <select name="bg">
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O">O</option>
                </select>
                <br></br>
                
                <input type="submit" value="Submit"/>
                
            </form>
          
          </div>
        </div>
      </div>
    );
    } else if(this.props.type=='hospital'){
        return(
        <div className="col-sm-12">
            <br></br>
            <form id="urlForm" action="#" method="POST" onSubmit={this.getUrl}>
                <input type="hidden" name="type" value="hospital"/>
                
                <input type="hidden" name="flat" value={this.state.flat}/>
                <input type="hidden" name="flong" value={this.state.flong}/>

                {/* For variable location */}
                <input type="hidden" name="dlat" value={this.state.dlat}/>
                <input type="hidden" name="dlong" value={this.state.dlong}/>

                Hospital Name:
                <input type="text"  name="hospitalName" onChange={this.updateName.bind(this)}>
                </input>
                <br></br>
                UserName:
                <input type="text"  name="username" onChange={this.updateUsername.bind(this)}>
                </input>
                <br></br>

                Password:
                <input type="password"  name="password" onChange={this.updatePassword.bind(this)}>
                </input>

                <br></br>
                <h5 style={divStyle}>Contact Person 1 :</h5>
               
                <div className="col-sm-12">
                    
                    First Name:
                    <input type="text"  name="cp1First_name"/>
                    <br></br>

                    Last Name:
                    <input type="text"  name="cp1Last_name"/>
                    <br></br>

                    Contact :
                    <input type="text" name="cp1Contact"/>
                </div>

                <h5 style={divStyle}>Contact Person 2 :</h5>
               
                <div className="col-sm-12">
                    
                    First Name:
                    <input type="text"  name="cp2First_name"/>
                    <br></br>

                    Last Name:
                    <input type="text"  name="cp2Last_name"/>
                    <br></br>

                    Contact :
                    <input type="text" name="cp2Contact"/>
                </div>

                <h5 style={divStyle}>Contact Person 3 :</h5>
               
                <div className="col-sm-12">
                    
                    First Name:
                    <input type="text"  name="cp3First_name"/>
                    <br></br>

                    Last Name:
                    <input type="text"  name="cp3Last_name"/>
                    <br></br>

                    Contact :
                    <input type="text" name="cp3Contact"/>
                </div>

                Street:
                <input type="text"  name="street" onChange={this.updateStreet.bind(this)}/>
                <br></br>
                City:
                <input type="text"  name="city" onChange={this.updateCity.bind(this)}/>
                <br></br>
                Zip:
                <input type="text"  name="zip" onChange={this.updateZip.bind(this)}/>
                <br></br>
                State:
                <input type="text"  name="state" />
                <br></br>
                Country:
                <input type="text"  name="country" onChange={this.updateCountry.bind(this)}/>
                <br></br>

                <input type="submit" value="Submit"/>
            </form>
        </div>
        );
    }else{
        return(
        <div>
            <h3 style={divStyle}>Choose any of the above options!!</h3>
        </div>
        );
    }
  }
}