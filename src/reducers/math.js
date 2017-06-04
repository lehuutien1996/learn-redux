const initialState = {
  result: 1,
  lastValues: []
};

const Math = (state = initialState, action) => {
  switch (action.type) {

    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;

    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;

    default:
      break;

  }
  return state;
};

export default Math;
