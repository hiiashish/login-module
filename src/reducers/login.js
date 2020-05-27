import * as types from '../actions';
import storage from 'redux-persist/lib/storage';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
        return { ...state, response };    
    case types.LOGIN_OUT_USER:
        state= undefined;
        storage.removeItem('persist:root')
        return { ...state };
    default:
      return state;
  }
};