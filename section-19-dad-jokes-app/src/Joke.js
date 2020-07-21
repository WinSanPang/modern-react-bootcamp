import React, { Component } from 'react';

import './Joke.css';

class Joke extends Component {

  colourHandler = () => {
    if (this.props.votes >= 15) {
      return "#4CAF50";
    } else if (this.props.votes >= 11) {
      return "#8BC34A";
    } else if (this.props.votes >= 9) {
      return "#CDDC39";
    } else if (this.props.votes >= 6) {
      return "#FFEB3B";
    } else if (this.props.votes >= 3) {
      return "#FFC107";
    } else if (this.props.votes >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  }

  emojiHandler = () => {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.votes >= 11) {
      return "em em-face_with_hand_over_mouth";
    } else if (this.props.votes >= 9) {
      return "em em-laughing";
    } else if (this.props.votes >= 6) {
      return "em em-smile";
    } else if (this.props.votes >= 3) {
      return "em em-smiley";
    } else if (this.props.votes > 0) {
      return "em em-slightly_smiling_face";
    } else if (this.props.votes < 0) {
      return "em em-disappointed";
    } else {
      return "em em-no_mouth";
    }
  }

  render(){
    return (
      <div className='Joke'>
        <div className='Joke-Buttons'>
          <i className='fas fa-arrow-up' onClick={this.props.upVote}/>
          <span className='Joke-Votes' style={{borderColor: this.colourHandler()}}>{this.props.votes}</span>
          <i className='fas fa-arrow-down' onClick={this.props.downVote}/>
        </div>
        <div className='Joke-Text'>
          {this.props.text}
        </div>
        <div className='Joke-Smiley'>
        <i className={this.emojiHandler()}/>
        </div>
      </div>
    )
  }
}

export default Joke;
