import React, { Component } from 'react';
import { User } from '../components/User';
import { connect } from 'react-redux';
import { UserAction } from '../actions';

class App extends Component {

  render() {
    return (
      <div>
        <User user={this.props.user} changeName={(name) => this.props.setName(name)} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.User,
    math: state.Math
  };
};

const mapDispatchToProps = (dispatch) => {
  let exports = {};

  exports.setName = (name) => {
    dispatch(UserAction.setName(name));
  };

  exports.setAge = (age) => {
    dispatch(UserAction.setAge(age));
  };

  return exports;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
