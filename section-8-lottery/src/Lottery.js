import React, { Component } from 'react';

import './Lottery.css';
import LotteryBall from './LotteryBall';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }

  state = {
    numberOfBalls: Array.from({length: this.props.numBalls})
  }

  generateLotteryHandler = () => {
    this.setState(curState => ({
      numberOfBalls: curState.numberOfBalls.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
        )
    }));
  }

  render(){
    return (
      <div className="Lottery">
      <h1>{this.props.title}</h1>
      <div>
        {this.state.numberOfBalls.map(n => 
          <LotteryBall num={n}/>
        )}
      </div>
      <button className="Button" onClick={this.generateLotteryHandler}>Generate</button>
      </div>
    )
  }
}

export default Lottery;