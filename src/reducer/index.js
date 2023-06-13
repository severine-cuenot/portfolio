import { combineReducers } from 'redux';

import successReducer from './succes';

const rootReducer = combineReducers({
  success: successReducer,
});

export default rootReducer;
