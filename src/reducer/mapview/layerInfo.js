import { LAYER_INFO_RECEIVED, FETCHING_LAYER_INFO } from '../../constants/action-types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LAYER_INFO_RECEIVED:
      return {
        ...state,
        attributes: action.attributes,
        fetchingLayerInfo: false,
      };
    case FETCHING_LAYER_INFO:
      return {
        ...state,
        fetchingLayerInfo: true,
      };
    default:
      return state;
  }
};
