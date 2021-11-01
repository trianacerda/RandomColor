import React, { Component } from 'react';

class RandomColor extends React.Component {
  render() {
    return (
      <div
        style={{
          colorBox: 'red',
          height: 240,
          width: 240,
          margin: 8,
        }}
      ></div>
    );
  }
}

export default RandomColor;
