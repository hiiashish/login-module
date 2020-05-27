import * as types from './index';

export const userSearchAction = (term) => {
    return {
      type: types.USER_SEARCH,
      searchTerm : term
    }
  };

  export const userSearchActionCounter = (term) => {
    return {
      type: types.USER_SEARCH_COUNTER,
      count : 0
    }
  };
