import React, { Component } from 'react';
import axios from 'axios';

import './Deck.css';
import Card from './Card';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/';

class Deck extends Component {
  state = {
    deck: null,
    drawnCard: [],
  }

  async componentDidMount(){
    let deck = await axios.get(`${API_BASE_URL}new/shuffle/`);
      this.setState({deck: deck.data});
  }

  drawCardHandler = async () => {
    let id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}${id}/draw/`;
      let cardRes = await axios.get(cardUrl);
      if(!cardRes.data.success) {
        throw new Error("No cards left! Refresh and start again")
      }
      let card = cardRes.data.cards[0];
       this.setState(st => ({
        drawnCard: [
          ...st.drawnCard, 
          {
            id: card.code, 
            image: card.image, 
            name: `${card.value} of ${card.suit}`
          }
      ]
    }));
  } catch (err) {
    alert(err);
  }
}

  render(){
    const cards = this.state.drawnCard.map(c => (
      <Card key={c.id} name={c.name} image={c.image}/>
    ));

    return (
      <div className='Deck'>
        <h1 className='Deck-Title'>♦ Card Dealer ♦</h1>
        <button className='Deck-Button' onClick={this.drawCardHandler}>Draw a Card</button>
        <div className='Deck-Cards'>
          {cards}
        </div>
      </div>
    )
  }
}

export default Deck;