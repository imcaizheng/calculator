import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    operation: PropTypes.string,
    result: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div id="operation-display">
          <div>{this.props.operation}</div>
        </div>
        <div id="result-display">
          <div>{this.props.result}</div>
        </div>
      </div>
    );
  }
}
