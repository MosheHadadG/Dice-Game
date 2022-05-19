import React, { Component } from "react";
import './winnerMessage.css'

class WinnerMessage extends Component {
  
  render() {
    return (
      <div style={{display: this.props.winnerBoxDisplay}} className="box-winner">
      <div className="box-winner-text">
        <h1>{this.props.winner} won!!</h1>
        <p>Congratulations {this.props.winner} won <br></br>for a new game Press the button below</p>

      </div>
    </div>

    );
  }
}

export default WinnerMessage;