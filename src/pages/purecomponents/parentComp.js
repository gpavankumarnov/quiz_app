import React, { Component, PureComponent } from "react";
import PureComp from "./purecomponent";
import RegularComponent from "./regularComp";

export default class parentComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "pavan",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "pavan",
      });
    }, 2000);
  }

  render() {
    console.log(" this is a parent component");

    return (
      <div>
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
