import React, { Component } from 'react';
import './App.css';
import ButtonComponent from "./ButtonComponent";
import AdditionComponent from "./AdditionComponent";
import MultiplicationComponent from "./MultiplicationComponent";
import DivisionComponent from "./DivisionComponent";
import SubtractionComponent from "./SubtractionComponent";
import EqualComponent from "./EqualComponent";
import ClearComponent from "./ClearComponent";

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      value:0,
      op:"",
      previousVal:0
    }
  }

  onChangeValue(newValue){
    if(this.state.value.toString().trim().length < 9){
      if(this.state.value == 0 && newValue != 0){
        let val = this.state.value;
        val += newValue;
        this.setState({
          value: parseInt(val)
        })
      }
      else if(this.state.value != 0){
        let val = this.state.value;
        val += newValue;
        this.setState({
          value: parseInt(val)
        })
      }
    }
  }

  clear(){
    this.setState({
      value:0,
      op:"",
      previousVal:0
    })
  }

  onEvaluate(){

    if(parseInt(this.state.previousVal) > 0 && parseInt(this.state.value) > 0){
      let func;
      switch(this.state.op){
        case "-":
        case "+":
          func = new Function('a', 'b', 'return a'+this.state.op+'b');
        break;
        case "x":
          func = new Function('a', 'b', 'return a * b');
        break;
        case "/":
          func = new Function('a', 'b', 'return parseFloat(a / b)');
        break;
      }
      this.setState({
        value:func(this.state.previousVal, this.state.value),
        op:"",
        previousVal:0
      })
  }
}

  onOperator(operator){
    if(parseInt(this.state.value) > 0 && this.state.previousVal == 0){
      this.setState({
        op:operator,
        previousVal: this.state.value,
        value: 0
      })
    }
    else if(parseInt(this.state.previousVal) > 0 && parseInt(this.state.value) > 0){
      let func;
      
      switch(this.state.op){
        case "-":
        case "+":
          func = new Function('a', 'b', 'return a'+this.state.op+'b');
        break;
        case "x":
          func = new Function('a', 'b', 'return a * b');
        break;
        case "/":
          func = new Function('a', 'b', 'return Math.floor(a / b)');
        break;
      }
        
      this.setState({
        value:func(this.state.previousVal, this.state.value),
        op:"",
        previousVal:0
      })
      
    }
  }

  render() {
    return (
      <div style={{width:200,borderWidth:1,borderRadius:2,borderColor:'#000',borderStyle:'solid'}}>
        <input type="text" value={this.state.value} disabled className="form-control" style={{marginBottom:5, height:70, fontSize:26}}/>
        <div style={{width:220}}>
            <ButtonComponent onChangeValue={this.onChangeValue.bind(this)}/>
            <AdditionComponent handlePress={this.onOperator.bind(this)}/>
            <MultiplicationComponent handlePress={this.onOperator.bind(this)}/>
        </div>
        <div style={{marginTop:2}}>
          <DivisionComponent handlePress={this.onOperator.bind(this)}/>
          <SubtractionComponent handlePress={this.onOperator.bind(this)}/>
          <EqualComponent handleEqual={this.onEvaluate.bind(this)}/>
          <ClearComponent handleClear={this.clear.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
