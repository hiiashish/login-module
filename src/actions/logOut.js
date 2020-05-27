import * as types from './index';

export const loginUserAction = (user) => {
    return {
      type: types.LOGIN_USER,
      user
    }
  };


  export const loginOutUserAction = () => {
    return {
      type: types.LOGIN_OUT_USER,
      user: null
    }
  };