import BaseService from '../services/base.service';

let exports = {};

exports.getAllTodo = () => {
  return {
    type: "GET_TODO",
    payload: BaseService.all()
  };
};

exports.todoInputChanged = (content) => {
  return {
    type: "TODO_INPUT_CHANGED",
    payload: content
  };
};

exports.addTodo = (content) => {
  return {
    type: "ADD_TODO",
    payload: content
  }
};

export default exports;
