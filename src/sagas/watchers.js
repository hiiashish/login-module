import { takeLatest } from 'redux-saga/effects';
import { loginSaga, logOutSaga } from './login';
import { searchSaga } from './search';

import * as types from '../actions';


export  function* watchUserLogIn() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
export  function* watchUserLogOut() {
  yield takeLatest(types.LOGIN_OUT_USER, logOutSaga);
}

export  function* watchUserSearch() {
  yield takeLatest(types.USER_SEARCH, searchSaga);
}