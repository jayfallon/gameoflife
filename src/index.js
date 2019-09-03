import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Grid</div>;
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generation: null
    };
  }
  render() {
    return (
      <div>
        <h1>The Game of Life</h1>
        <Grid />
        <h2>generations: {this.state.generation}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
