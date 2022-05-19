import React, { Component } from "react";
import './player.css'

class Player extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{backgroundColor: this.props.background}} className="box-player">
        <h1>{this.props.player}</h1>
        <span className="total-score">{this.props.totalScore}</span>
        <div className="current-score">
          <h3>Current</h3>
          <span>{this.props.currentScore}</span>
        </div>
      </div>
    );
  }
}

export default Player;