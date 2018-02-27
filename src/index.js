import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import pomodoroApp from './reducers/reducers'

let store = createStore({
  pomodoroApp
});
let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);
registerServiceWorker();
