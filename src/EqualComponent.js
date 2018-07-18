import React, { Component } from 'react';

class EqualComponent extends Component {

  onPress(){
    this.props.handleEqual();
  }

  render() {
    return (
      <span style={{marginLeft:2}}>
        <button onClick={this.onPress.bind(this)} className="btn-lg btn-warning">=</button>
      </span>
    );
  }
}

export default EqualComponent;
