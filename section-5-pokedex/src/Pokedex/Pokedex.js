import React, { Component } from 'react';

import './Pokedex.css';
import Pokecard from '../Pokecard/Pokecard';

class Pokedex extends Component {
  
  render() {
    let title;
    if(this.props.isWinner){
      title = <h1 className="Pokedex-winner">Winner!</h1>
    } else {
      title =  <h1 className="Pokedex-loser">Loser!</h1>
    }

    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} baseExp={p.base_experience}/>
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;