import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const navBar = props => {
  return (
    <div className='NavBar'>
        <NavLink exact to='/' activeClassName='NavBar__Active'>Home</NavLink>
        <NavLink exact to='/crisps' activeClassName='NavBar__Active'>Crisps</NavLink>
        <NavLink exact to='/chocolate' activeClassName='NavBar__Active'>Chocolate</NavLink>
        <NavLink exact to='/lollipop' activeClassName='NavBar__Active'>Lollipop</NavLink>
    </div>
  )
}

export default navBar;