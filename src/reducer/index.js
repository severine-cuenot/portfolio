import { CHANGE_ARIA_EXPEND } from '../actions';

export const initialState = {
  aria: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ARIA_EXPEND:
      return {
        aria: true,
      };
    default:
      return state;
  }
};

export default reducer;
