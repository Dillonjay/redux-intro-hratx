export const updateInputValue = (value) => {
  return { 
    type: 'UPDATE_INPUT_VALUE',
    payload: value,
  }
}

export const updateName = (value) => {
  return { 
    type: 'UPDATE_NAME',
    payload: value,
  }
}

export const reset = () => {
  return { 
    type: 'RESET_STATE',
  }
}