import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

class Box extends Component {
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col)
  }
  render() { 
    return ( 
      <div className={this.props.boxClass} id={this.props.id} onClick={this.selectBox}/>
     );
  }
}


class Grid extends Component {

  render() {
    const width = (this.props.cols * 16) + 1
    let rowsArr = []
    let boxClass = ""
    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.rows; j++) {
        let boxId = i + " " + j;

        boxClass = this.props.gridFull[i][j] ? "box on" : "box off"
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        )
      }
    }


    return <div className="grid" style={{width: width}}>
      {rowsArr}
    </div>;
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.speed= 100;
    this.rows= 30;
    this.cols= 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(()=>Array(this.cols).fill(false))
    };
  }
  render() {
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <Grid 
          gridFull={this.state.gridFull}
          cols={this.cols}
          rows={this.rows}
          selectBox={this.selectBox}
         />
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
