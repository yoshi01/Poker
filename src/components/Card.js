import React, { Component } from 'react';

class Card extends Component {
  render() {
  return <div className="card">{this.props.number}</div>
  }
}

export default Card
