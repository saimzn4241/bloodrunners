import React from "react"
import { render } from "react-dom"

class letsWait extends React.Component {
  render() {
    return (
      <div>
      	<h1>here in letsWait</h1>
      </div>
    )
  }
}

render(<letsWait/>, document.getElementById('letsWait'))