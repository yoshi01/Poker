import React, { Component } from 'react';
import NumberCard from './NumberCard.js';

class SelectArea extends Component {
  render() {
    var list = [];
    const fib = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

    fib.forEach(i => {
      list.push(<NumberCard number={i} key={i}></NumberCard>)
    });

    return (
      <div className="select-area">
        {list}
      </div>
    );
  }
}

export default SelectArea
