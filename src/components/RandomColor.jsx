import React, { Component } from 'react';
import DisplayChange from './containers/DisplayChange';

class RandomColor extends Component {
  state = {
    displayedColor: 'tan',
  };

  getRandomColor() {
    this.state.displayedColor[Math.floor(Math.random() * colorList.length)];
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
    return <DisplayChange />;
  }
}

export default RandomColor;
