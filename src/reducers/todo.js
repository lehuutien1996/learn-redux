const initialState = {
  todoForm: "",
  todos: [
    { id: 1, content: "JavaScript Next", isCompleted: false },
    { id: 2, content: "Babel ES6", isCompleted: false },
    { id: 3, content: "Shipping Connection", isCompleted: false },
    { id: 4, content: "Embedded", isCompleted: false },
    { id: 5, content: "Simultaneously", isCompleted: false },
    { id: 6, content: "Great Evil", isCompleted: false },
  ]
};


let handler = {};

handler["GET_TODO_FULFILLED"] = (state, action) => {
  console.log(action.payload);
};

/**
 * Invoked when the input's value is changed
 * @param {Object} state
 * @param {Object} action
 */
handler["TODO_INPUT_CHANGED"] = (state, action) => {

  return {
    ...state,
    todoForm: action.payload
  };

};

handler["ADD_TODO"] = (state, action) => {
  if (!!action.payload) {

    const newTodo = {
      id: new Date().getTime(),
      content: action.payload,
      isCompleted: false
    };

    return {
      ...state,
      todoForm: "",
      todos: [...state.todos, newTodo]
    };
  }
  return state;
};

  const Todo = (state = initialState, action) =>
  handler[action.type] ? handler[action.type](state, action) : state;

export default Todo;
