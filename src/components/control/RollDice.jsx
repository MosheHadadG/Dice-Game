import React, { Component } from "react";

class RollDice extends Component {

  randomDice = () => {
    let randomDie1 = Math.ceil(Math.random() * 6);
    let randomDie2 = Math.ceil(Math.random() * 6);
    return { die1: randomDie1, die2: randomDie2 }
  }

  render() {
    return (
      <button onClick={() => this.props.clickedRoll(this.randomDice)}><span><i className="sync alternate icon"></i> </span>Roll Dice</button>
    );
  }
}

export default RollDice;