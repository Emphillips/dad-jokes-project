import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import JokeList from './Components/JokeList';
import Dashboard from './Components/Dashboard';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/JokeList" component={JokeList} />
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
