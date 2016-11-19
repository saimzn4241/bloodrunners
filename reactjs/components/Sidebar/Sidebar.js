import React, { PropTypes as T } from 'react'

export class Sidebar extends React.Component {
  render() {

	    return (
      <div >
          <h1 >{this.props.title}</h1>
      </div>
    )
  }
}

export default Sidebar