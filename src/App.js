import React, { Component } from 'react';
/* */
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import {
  updateInputValue,
  updateName,
  reset,
} from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Enter your name
        </p>
        <input
          value={this.props.inputValue}
          onChange={(e) => this.props.onUpdateInputValue(e.target.value)}
          type="text"
        />
        <button onClick={() => this.props.onUpdateName(this.props.inputValue)}>Save</button>
        <button onClick={this.props.onReset}>REset</button>
        {
          this.props.name
          ?
          <h1>{this.props.name}.... SAH DUDE!</h1>
          :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    name: state.name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    onUpdateName: (name) => dispatch(updateName(name)),
    onUpdateInputValue: (value) => dispatch(updateInputValue(value)),
    onReset: () => dispatch(reset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
