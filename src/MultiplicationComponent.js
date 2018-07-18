import React, { Component } from 'react';

class MultiplicationComponent extends Component {
  onPress(e){
    const value = e.nativeEvent.target.innerHTML;
    this.props.handlePress(value);
  }
  
  render() {
    return (
        <span style={{marginLeft:2}}>
            <button onClick={this.onPress.bind(this)} className="btn-lg btn-warning">x</button>
        </span>
    );
  }
}

export default MultiplicationComponent;
