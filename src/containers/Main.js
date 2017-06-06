import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TodoAction } from '../actions';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

class Main extends Component {

  render () {

    return (
      <div>
        <TodoForm
          value={ this.props.todo.todoForm }
          onSubmit={ this.props.addTodo }
          onChange={ value => this.props.todoInputChanged(value) } />
        <TodoList
          todos={ this.props.todo.todos } />
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    todo: state.Todo
  };
};

const mapDispatchToProps = (dispatch) => {
  let exports = {};

  exports.todoInputChanged = (content) => {
    dispatch(TodoAction.todoInputChanged(content));
  };

  exports.addTodo = (todo) => {
    dispatch(TodoAction.addTodo(todo));
  };

  return exports;
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
