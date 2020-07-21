import React, { Component } from 'react';
import './Pokecard.css';

const PokemonImages = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

class Pokecard extends Component {
  render () {
    const props = this.props;
    let imgSrc = `${PokemonImages}${padToThree(props.id)}.png`

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{props.name}</h1>
        <div className="Pokecard-image"><img src={imgSrc} alt={props.name}/></div>
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">EXP: {props.baseExp}</div>
      </div>
    )
  }
}

export default Pokecard;