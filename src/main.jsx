import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import App from './components/app';

import './styles/main.scss';

const appNode = document.getElementById('app-container');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appNode,
);

if (module.hot) {
  module.hot.accept();
}
