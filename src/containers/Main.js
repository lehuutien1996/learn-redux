import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TodoAction } from '../actions';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

class Main extends Component {

  componentDidMount () {
    this.props.getAllTodo();
  }

  render () {

    return (
      <div className="main-wrapper">
        <h1 className="app-title">The First Todo App</h1>
        <TodoForm
          value={ this.props.todo.todoForm }
          onSubmit={ this.props.submitTodo }
          onChange={ value => this.props.todoInputChanged(value) } />
        <TodoList
          todos={ this.props.todo.todos }
          onClickDestroy={ (todo) => this.props.destroyTodo(todo) }
          onClickEdit={ (todo) => this.props.editTodo(todo) } />
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

  exports.getAllTodo = () => dispatch(TodoAction.getAllTodo());

  exports.todoInputChanged = (content) => {
    dispatch(TodoAction.todoInputChanged(content));
  };

  exports.destroyTodo = (todo) => {
    dispatch(TodoAction.destroyTodo(todo));
  };

  exports.editTodo = (todo) => {
    dispatch(TodoAction.editTodo(todo));
  };

  exports.submitTodo = (todo) => {
    dispatch(TodoAction.submitTodo(todo));
  };

  return exports;
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
