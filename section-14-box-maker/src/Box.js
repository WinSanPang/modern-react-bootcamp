import React, { Component } from 'react';

import './Box.css';

class Box extends Component {
  render(){

    return (
      <div>
        <div 
          className='Box'
          style={{
            backgroundColor: `${this.props.colour}`, 
            width: `${this.props.width}px`, 
            height: `${this.props.height}px`}}
            />
        <div><button onClick={this.props.removeBox}>Remove Box</button></div>
      </div>
    );
  }
}

export default Box;