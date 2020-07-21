import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceNumber: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 6
  };
  
  onClickHandler = () => {
    this.props.handleClick(this.props.idx);
  }
  
  render() {
    const {diceNumber, val, locked, disabled, rolling} = this.props;

    let classes = `Die fas fa-dice-${diceNumber[val - 1]} fa-5x `;
    
    if (locked) classes += 'Die-locked';

    if (rolling) classes += 'Die-rolling';

    return (
      <i className={classes}
        onClick={this.onClickHandler}
        disabled={disabled}
      />
    );
  }
}

export default Die;
