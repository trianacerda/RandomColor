import React, { Component } from 'react';

class DisplayChange extends React.Component {
  state = {
    displayedColor: 'tan',
  };
  render() {
    return (
      <>
        <h1>Random-Color-Lab</h1>
        <div
          style={{
            backgroundColor: this.state.displayedColor,
            height: 500,
            width: 500,
            marginTop: 24,
          }}
        ></div>
      </>
    );
  }
}

export default DisplayChange;
