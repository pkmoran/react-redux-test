import { combineReducers } from 'redux';

import layers from './layers';
import error from './error';

const mapview = combineReducers({
  layers,
  error,
});

export default mapview;
