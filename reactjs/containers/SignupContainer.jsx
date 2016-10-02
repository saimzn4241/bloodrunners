import React from "react"

import Headline from "../components/Headline"

export default class SignupContainer extends React.Component {
  render() {
  var divStyle = {
        color: 'red'
  };
  if(this.props.type=='donor'){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form action="/addUser/" method="POST">
                
                <input type="hidden" name="type" value="donor"/>
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
                <input type="text"  name="username">
                </input>
                <br></br>

                Password:
                <input type="password"  name="password">
                </input>

                <br></br>

                Birthday:
                <input type="date" name="bday"/>
                <br></br>
                
                City:
                <input type="text" name="city"/>
                <br></br>
                
                Mobile Num:
                <input type="text"  name="contact"/>
                <br></br>
                Address:
                <input type="text"  name="address"/>
                <br></br>
                State:
                <input type="text"  name="state"/>
                <br></br>
                Country:
                <input type="text"  name="country"/>
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
            <form action="/addUser/" method="POST">
                <input type="hidden" name="type" value="hospital"/>

                Hospital Name:
                <input type="text"  name="hospitalName">
                </input>
                <br></br>
                UserName:
                <input type="text"  name="username">
                </input>
                <br></br>

                Password:
                <input type="password"  name="password">
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
                <input type="text"  name="street"/>
                <br></br>
                City:
                <input type="text"  name="city"/>
                <br></br>
                State:
                <input type="text"  name="state"/>
                <br></br>
                Country:
                <input type="text"  name="country"/>
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