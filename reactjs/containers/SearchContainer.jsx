
import React from "react"

import Headline from "../components/Headline"

export default class SearchContainer extends React.Component {
  render() {
    return (
      <div> 
            <Headline >********Blood Runners search********</Headline>
          	    <form action="/search/" method="get">
			    <input type="text" name="q"/>
			    <input type="submit" value="Search"/>
			    </form>
			    

       </div>
    )
  }
}

