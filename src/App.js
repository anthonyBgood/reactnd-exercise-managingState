import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./Game";
import Score from "./Score";




class App extends Component {
  
  constructor(){
    super();
    this.state = {numCorrect: 0, 
                  numQuestions:0};
  }
  
  recordGame = (playerCorrect) =>{  
    // conditional increment games won
    if(playerCorrect){
      this.setState(currState => ({
        numCorrect: currState.numCorrect + 1.
      }));
  } 
  
  // increment games
  this.setState(currState => ({
    numQuestions: currState.numQuestions +1,
  }))
  }
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
            {/* my react components */}
            <Game recordGame={this.recordGame} />
            <Score numQuestions = {this.state.numQuestions} numCorrect = {this.state.numCorrect}/>
        </div>
      </div>
    );
  }
}

export default App;
