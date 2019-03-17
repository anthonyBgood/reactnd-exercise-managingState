import React, { Component } from "react";

class Game extends Component {

  constructor(props){
    super(props);
    const gameValues = this.calculateGameValues();
    this.state = {
      value1: gameValues.value1,
      value2: gameValues.value2, 
      value3: gameValues.value3, 
      proposedAnswer: gameValues.proposedAnswer
     }
  }

  
  calculateGameValues(){
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return {value1: value1, value2: value2, value3: value3, proposedAnswer: proposedAnswer}
  }

  playGame = (event) =>{
    // convert boolean string to boolean with compare 
    const playerAnswer = event.target.value === 'true';
    const gameAnswer = this.sumAndTest();
    const playerCorrect = gameAnswer === playerAnswer;
    this.props.recordGame(playerCorrect);
    this.resetGameValues();
  }

  sumAndTest(){
    const {value1, value2, value3, proposedAnswer} = this.state;
    return (value1 + value2 + value3) === proposedAnswer;
  };

  resetGameValues(){
    const gameValues = this.calculateGameValues();
    this.setState (currState =>({
        value1: gameValues.value1,
        value2: gameValues.value2, 
        value3: gameValues.value3, 
        proposedAnswer: gameValues.proposedAnswer
       }))
  }
  
  render(){
    return (      
      <React.Fragment>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button value='true' onClick={this.playGame}>True</button>
        <button value='false'onClick={this.playGame}>False</button>
      </React.Fragment>
    );
    
    
  }
}

export default Game;