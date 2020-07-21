import React, { Component } from 'react';

import Box from './Box';
import './BoxGrid.css';

class BoxGrid extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColours: ['red', 'steelblue', 'salmon', 'violet', 'green', 'gold', 'orange', 'purple', 'lightgrey', 'blue', 'skyblue', 'teal', 'lightgreen', 'lightblue', 'yellow', 'lilac', 'magenta', 'burgundy']
  }

  render() {
    const boxes = Array.from({length: this.props.numBoxes}).map(
      () => <Box colours={this.props.allColours}/>
    );
    return (
      <div className='BoxGrid'>{boxes}</div>
    );
  }
}

export default BoxGrid;