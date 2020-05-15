import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../Store/Actions/AuthActions';


const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/JokeList'>Joke List</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className='btn btn-gloating pink lighten-1'>DJ</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps) (SignedInLinks);