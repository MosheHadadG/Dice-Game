import React, { Component } from "react";
import './dice.css'

class Dice extends Component {
  
  render() {
    if (this.props.die1 || this.props.die2) {
      return (
        <div className="dice-box">
          <div className="dice-img">
            <img src={require(`../images/dice/dice-${this.props.die1}.png`)}></img>
          </div>
          <div className="dice-img">
            <img src={require(`../images/dice/dice-${this.props.die2}.png`)}></img>
          </div>
        </div>
      );
    }
    else {
      return(
        <div className="dice-box">

        </div>

      );
    }
  }





}

export default Dice;