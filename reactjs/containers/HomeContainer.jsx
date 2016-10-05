import React from "react"

import Headline from "../components/Headline"

export default class HomeContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline></Headline>
          </div>
        </div>
      </div>
    )
  }
}