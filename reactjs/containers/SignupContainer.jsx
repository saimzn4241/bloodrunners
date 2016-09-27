import React from "react"

import Headline from "../components/Headline"

export default class SignupContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Sign-up Container</Headline>
            <form action="/loginapp" method="get">
                
                
                First Name:
                <input type="text"  name="first_name">
                </input>

                <br></br>
                Last Name:   
                <input type="text"  name="last_name"/>
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

                <select value="blood group" name="bg" >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="B+">B+</option>
                  <option value="O">O</option>
                </select>
                <br></br>
                
                <input type="submit" value="Submit"/>
            </form>
          
          </div>
        </div>
      </div>
    )
  }
}