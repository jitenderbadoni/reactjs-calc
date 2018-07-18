import React, { Component } from 'react';

class Button extends Component {

  onChangeValue(e){
    const value = e.nativeEvent.target.innerHTML;
    this.props.onChangeValue(value);
  }
  render() {
    let numberButtons = [0, 1, 2, 3, 4, 5, 6, 7,  8, 9];
    numberButtons = numberButtons.reverse()
    let listOfButton = numberButtons.map((number, index)=>
            <span key={index} style={{marginLeft:2, marginTop:2}}>
              <button onClick={this.onChangeValue.bind(this)} className="btn-lg btn-default">{number}</button>
            </span>
        );
    return (
      <div style={{width:150, display:'inline'}}>
        {listOfButton}
      </div>
    );
  }
}

export default Button;
