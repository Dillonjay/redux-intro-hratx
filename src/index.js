import React from 'react';
import ReactDOM from 'react-dom';

/******************************* */
/* Import createStore in order to obviously create the store. */
import { createStore } from 'redux';
/* Import the Provider component in order to provide the store to your app. */
import { Provider } from 'react-redux';
/* Import our reducer and pass it as an argument to createStore. */
import reducer from './reducer';
/******************************* */

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/* 
  To those of you who were asking about multiple reducers, see here:
    https://redux.js.org/docs/api/combineReducers.html

  You can see how combineReducers is implemented under the hood here:
    https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/11-Implementing_combineReducers_from_Scratch.md#16-implementing-combinereducers-from-scratch
 */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*
  The Provider component makes the store available to your app using the React context API.
  More on context: https://reactjs.org/docs/context.html ( ignore the warnings the api has recently changed )
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
