import React, { Component } from 'react';
import axios from 'axios';

import './JokeList.css';
import Joke from './Joke';

const API_URL = 'https://icanhazdadjoke.com/'
class JokeList extends Component {
  static defaultProps = {
    numOfJokes: 10
  }

  state = {
    jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
    loading: false
};

  componentDidMount(){
    if (this.state.jokes.length === 0) this.getJokesHandler();
  }

  getJokesHandler = async () => {
    try {
      let jokes = [];
      const seenJokes = new Set(this.state.jokes.map(jk => jk.text));

      while(jokes.length < this.props.numOfJokes){
        let response = await axios.get(API_URL, {headers: {Accept: 'application/json'}});
        let newJoke = response.data.joke;
        if(!seenJokes.has(newJoke)){
        jokes.push({id: response.data.id, text: newJoke, votes: 0});
      } else {
        console.log('Found Duplicate', newJoke);
      }
    }
      this.setState(st => ({
        loading: false,
        jokes: [...st.jokes, ...jokes]
      }),
      () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      );
      window.localStorage.setItem(
        'jokes',
        JSON.stringify(jokes)
      );
    } catch(err){
      alert(err);
      this.setState({loading: false})
    }
  }
  
  voteHandler = (id, delta) => {
    this.setState(
      st => ({
        jokes: st.jokes.map(jk => 
          jk.id === id ? {...jk, votes: jk.votes + delta} : jk
          )
      }),
      () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      );
  }

  getMoreHandler = () => {
    this.setState({loading: true}, this.getJokesHandler);
  }

  render(){
    let jokes = this.state.jokes.sort((a,b) => b.votes - a.votes);

    let jokeList = jokes.map(jk => (
      <Joke 
        votes={jk.votes} 
        text={jk.text} 
        key={jk.id} 
        upVote={() => this.voteHandler(jk.id, 1)}
        downVote={() => this.voteHandler(jk.id, -1)}
      />
    ));

    if (this.state.loading){
      jokeList = (
        <div className='JokeList-Spinner'>
          <i className='far fa-8x fa-laugh fa-spin' />
          <h1>Loading Jokes...</h1>
        </div>
      );
    }

    return (
      <div className='JokeList'>
        <div className='JokeList-Sidebar'>
          <h1 className='JokeList-Title'>DAD Jokes</h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='laughing-emoji'/>
          <button className='JokeList-GetMore' onClick={this.getMoreHandler}>New Jokes</button>
        </div>
        <div className='JokeList-Jokes'>
          {jokeList}
        </div>
      </div>
    )
  }
}

export default JokeList;