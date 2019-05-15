import React, { Component } from "react";
import Body from './Body/Body'

const style = {
  width: '100%',
  height: '100%'
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style}>
        <Body />
      </div>
    );
  }
}

export default App;