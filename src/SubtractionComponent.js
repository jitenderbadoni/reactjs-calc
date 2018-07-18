import React, { Component } from 'react';

class SubtractionComponent extends Component {

  onPress(e){
    const value = e.nativeEvent.target.innerHTML;
    this.props.handlePress(value);
  }

  render() {
    return (
      <span style={{marginLeft:2}}>
        <button onClick={this.onPress.bind(this)} className="btn-lg btn-warning">-</button>
      </span>
    );
  }
}

export default SubtractionComponent;
