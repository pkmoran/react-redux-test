import { MAPVIEW_LOAD_ERROR } from '../../constants/action-types';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case MAPVIEW_LOAD_ERROR:
      return action.hasError || initialState;
    default:
      return state;
  }
};
