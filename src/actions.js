
/*
  The state tree is read only. Any time you want to change the state, 
  you have to dispatch an action. The action will describe the state change.
  The only requirement for an action is that it has a type property (conventionally a String).

  const action { type: 'RESET_STATE' };
  const actionWithPayload = { type: 'UPDATE_INPUT_VALUE', payload: 'Dude' };
*/

/* Action Creators simply are functions that return Actions. */
export const updateInputValue = (value) => {
  return { 
    type: 'UPDATE_INPUT_VALUE',
    payload: value,
  }
}

/* You can name the "payload" what ever you want. For example I would go this route ...  */
export const updateName = (name) => {
  return { 
    type: 'UPDATE_NAME',
    /* ES6 obect property shorthand */
    name,
  }
}

/* More ES6 goodies. implicit return. */
export const reset = () => ({
  type: 'RESET_STATE',
});
