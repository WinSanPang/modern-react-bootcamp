import React from 'react';
import { Link } from 'react-router-dom';

import './VendingMachine.css';
import Message from './Message';

const vendingMachine = (props) => {
  return (
      <div className='VendingMachine'>
      <Message>
        <h1>HELLO, I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
      </Message>
      <Message>
        <h1><Link to='/crisps'>Crisps</Link></h1>
        <h1><Link to='/chocolate'>Chocolate</Link></h1>
        <h1><Link to='/lollipop'>Lollipop</Link></h1>
      </Message>
    </div>
  )
}

export default vendingMachine;