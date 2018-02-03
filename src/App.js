import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* We need connect to hook up (subcribe) our component to the redux store */
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
/* Import our actions creators so we can dispatch actions to the store */
import {
  updateInputValue,
  updateName,
  reset,
} from './actions';

class App extends Component {
  /* Added prop-types to document/type check the props comming in from our store. */
  static propTypes = {
    name: PropTypes.string,
    inputValue: PropTypes.string,
    onUpdateInputValue: PropTypes.func.isRequired,
    onUpdateName: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
  }
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

/* Grab the state that we want and pass it in as props to our component. */
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    name: state.name,
  }
}
/*
  Grab the stores dispatch function and pass it in as props.
  Also, create some functions that will dispatch our actions to the store for us. Pass them in as props.
*/
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    onUpdateName: (name) => dispatch(updateName(name)),
    onUpdateInputValue: (value) => dispatch(updateInputValue(value)),
    onReset: () => dispatch(reset()),
  }
}

/* More on the connect function see here: https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options */
export default connect(mapStateToProps, mapDispatchToProps)(App);
