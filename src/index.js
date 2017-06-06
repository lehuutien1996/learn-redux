import React from 'react';
import ReactDOM from 'react-dom';
// import App from './containers/App';
import Main from './containers/Main';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


