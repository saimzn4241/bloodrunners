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
        error:false,
        boot_value: '',
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
       
        username: '',
        first_name: '',
        last_name: '',
        bg: '',
        dob: '',
        contact: '',
        age: '',
        status: '',
        hospitals: '',
        cp1First_name: '',
        cp2First_name: '',
        cp3First_name  : '',
        cp1Last_name: '',
        cp2Last_name: '',
        cp3Last_name: '',
        cp1Contact: '',
        cp2Contact: '',
        cp3Contact: '',
        gender: '',

        firebaseEmail: '',
        

    }
    navigator.geolocation.getCurrentPosition(function(location) {
        // console.log(location.coords.accuracy);
        this.setState({
            dlat:location.coords.latitude,
            dlong:location.coords.longitude
        });
    }.bind(this));
  }

  getValidationState() {
    const length = this.state.boot_value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  handleChange(e) {
    this.setState({ boot_value: e.target.value });
  }

  signUP() {
    var email=this.state.firebaseEmail;
    var password= this.state.password;
    const auth=firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password).then(function(){
      this.logOUT();
    }.bind(this)).catch(function(error){
      console.log(error);
      alert(error.message);
    });
    

    //this.stateChange();
  }

  logOUT() {
    const auth=firebase.auth().signOut().then(function(){
      var url="/home/";
      top.location.href = url;
    });
    
    //this.stateChange();
  }

  

  updatFLocat(){
    this.setState({count : this.state.count + 1});
    // console.log(this.state.count);
    // console.log(this.props.type);
    var checkurl=BaseApiUrl;
    if(this.props.type=='hospital'){
        checkurl+=this.state.name+'%2C';
    }
    var url=checkurl+this.state.street+'%2C'+this.state.city+'%2C'+this.state.zip+'%2C'+this.state.country+Key;
    // console.log(url);
    axios.post(url)
    .then(function (response) {
        var result = response.data
        // console.log(result)
        // console.log("======")
        for(var key in result){
            
            console.log(result.results.length)

        }
        var locaIndex=result.results.length-1;
        // console.log("=====")
        // console.log(response.data)
        // console.log("seperate")
        if(response.data.status=='OK'){

        console.log(response.data.results[locaIndex].geometry.location);
        this.setState({
            flat: response.data.results[locaIndex].geometry.location.lat,
            flong: response.data.results[locaIndex].geometry.location.lng
            });
        }
        // console.log("afterStateChange");
        // console.log(this.state.flat)       
    }.bind(this))
    .catch(function (error) {
        // console.log("inside catch");
      console.log(error);
    });
  }

  

  updatePassword(e){
    // console.log( e.target.value)
      
    this.setState({
        password: e.target.value
    });
  }

  updateUsername(e){
    // console.log( e.target.value)
      
    this.setState({
        username: e.target.value,
        firebaseEmail: (e.target.value).concat("@gmail.com")
    });
  }

  updateName(e){
    // console.log( e.target.value)
      
    this.setState({
        name: e.target.value
    },
    function(){
        this.updatFLocat();
    });
  }

  updateStreet(e){
    // console.log( e.target.value)
      
    this.setState({
        street: e.target.value
    },
    function(){
        this.updatFLocat();
    });
  }

  updateCity(e){
    // console.log( e.target.value)
      
    this.setState({
        city: e.target.value
    },
    function(){
        this.updatFLocat();
    });
  }

  updateZip(e){
    // console.log( e.target.value)
      
    this.setState({
        zip: e.target.value
    },
    function(){
        this.updatFLocat();
    });
    
  }

  updateCountry(e){
    // console.log( e.target.value)
      
    this.setState({
        country: e.target.value
    },
    function(){
        this.updatFLocat();
    });
    // console.log(this.state.country+' 86' );
    
  }

    updateFirstname(e){
     
     // console.log( e.target.value)
       this.setState({
          first_name: e.target.value
      });
    }
    updateLastname(e){
     // console.log( e.target.value)
       
      this.setState({
          last_name: e.target.value
      });
    }
    updateGender(e){
      // console.log( e.target.value)
      
      this.setState({
          gender: e.target.value
      });
    }

    updateBday(e){
      // console.log( e.target.value)
      
      this.setState({
          dob: e.target.value
      });
    }

    updateContact(e){
        // console.log( e.target.value)
      
      this.setState({
          contact: e.target.value
      });
    } 

    updateEmail(e){
      // console.log( e.target.value)
      
      this.setState({
          email: e.target.value
      });
    }

    updateBloodGroup(e){
      // console.log( e.target.value)
      
      this.setState({
          bg: e.target.value
      });
    }

    updateCp1Firstname(e){
      // console.log( e.target.value)
      
          this.setState({
              cp1First_name: e.target.value
          });
        }
    updateCp1Lastname(e){
      // console.log( e.target.value)
      
      this.setState({
          cp1Last_name: e.target.value
      });
    }
    updateCp1Contact(e){
      // console.log( e.target.value)
      
      this.setState({
          cp1Contact: e.target.value
      });
    }



    updateCp2Firstname(e){
      // console.log( e.target.value)
      
      this.setState({
          cp2First_name: e.target.value
      });
    }
    updateCp2Lastname(e){
      // console.log( e.target.value)
      
      this.setState({
          cp2Last_name: e.target.value
      });
    }
    updateCp2Contact(e){
      // console.log( e.target.value)
      
      this.setState({
          cp2Contact: e.target.value
      });
    }



    updateCp3Firstname(e){
      // console.log( e.target.value)
      
      this.setState({
          cp2First_name: e.target.value
      });
    }
    updateCp3Lastname(e){
      // console.log( e.target.value)
      
      this.setState({
          cp2Last_name: e.target.value
      });
    }
    updateCp3Contact(e){
      // console.log( e.target.value)
      
      this.setState({
          cp2Contact: e.target.value
      });
    }

     updateState(e){
      // console.log( e.target.value)
      
      this.setState({
          state: e.target.value
      });
    }
    updateType(e){
      // console.log( e.target.value)
      
      this.setState({
          type: e.target.value
      });
    }




    getUrl(){
        //var url=("/profile/").concat(this.state.session);
        //document.getElementById('urlForm').setAttribute('action', url);

        var qs = require('qs');
        var _this = this;





        if(this.props.type=="donor"){

            axios.post('/addUser/' ,
                qs.stringify({
                
                type: this.props.type,
                flat: this.state.flat,
                flong: this.state.flong,
                dlat: this.state.dlat,
                dlong: this.state.dlong,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                gender: this.state.gender,
                username: this.state.username,
                password: this.state.password,
                bday: this.state.dob,
                contact: this.state.contact,
                address: this.state.street,
                city: this.state.city,
                zip: this.state.zip,
                state: this.state.state,
                country: this.state.country,
                email: this.state.email,
                csrfmiddlewaretoken : "$csrf_token"
                
                

                })
            )
            .then(function (response) {
             
                console.log(response);
                console.log("here");
                if(response.data.error==false){
                    this.signUP();
                    console.log("done signup");
                }
                else if(response.data.error==true){
                    this.setState({
                        error: true
                    });
                }

                
            }.bind(this))
            .catch(function (error) {
              console.log(error);
            });


        }
        else if(this.props.type=="hospital"){

             axios.post('/addUser/' ,
                qs.stringify({
                
                type: this.props.type,
                flat: this.state.flat,
                flong: this.state.flong,
                hospitalName: this.state.name,
                username: this.state.username,
                password: this.state.password,
                cp1First_name: this.state.cp1First_name,
                cp1Last_name: this.state.cp1Last_name,
                cp1Contact: this.state.cp1Last_name,
                cp2First_name: this.state.cp2First_name,
                cp2Last_name: this.state.cp2Last_name,
                cp2Contact: this.state.cp2Contact,
                cp3First_name: this.state.cp3First_name,
                cp3Last_name: this.state.cp3Last_name,
                cp3Contact: this.state.cp3Contact,
                
                street: this.state.street,
                city: this.state.city,
                zip: this.state.zip,
                state: this.state.state,
                country: this.state.country,
                csrfmiddlewaretoken : "$csrf_token"
                

                })
            )
            .then(function (response) {
             
                console.log(response);
                console.log("here");
                if(response.data.error==false){
                    this.signUP();
                    console.log("done signup");
                    
                }
                else if(response.data.error==true){
                    this.setState({
                        error: true

                    });
                }
            }.bind(this))
            .catch(function (error) {
              console.log(error);
            });

        }
      }

  render() {
  
  // console.log(location.pathname);
  if(this.props.type=='donor'){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {this.state.error?<h1>There is an error..please submit the form again</h1>:<h1></h1>}
                  
                <div>
                <input type="hidden" name="type" value="donor" onChange={this.updateType.bind(this)}/>

                {/* For fixed location */}
                <input type="hidden" name="flat" value={this.state.flat}/>
                <input type="hidden" name="flong" value={this.state.flong}/>

                {/* For variable location */}
                <input type="hidden" name="dlat" value={this.state.dlat}/>
                <input type="hidden" name="dlong" value={this.state.dlong}/>

                {/*-- Main Form --*/}
                First Name:
                <input type="text"  name="first_name" onChange={this.updateFirstname.bind(this)}>
                </input>
               
                <br></br>
                Last Name:
                <input type="text"  name="last_name" onChange={this.updateLastname.bind(this)}/>
                
                <br></br>
                Gender:  
                <input type="radio" name="gender" value="male" onChange={this.updateGender.bind(this)}/>Male
                <input type="radio" name="gender" value="female" onChange={this.updateGender.bind(this)}/> Female
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
                <input type="date" name="bday" onChange={this.updateBday.bind(this)}/>
                <br></br>
                

                
                Mobile Num:
                <input type="text"  name="contact" onChange={this.updateContact.bind(this)}/>
                <br></br>
                

                
                Address:
                <input type="text"  name="address" onChange={this.updateStreet.bind(this)}/>
                <br></br>


                City:
                <input type="text" name="city" onChange={this.updateCity.bind(this)}/>
                <br></br>
                Zip:
                <input type="text" name="zip" onChange={this.updateZip.bind(this)}/>
                <br></br>
                
                State:
                <input type="text"  name="state" onChange={this.updateState.bind(this)}/>
                <br></br>
                
                Country:
                <input type="text"  name="country" onChange={this.updateCountry.bind(this)}/>
                <br></br>
                Email:
                <input type="text"  name="email" onChange={this.updateEmail.bind(this)}/>
                <br></br>
                
                Blood Group:
                <select name="bg" onChange={this.updateBloodGroup.bind(this)}>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O">O</option>
                </select>
                <br></br>
                 <button  onClick={this.getUrl.bind(this)}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
    } else if(this.props.type=='hospital'){
        return(
        <div className="col-sm-12">

            <br></br>

            {this.state.error?<h1>There is an error..please submit the form again</h1>:<h1></h1>}
            
            <div>

                <input type="hidden" name="type" value="hospital" onChange={this.updateType.bind(this)}/>
                
                <input type="hidden" name="flat" value={this.state.flat}/>
                <input type="hidden" name="flong" value={this.state.flong}/>

                

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
                <h5 >Contact Person 1 :</h5>
               
                <div className="col-sm-12">
                    
                    First Name:
                    <input type="text"  name="cp1First_name" onChange={this.updateCp1Firstname.bind(this)}/>
                    <br></br>

                    Last Name:
                    <input type="text"  name="cp1Last_name" onChange={this.updateCp1Lastname.bind(this)}/>
                    <br></br>

                    Contact :
                    <input type="text" name="cp1Contact" onChange={this.updateCp1Contact.bind(this)}/>
                    



                </div>

                <h5 >Contact Person 2 :</h5>
               
                <div className="col-sm-12">
                    
                    First Name:
                    <input type="text"  name="cp2First_name" onChange={this.updateCp2Firstname.bind(this)}/>
                    <br></br>

                    Last Name:
                    <input type="text"  name="cp2Last_name" onChange={this.updateCp2Lastname.bind(this)}/>
                    <br></br>

                    Contact :
                    <input type="text" name="cp2Contact" onChange={this.updateCp2Contact.bind(this)}/>

                    

                </div>

                <h5 >Contact Person 3 :</h5>
               
                <div className="col-sm-12">
                    
                    First Name:
                    <input type="text"  name="cp3First_name" onChange={this.updateCp3Firstname.bind(this)}/>
                    <br></br>

                    Last Name:
                    <input type="text"  name="cp3Last_name" onChange={this.updateCp3Lastname.bind(this)}/>
                    <br></br>

                    Contact :
                    <input type="text" name="cp3Contact" onChange={this.updateCp3Contact.bind(this)}/>

                    

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
                <input type="text"  name="state" onChange={this.updateState.bind(this)}/>
               

                <br></br>
                Country:
                <input type="text"  name="country" onChange={this.updateCountry.bind(this)}/>
                <br></br>

                 <button  onClick={this.getUrl.bind(this)}>Submit</button>
            </div>
        </div>
        );
    }
    else{
        return(
        <div>
            <h3 >Choose any of the above options!!</h3>
        </div>
        );
    }
  }
}


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}