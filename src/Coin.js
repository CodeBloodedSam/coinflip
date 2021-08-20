import React, { Component } from "react";

export default class Coin extends Component {
  render() {
    return (
      <div>
        <img alt={this.props.data.side} src={this.props.data.imgSrc} />
      </div>
    );
  }
}
