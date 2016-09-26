import React from "react"

import Headline from "../components/Headline"

export default class LoginContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Login Container</Headline>
          </div>
        </div>
      </div>
    )
  }
}