import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {
      expression : ''
    }
  }

  expressionChangeHandler = (e) => {
    console.log("Button clicked : " + e.target.value);
    e.preventDefault();
    this.setState({
      expression : this.state.expression.concat(e.target.value)
    })
  }

  addOperation = (e) => {
    e.preventDefault();
    this.setState({
      expression : this.state.expression.concat('+')
    })
  }

  subtractOperation = (e) => {
    e.preventDefault();
    this.setState({
      expression : this.state.expression.concat('-')
    })
  }

  multiplyOperation = (e) => {
    e.preventDefault();
    this.setState({
      expression : this.state.expression.concat('*')
    })
  }

  divideOperation = (e) => {
    e.preventDefault();
    this.setState({
      expression : this.state.expression.concat('/')
    })
  }

  clearOperation = (e) => {
    e.preventDefault();
    this.setState({
      expression : ''
    })
  }

  submitCalculation = (e) => {
    e.preventDefault();
    const data = {expression : this.state.expression};
    console.log(data);
    axios.post('http://localhost:3001/calculate', data)
      .then((response) => {
        this.setState({
          expression : response.data.result
        })
      })
  }


  render() {
    return (
      <div className="App">
      <h2 align="left"> Calculator </h2>
        <form align="center" class="form-group" onSubmit={this.submitCalculation}>
          <div class="col-md-4">
              <input class="form-control" type="text" name="expression" placeholder="Enter the Number" readOnly value={this.state.expression}/>
              </div><br/><br/>
            <div class="form-row">
              <button class="btn btn-primary col-sm-1" name="one" value={1} onClick={this.expressionChangeHandler}>1</button>
              <button class="btn btn-primary col-sm-1" name="two" value={2} onClick={this.expressionChangeHandler}>2</button>
              <button class="btn btn-primary col-sm-1" name="three" value={3} onClick={this.expressionChangeHandler}>3</button>
              <button class="btn btn-primary col-sm-1" name="add" onClick={this.addOperation}>+</button>
            </div><br/><br/>
            <div class="form-row">
              <button class="btn btn-primary col-sm-1" name="four" value={4} onClick={this.expressionChangeHandler}>4</button>
              <button class="btn btn-primary col-sm-1" name="five" value={5} onClick={this.expressionChangeHandler}>5</button>
              <button class="btn btn-primary col-sm-1" name="six" value={6} onClick={this.expressionChangeHandler}>6</button>
              <button class="btn btn-primary col-sm-1" name="subtract" onClick={this.subtractOperation}>-</button>
            </div><br/><br/>
            <div class="form-row">
              <button class="btn btn-primary col-sm-1" name="seven" value={7} onClick={this.expressionChangeHandler}>7</button>
              <button class="btn btn-primary col-sm-1" name="eight" value={8} onClick={this.expressionChangeHandler}>8</button>
              <button class="btn btn-primary col-sm-1" name="nine" value={9} onClick={this.expressionChangeHandler}>9</button>
              <button class="btn btn-primary col-sm-1" name="multiply" onClick={this.multiplyOperation}>*</button>
            </div><br/><br/>
            <div class="form-row">
              <button class="btn btn-primary col-sm-1" name="zero" value={0} onClick={this.expressionChangeHandler}>0</button>
              <button class="btn btn-primary col-sm-1" name="decimal" value={'.'} onClick={this.expressionChangeHandler}>.</button>
              <button class="btn btn-primary col-sm-1" name="divide" onClick={this.divideOperation}>/</button>
              <button class="btn btn-danger col-sm-1" name="clear" onClick={this.clearOperation}>C</button>
            </div><br/><br/>
              <button class="btn btn-primary col-sm-1" name="submit" type="submit">=</button>
        </form>
      </div>
    );
  }
}

export default App;
