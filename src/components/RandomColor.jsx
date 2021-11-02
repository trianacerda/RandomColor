import React, { Component } from 'react';
class RandomColor extends Component {
  state = {
    displayedColor: 'tan',
    colorList: [
      'black',
      'purple',
      'darkorange',
      'gold',
      'deeppink',
      'red',
      'cornsilk',
      'darkgreen',
      'brown',
      'darkblue',
      'chocolate',
      'salmon',
      'aquamarine',
      'teal',
      'darkgoldenrod',
      'darkmagenta',
      'darkviolet',
      'url("https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg")',
    ],
  };

  handleColorChange = () => {
    setInterval(() => {
      const randomColor = this.getRandomColor();
      this.setState({ displayedColor: randomColor });
    }, 1000);
  };

  componentDidMount() {
    this.handleColorChange();
  }

  getRandomColor() {
    const color =
      this.state.colorList[
        Math.floor(Math.random() * this.state.colorList.length)
      ];
    return color;
  }

  render() {
    return (
      <>
        <h1>Random-Color-Lab</h1>
        <div
          style={{
            background: this.state.displayedColor,
            height: 500,
            width: 500,
            marginTop: 24,
          }}
        ></div>
      </>
    );
  }
}

export default RandomColor;
