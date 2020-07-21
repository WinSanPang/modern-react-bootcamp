import React from 'react';

import './Message.css';

const message = props => {
  return (
    <div className='Message'>
      {props.children}
    </div>
  )
}

export default message;