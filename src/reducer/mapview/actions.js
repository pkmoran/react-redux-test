import * as types from '../../constants/action-types';

export function initMap(container) {
  return {
    type: types.INIT_MAP,
    container,
  };
}
