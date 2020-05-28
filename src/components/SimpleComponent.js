import React, { Component } from "react";

class SimpleComponent extends Component {
  state = {
    mood: "happy",
  };

  handleOnClick = () => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad",
      });
    } else {
      this.setState({
        mood: "happy",
      });
    }
  };
  render() {
    return <div onClick={this.handleOnClick}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;
