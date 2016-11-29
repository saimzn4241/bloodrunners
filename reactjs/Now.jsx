import React from "react"
import { render } from "react-dom"

class Now extends React.Component {
  render() {
    return (
      <div>Now in here</div>
    )
  }
}

render(<Now/>, document.getElementById('Now'))