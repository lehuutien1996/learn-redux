import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const mathReducer = (state = {
    result: 0,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Tien",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME": 
            state = {
                ...state, name: action.payload
            };
            break;
        case "SET_AGE": 
            state = {
                ...state, age: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

const store = createStore(
    combineReducers({ mathReducer, userReducer }),
    {}, // Initial State
    applyMiddleware(logger) // Registering Middlewares
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();


