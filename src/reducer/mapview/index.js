import { combineReducers } from 'redux';

import layers from './layers';
import error from './error';
import visibleLayers from './visibleLayers';
import layerInfo from './layerInfo';

const mapview = combineReducers({
  layers,
  error,
  visibleLayers,
  layerInfo,
});

export default mapview;
