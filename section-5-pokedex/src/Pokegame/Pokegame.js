import React, { Component } from 'react';
import Pokedex from '../Pokedex/Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      {id: '1', name: 'Bulbasaur', type: 'Grass', base_experience: 53},
      {id: '4', name: 'Charmander', type: 'Fire', base_experience: 62},
      {id: '7', name: 'Squirtle', type: 'Water', base_experience: 63},
      {id: '25', name: 'Pikachu', type: 'Electric', base_experience: 112},
      {id: '26', name: 'Raichu', type: 'Electric', base_experience: 235},
      {id: '133', name: 'Eevee', type: 'Normal', base_experience: 65},
      {id: '134', name: 'Vaporeon', type: 'Water', base_experience: 95},
      {id: '135', name: 'Jolteon', type: 'Electric', base_experience: 225},
      {id: '136', name: 'Flareon', type: 'Fire', base_experience: 178},    
      {id: '151', name: 'Mew', type: 'Psychic', base_experience: 500},
    ]
  };

  render () {
    let firstHand = [];
    let secondHand = [ ...this.props.pokemon ];
    while (firstHand.length < secondHand.length) {
      let randIdx = Math.floor(Math.random() * secondHand.length);
      let randPokemon = secondHand.splice(randIdx, 1)[0];
      firstHand.push(randPokemon);
    }
    
    let firstExp = firstHand.reduce((baseExp, pokemon) => baseExp + pokemon.base_experience, 0);
    let secondExp = secondHand.reduce((baseExp, pokemon) => baseExp + pokemon.base_experience, 0);

    return (
      <div>
        <h1>Pokegame!</h1>
        <Pokedex pokemon={firstHand} exp={firstExp} isWinner={firstExp > secondExp} />
        <Pokedex pokemon={secondHand} exp={secondExp} isWinner={secondExp > firstExp} />
      </div>
    );
  }
}

export default Pokegame;