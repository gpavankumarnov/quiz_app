import React, { Component } from 'react'

 class RegularCompoent extends Component {
  render() {


    console.log('this is a regular component')
    return (
      <div>regularComp - {this.props.name}</div>
    )
  }
}

export default RegularCompoent