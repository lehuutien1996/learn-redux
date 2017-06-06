import Service from '../services/base.service';

let exports = {};

exports.getAllTodo = () => {
  return {
    type: "GET_TODO",
    payload: Service.get('/todos')
  };
};

exports.destroyTodo = (todo) => {
  return {
    type: "DESTROY_TODO",
    payload: new Promise((resolve, reject) => {
      Service.delete('/todos/' + todo.id)
        .then(res => resolve(todo))
    })
  }
};

exports.todoInputChanged = (content) => {
  return {
    type: "TODO_INPUT_CHANGED",
    payload: content
  };
};

exports.editTodo = (todo) => {
  return {
    type: "EDIT_TODO",
    payload: new Promise(resolve => resolve(todo))
  };
};

exports.submitTodo = (todo) => {

  // Whether the passed todo doesn't have id. CREATE STATE
  if (!todo.id) {
    const payload = {
      content: todo.content,
      is_done: false,
      importance: false
    };
    return {
      type: "ADD_TODO",
      payload: Service.post('/todos', payload)
    }
  } else {
    const payload = {
      content: todo.content
    };
    return {
      type: "SAVE_TODO",
      payload: Service.put('/todos/' + todo.id, payload)
    };
  }

};

export default exports;
