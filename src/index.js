import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import store from './store';

import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


