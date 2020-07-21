import React from 'react';
import { Link } from 'react-router-dom';

import "./Chocolate.css";
import ChocolateImg from "./Chocolate.webp";
import Message from "./Message";

const chocolate = () => {
  return (
    <div className='Chocolate'>
        <img src={ChocolateImg} alt='chocolate-bar' />
        <Message>
          <h1>KINDER BUENO IS MY FAVORITE CHOCOLATE BAR</h1>
          <h3>But now I eat apples dipped in cashew butter instead</h3>
          <p>(I still miss chocolate tho)</p>
          <br/>
          <h1><Link to='/'>Go Back</Link></h1>
        </Message>

        <img src={ChocolateImg} alt='chocolate-bar' />
      </div>
    );
}

export default chocolate;