import React from 'react';
import { Link } from 'react-router-dom';

import './Lollipop.css';
import Message from './Message';

const lollipop = () => {
  return (
    <div className='Lollipop'>
      <Message>
        <h1>Kitties love lollipops too.</h1>
        <h1>This kitty has stolen your lollipop.</h1>
        <h1>Nothing you can do about it now.</h1>
        <br/>
        <br/>
        <h1><Link to='/'>Go Back</Link></h1>
      </Message>
    </div>
  )
}

export default lollipop;