import { put, call } from 'redux-saga/effects';
import { loginUserService,logOutUser } from '../services/loginService';

import * as types from '../actions'

export function* loginSaga(payload) {
    try {
      const response = yield call(loginUserService, payload);
      yield put({ type: types.LOGIN_USER_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.LOGIN_USER_ERROR, error })
    }
  }

  export function* logOutSaga(payload) {
    try {
      // if specific action need to be done for capturing the log out event
      const response = yield call(logOutUser, payload);
      yield put({ type: types.LOGIN_OUT_USER_SUCCESS, response});
    } catch(error) {
      yield put({ type: types.LOGIN_OUT_USER_ERROR, error })
    }
  }


  