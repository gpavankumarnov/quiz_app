import React, { Component, PureComponent } from 'react'

 class PureComp extends PureComponent {
  render() {

    console.log('this is a pure component')
    return (
      <div>purecomponent - {this.props.name}</div>
    )
  }
}
export default PureComp