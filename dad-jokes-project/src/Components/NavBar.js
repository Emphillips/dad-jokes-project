import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLink';
import { connect } from 'react-redux';
import './NavBar.css';





const Navbar = (props) => {
  const { auth, profile } = props;
  console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <nav className="navbar">
      <div className="navbar-home">
      <div className="navbar-link">
            <Link to='/' className="brand-logo"><span>Dad</span>Jokes</Link>
            { links }
      </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);