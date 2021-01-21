import React from "react";

export default class Title extends React.Component {
  constructor() {
    super();
    this.state = {name: "welcome"};
  }
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}