import React, { Component } from 'react';
import User from '../components/User';

class App extends from Component {

    render () {
        return (
            <User changeName={(name) => this.props.setName(name)}/>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    let exports = {};

    exports.setName = (name) => {
        dispatch({
            type: "SET_NAME",
            payload: name
        });
    };

    exports.setAge = (age) => {
        dispatch({
            type: "SET_AGE",
            payload: age
        });
    };

    return exports;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);