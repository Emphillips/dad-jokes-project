import React, { Component } from 'react';
// import NavBar from './Components/NavBar';
import SignIn from './Components/SignIn';
import JokeList from './Components/JokeList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          {/* <NavBar /> */}
          <Switch>
            <Route path="/SignIn" component={SignIn} />
            <Route path="/JokeList" component={JokeList} />
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
