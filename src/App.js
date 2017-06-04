import React, { Component } from 'react';

import { connect } from 'react-redux';

export class App extends Component {

  render() {

    console.log(this.props);

    const { user } = this.props;

    return (
      <div className="main">
        <div className="user">
          <h3>NAME: { user.name }</h3>
          <h4>AGE: { user.age }</h4>
        </div>
        <div>
          <button onClick={() => this.props.setName("Tien, Le Huu")}>HERE THEY ARE</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      })
    },
    setAge: (age) => {
      dispatch({
        type: "SET_AGE",
        payload: age
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);