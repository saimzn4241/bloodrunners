import React from "react"
import { render } from "react-dom"

import SearchContainer from "./containers/SearchContainer"

class Search extends React.Component {
  render() {
    return (
       <SearchContainer />
    )
  }
}

render(<Search/>, document.getElementById('Search'))