const initialState = {
  name: '',
  inputValue: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_INPUT_VALUE':
      return Object.assign({}, state, { inputValue: action.payload });
    case 'UPDATE_NAME':
      return Object.assign({}, state, { name: action.payload });
    case 'RESET_STATE':
      return initialState;
    default: 
      return state;
  }
}

export default reducer;