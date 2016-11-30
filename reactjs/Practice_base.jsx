import React from "react"
import { render } from "react-dom"

import Practice from "./practice"
import Practice1 from "./practice1"
import Practice2 from "./practice2"
import Practice3 from "./practice3"
import Practice4 from "./practice4"
import Practice5 from "./practice5"
import Practice6 from "./practice6"

class Practice_base extends React.Component {
  render() {
    return (
      <div>
      
      <Practice/>
      <br/>
      <br/>
      
      <Practice1/>
      <br/>
      <br/>
      
      <Practice2/>
      <br/>
      <br/>
      
      <Practice3/>
      <br/>
      <br/>
      
      <Practice4/>
      <br/>
      <br/>
      
      <Practice5/>
      <br/>
      <br/>
      
      <Practice6/>
      
      </div>
    )
  }
}

render(<Practice_base/>, document.getElementById('Practice_base'))