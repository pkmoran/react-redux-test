import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducer/app';
import mapview from '../middleware/esri-mapview';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, mapview)),
);

if (module.hot) {
  module.hot.accept('../reducer/app', () => {
    // eslint-disable-next-line
    require(["../reducer/app"], function(nextReducer) {
      store.replaceReducer(nextReducer.default);
    });
  });
}

export default store;
