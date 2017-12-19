import * as types from '../../constants/action-types';

export function initMap(container) {
  return {
    type: types.INIT_MAP,
    container,
  };
}

export function toggleVisibleLayer(id) {
  return {
    type: types.TOGGLE_VISIBLE_LAYER,
    id,
  };
}
