import { INIT_SUCCESS, SENT_MSG } from '../actions';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SENT_MSG:
      return {
        ...state,
        message: action.message,
      };
    case INIT_SUCCESS:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
}

export default reducer;
