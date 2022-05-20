import React, { Component } from "react";
import './pointsToWin.css'

class PointsToWin extends Component {
  state = { value: '' }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    return this.state.value
  }



  render() {
    return (
      <div>
        <h1>Points To Win: {this.props.points}</h1>
        <form className="pointsToWin" onSubmit={(e) => this.props.clickedSumbit(this.handleSubmit(e))}>
          <input type="number" className="form__input" value={this.state.value} placeholder="Points To Win" onChange={this.handleChange} />
          <input className="pointsSumbit" type="submit" value="Submit" />
        </form>
      </div>

    );
  }


}

export default PointsToWin