const initialState = {
  name: "",
  age: 12
};

let handler = {};

handler["SET_NAME"] = (state, action) => {
  return {
    ...state,
    name: action.payload
  };
};

handler["SET_AGE"] = (state, action) => {
  return {
    ...state,
    age: action.payload
  }
};

console.log(handler);

const User = (state = initialState, action) =>
  handler[action.type] ? handler[action.type](state, action) : state;

export default User;
