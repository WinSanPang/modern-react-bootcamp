import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Crisps.css";
import CrispsImg from "./Crisps.png";
import Message from "./Message";


class Crisps extends Component {
  state = {
    bags: []
  };

  handleClick = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState(prevState => ({
      bags: [...prevState.bags, { x, y }]
    }));
  }

  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img
        key={i}
        src={CrispsImg}
        className='bag'
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
        alt="bag of crisps"
      />
    ));
    return (
      <div className='Crisps'>
        <Message>
          <h1>Bags of crisps eaten: {this.state.bags.length}</h1>
          <button onClick={this.handleClick}>nom nom nom</button>
          <h1>
            <Link to='/'>Go Back</Link>
          </h1>
        </Message>
        {bags}
      </div>
    );
  }
}

export default Crisps;
