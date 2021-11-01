import React, { Component } from 'react';

class RandomColor extends Component {
  state = {
    displayedColor: 'tan',
  };
  render() {
    return (
      <>
        <h1>RandomColorLab</h1>
        <div
          style={{
            backgroundColor: this.state.displayedColor,
            height: 240,
            width: 240,
            marginTop: 8,
          }}
        ></div>
      </>
    );
  }
}

export default RandomColor;
