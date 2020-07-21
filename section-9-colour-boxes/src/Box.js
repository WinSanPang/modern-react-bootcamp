import React, { Component } from 'react';

import './Box.css';
import { choice } from './helpers';

class Box extends Component {
  static defaultProps = {
    colours: ['red', 'steelblue', 'salmon', 'violet', 'green', 'gold', 'orange', 'purple', 'lightgrey', 'blue', 'skyblue', 'teal', 'lightgreen', 'lightblue', 'yellow', 'lilac', 'magenta', 'burgundy', 'lightorange']
  }

  state = {
    colour: choice(this.props.colours)
  }

  randomiseColourHandler = () => {
    let newColour;
    do {
      newColour = choice(this.props.colours);
    } while (newColour === this.state.colour)
    this.setState({colour: newColour});
  }

  render(){
    return (
      <div 
        style={{backgroundColor: this.state.colour, height: '20em', width: '20em'}}
        onClick={this.randomiseColourHandler}></div>
    )
  }
}

export default Box;