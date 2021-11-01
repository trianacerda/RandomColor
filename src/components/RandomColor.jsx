import React, { Component } from 'react';

class RandomColor extends Component {
  state = {
    displayedColor: 'tan',
  };

  getRandomColor() {
    const color =
      this.state.displayedColor[
        Math.floor(Math.random() * this.state.colorList.length)
      ];
    this.setState({ backgroundColor: displayedColor });
  }

  // onRandomColorChange = (color) => {
  //   this.setState({ backgroundColor: color });
  // };

  render() {
    const colorList = [
      'black',
      'purple',
      'yellow',
      'teal',
      // 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg',
    ];
    return (
      <>
        <h1>Random-Color-Lab</h1>
        <div
          style={{
            backgroundColor: displayedColor,
            height: 810,
            width: 810,
            marginTop: 24,
          }}
        ></div>
      </>
    );
  }
}

export default RandomColor;
