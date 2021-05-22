import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    operation: '',
    result: '',
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display operation={this.state.operation || "_"} result={this.state.result || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
