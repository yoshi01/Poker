import React, { Component } from 'react';

class NumberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
  let className = 'card';
  if (this.state.isSelected) {
    className += ' selected';
  }

  return <div className={className} onClick={this.handleClick}>{this.props.number}</div>
  }
}

export default NumberCard
