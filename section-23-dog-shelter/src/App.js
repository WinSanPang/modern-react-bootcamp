import React, { Component } from 'react';

import './App.css';
import hopihe from './hopihe.jpg';
import hazel from './hazel.jpg';
import boo from './boo.jpg';

import NavBar from './NavBar';
import Routes from './Routes';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Hópihe",
        age: 5,
        src: hopihe,
        facts: [
          "Hópihe loves rolling around in snow ❄️",
          "Hópihe is a little bit clumsy 😅",
          "Hópihe wants to cuddle with you! 🤗"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel loves dressing up 🎀",
          "Hazel is very loyal ❤️",
          "Hazel enjoys sleeping. A lot 😴"
        ]
      },
      {
        name: "Boo",
        age: 4,
        src: boo,
        facts: [
          "Boo has soooo much energy! 🐶",
          "Boo enjoys walks and playing outdoors 🍃🐕",
          "Boo loves eating popcorn 🍿"
        ]
      }
    ]
  }

  render() {
    

    return (
      <div>
        <NavBar dogs={this.props.dogs}/>
        <div className='container'>
          <Routes dogs={this.props.dogs}/>
        </div>
      </div>
    );
  }
}

export default App;
