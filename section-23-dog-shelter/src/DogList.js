import React from 'react';
import { Link } from 'react-router-dom';

import './DogList.css';

const dogList = props => {
  return (
    <div className='DogList'>
      <h1 className='display-1 text-center my-5'>Dog List</h1>
        <div className='row'>
          {props.dogs.map(d => (
            <div className='DogList col-lg-4 text-center' key={d.name}>
              <img src={d.src} alt={d.name}/>
              <h3  className='mt-3'>
                <Link className='underline' to={`/dogs/${d.name}`}>{d.name}</Link>
              </h3>
            </div>
          ))}
      </div>
    </div>
  )
}

export default dogList;