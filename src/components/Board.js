import React, { Component } from 'react';
import Card from './Card.js';
import SelectArea from './SelectArea.js';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <Card number={1}></Card>
        <SelectArea></SelectArea>
      </div>
    );
  }
}

export default Board
