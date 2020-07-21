import React, { Component } from 'react';

import Coin from './Coin';
import { choice } from './helpers';

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
      {side: 'tails', imgSrc: 'https://fortunetellingplus.com/assets/img/coins/dime-tails.png'}
    ]
  }

  state = {
    currentCoin: null,
    numOfFlips: 0,
    numOfHeads: 0,
    numOfTails: 0,
  }

  flipHandler = () => {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currentCoin: newCoin,
        numOfFlips: st.numOfFlips + 1,
        numOfHeads: st.numOfHeads + (newCoin.side === 'heads' ? 1 : 0),
        numOfTails: st.numOfHeads + (newCoin.side === 'tails' ? 1 : 0),
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {this.state.currentCoin && <Coin info={this.state.currentCoin}/>}
        <button onClick={this.flipHandler}>FLIP MEEE!</button>
        <p>Out of {this.state.numOfFlips} flips, there have been {this.state.numOfHeads} heads and {this.state.numOfTails} tails.</p>
      </div>
    )
  }
}

export default CoinFlipper;