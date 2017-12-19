import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import MapView from './components/mapview/mapview';

import './styles/main.scss';

const appNode = document.getElementById('app-container');

render(
  <Provider store={store}>
    <MapView />
  </Provider>,
  appNode,
);

if (module.hot) {
  module.hot.accept();
}
