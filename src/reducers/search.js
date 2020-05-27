import * as types from '../actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.USER_SEARCH_SUCCESS:
      return { ...state, response };
    case types.USER_SEARCH_FAILED:
        return { ...state, response };    
    case types.USER_SEARCH_RESTRICT:
        return { ...state, response };
    case types.USER_SEARCH_COUNTER:
      return { ...state,
            count: state.count + 1
          };
    case types.USER_SEARCH_COUNTER_REFRESH:
      return { ...state,
            count: state.count - state.count
         };
    default:
      return state;
  }
};