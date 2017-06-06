import _ from 'lodash';


const intitialTodo = {
  content: ""
};

const initialState = {
  todoForm: intitialTodo,
  todos: []
};


let handler = {};

handler["GET_TODO_FULFILLED"] = (state, action) => {
  console.log(action.payload);
  return {
    ...state,
    todos: action.payload
  };
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

handler["ADD_TODO_FULFILLED"] = (state, action) => {
  if (!!action.payload) {
    const newTodo = action.payload;
    return {
      ...state,
      todoForm: intitialTodo,
      todos: [
        newTodo, ...state.todos
      ]
    };
  }
  return state;
};

handler["EDIT_TODO_FULFILLED"] = (state, action) => {

  return {
    ...state,
    todoForm: action.payload
  };

};

handler["SAVE_TODO_FULFILLED"] = (state, action) => {

  const todo = action.payload;

  let todos = state.todos.map(item => { return {...item}; });
  _.remove(todos, (item) => item.id === todo.id);

  return {
    ...state,
    todoForm: intitialTodo,
    todos: [
      todo, ...todos
    ]
  };
};

handler["DESTROY_TODO_FULFILLED"] = (state, action) => {

  const todo = action.payload;

  let todos = state.todos.map(item => { return { ...item }; });
  _.remove(todos, (item) => item.id === todo.id);

  return {
    ...state,
    todos: [ ...todos ]
  };

};

const Todo = (state = initialState, action) =>
  handler[action.type] ? handler[action.type](state, action) : state;

export default Todo;
