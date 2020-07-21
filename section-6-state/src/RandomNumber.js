import React, {Component} from 'react';

class RandomNumber extends Component {
  state = {
    number: 1
  }

  randomNumberHandler = (e) => {
    this.setState({number: Math.floor(Math.random() * 10) + 1})
  }

  render(){
    return (
      <div>
        <h1>Number is: {this.state.number}</h1>
        {this.state.number === 7 
          ? <h1>WINNER!</h1>
          : <button onClick={this.randomNumberHandler}>Random Number</button>}
      </div>
    )
  }
}

export default RandomNumber;