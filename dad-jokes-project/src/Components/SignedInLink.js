import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/JokeList'>Joke List</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className='btn btn-gloating pink lighten-1'>DJ</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
