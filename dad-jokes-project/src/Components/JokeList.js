import React, { Component } from 'react';
import axios from "axios";
import Joke from './Joke';
import { v4 as uuid } from "uuid"; // updated synatx to fix uuid compile error
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './JokeList.css';


class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props){
        super(props);
        this.state = { jokes: [] }; // Jokes place holder
    }

    async componentDidMount(){
    // Load Jokes
    let jokes = [];
    while(jokes.length < this.props.numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com/", {
            headers: {Accept: "application/json"}  // Header added to format in JSON 
        });
        jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({jokes: jokes});
    }
    handleVote(id, delta) {
        this.setState(
            st => ({
                jokes: st.jokes.map(j =>
                j.id === id ? {...j, votes: j.votes + delta } : j 
            )
            }));
    }

    render() {
        // Guarded Route -- If signed in will show Joke list.
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return ( // Jokes display
        <div className="Joke-app">
            <div className="JokeList">
                <div className="JokeList-sidebar">
                <h1 className="JokeList-title"><span>Dad</span>Jokes
                </h1>
                <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="" />
                <button className="JokeList-getmore">New Jokes</button>
                </div>
                
                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                        <Joke key={j.id} 
                        votes={j.votes} 
                        text={j.text} 
                        upvote={() => this.handleVote(j.id, 1)} 
                        downvote={() => this.handleVote(j.id, -1)}
                    />
                    ))}
                </div>
            </div>
        </div>
        );
    }
}

// Attach to Props
const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  

export default connect(mapStateToProps) (JokeList);