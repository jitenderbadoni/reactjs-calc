import React, { Component } from 'react';

class ClearComponent extends Component {
  onPress(){
    this.props.handleClear();
  }
  render() {
    return (
      <span style={{marginLeft:2}}>
        <button onClick={this.onPress.bind(this)} className="btn-lg btn-danger">C</button>
      </span>
    );
  }
}

export default ClearComponent;
