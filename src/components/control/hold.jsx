import React, { Component } from "react";



class Hold extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

  changeTurn = (player1Turn, player2Turn) => {
    return {player1Turn: !player1Turn, player2Turn: !player2Turn}
  }

  render() {
    return (
      <button
        onClick=
        { () => this.props.clickedHold(
              this.changeTurn(this.props.player1Turn, this.props.player2Turn))}
              >
        <span><i className="exchange alternate icon"></i> </span>Hold
      </button>


    );
  }
}

export default Hold;