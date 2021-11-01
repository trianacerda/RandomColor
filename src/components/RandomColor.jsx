import React, { Component } from 'react';

class RandomColor extends Component {
  state = {
    displayedColor: 'tan',
  };

  onRandonFunction = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    const color = [
      'black',
      'purple',
      'yellow',
      'teal',
      // 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg',
    ];
    const { displayedColor } = this.state;
    return (
      <>
        <h1>RandomColorLab</h1>
        <div
          style={{
            backgroundColor: displayedColor,
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
