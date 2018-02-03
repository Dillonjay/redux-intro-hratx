const connect = require('react-redux').connect;

const initialState = {
  name: '',
  inputValue: '',
}

const action = { type: 'UPDATE_INPUT_VALUE', payload: 'Dillon' }

const updateInputValue = (value) => {
  return { 
    type: 'UPDATE_INPUT_VALUE',
    payload: value,
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_INPUT_VALUE':
      return Object.assign({}, state, { inputValue: action.payload }) 
    default: 
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(updateInputValue('Dude'));

console.log(store.getState());
