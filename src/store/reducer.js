const initialState = {
  txt: 'my text'
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'CALL_API_ASYNC':
      newState.txt = 'this is the result of the call.';
      break;

    default:
      return newState;
  }

  return newState;
};

export default reducer;
