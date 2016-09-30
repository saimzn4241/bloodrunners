import React from "react"

import Headline from "../components/Headline"

export default class LoginContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Login Container</Headline>
            <form action="/loginapp1/" method="POST"> 
                    

                Username:
                <input type="text"  name="username">
                </input>

                <br></br>

                Last Name:   
                <input type="password"  name="password"/>
                <br></br>
                
                
                <input type="submit" value="Submit"/>
            </form>
          

          </div>
        </div>
      </div>
    )
  }
}