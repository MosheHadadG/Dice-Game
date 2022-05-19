import React, { Component } from "react";
import Player from "../player/player";
import Dice from "../dice/dice";
import RollDice from "../control/RollDice";
import Hold from "../control/hold";
import WinnerMessage from "../winner-message/winnerMessage";
import './game-board.css'



class GameBoard extends Component {
  state = {
    player1Turn: true,
    player2Turn: false,
    winner: false,
    whoWon: null,
    winnerBoxDisplay: null,
    backgroundPlayer1: '#d12d36',
    backgroundPlayer2: null,
    player1Score: 0,
    player2Score: 0,
    player1CurrScore: 0,
    player2CurrScore: 0,
    pointsToWin: 100,
    die1: null,
    die2: null,
    winner: false
  }


  updateCurrentScore = (die1, die2) => {
    let totalCurrentScore = die1 + die2;
    if (this.state.player1Turn) {
      this.setState((prevState) => {
        return { player1CurrScore: prevState.player1CurrScore + totalCurrentScore }
      })
    }
    else {
      this.setState((prevState) => {
        return { player2CurrScore: prevState.player2CurrScore + totalCurrentScore }
      })
    }
  }

  updateTotalScore = () => {
    this.setState((prevState) => {
      return {
        player1Score: prevState.player1Score + this.state.player1CurrScore,
        player2Score: prevState.player2Score + this.state.player2CurrScore,
        player1CurrScore: 0,
        player2CurrScore: 0
      }
    })
  }

  updateDiceState = (diceObj) => {
    diceObj = diceObj();
    const { die1, die2 } = diceObj;
    this.setState({ die1: die1, die2: die2 });
    this.updateCurrentScore(die1, die2);
  }

  updateTurnState = (turnObj) => {
    const { player1Turn, player2Turn } = turnObj
    this.setState({ player1Turn: player1Turn, player2Turn: player2Turn })
    this.updateTotalScore();
    this.changeBackgroundPlayer();
  }

  changeBackgroundPlayer = () => {
    !this.state.player1Turn ?
      this.setState({ backgroundPlayer1: '#d12d36', backgroundPlayer2: null })
      : this.setState({ backgroundPlayer1: null, backgroundPlayer2: '#d12d36' })
  }

  restGame = () => {
    this.setState({
      player1Turn: true,
      player2Turn: false,
      winner: false,
      whoWon: null,
      winnerBoxDisplay: null,
      backgroundPlayer1: '#d12d36',
      backgroundPlayer2: null,
      player1Score: 0,
      player2Score: 0,
      player1CurrScore: 0,
      player2CurrScore: 0,
      pointsToWin: 100,
      die1: null,
      die2: null,
      winner: false
    });
  }

  checkWhoWon = () => {
    if (this.state.player1Score > this.state.pointsToWin) {
      this.setState({winner: true, whoWon: 'Player 2', winnerBoxDisplay: 'block'})
    }
    else if ((this.state.player2Score > this.state.pointsToWin)) {
      this.setState({winner: true, whoWon: 'Player 1', winnerBoxDisplay: 'block'})
    }

    if(this.state.player1Score == this.state.pointsToWin) {
      this.setState({winner: true, whoWon: 'Player 1', winnerBoxDisplay: 'block'})
    }
    else if(this.state.player2Score == this.state.pointsToWin) {
      this.setState({winner: true, whoWon: 'Player 2', winnerBoxDisplay: 'block'})
    }
  }

  componentDidUpdate = () => {
    if(this.state.winner) {
      console.log(this.state)

    }
    else{
      this.checkWhoWon()
    }
  }

  render() {
    return (
      <div className="game-board">
        <WinnerMessage 
        winnerBoxDisplay={this.state.winnerBoxDisplay}
        winner={this.state.whoWon}
        />

        <Player
          background={this.state.backgroundPlayer1}
          player="Player 1"
          totalScore={this.state.player1Score}
          currentScore={this.state.player1CurrScore}
        />

        <div className="control-container">
          <Dice
            die1={this.state.die1}
            die2={this.state.die2}
          />

          <div className="control-bottom">
            <RollDice clickedRoll={this.updateDiceState} />
            <Hold
              player1Turn={this.state.player1Turn}
              player2Turn={this.state.player2Turn}
              clickedHold={this.updateTurnState}
            />
            <button onClick={this.restGame}>New Game</button>
          </div>
        </div>

        <Player
          background={this.state.backgroundPlayer2}
          player="Player 2"
          totalScore={this.state.player2Score}
          currentScore={this.state.player2CurrScore}
        />
      </div>

    );
  }
}

export default GameBoard;