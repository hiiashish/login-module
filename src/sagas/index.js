import { fork } from 'redux-saga/effects';
import {watchUserLogIn,watchUserLogOut, watchUserSearch} from './watchers.js';

export default function* rootSaga() {
  yield fork(watchUserLogIn);
  yield fork(watchUserLogOut);
  yield fork(watchUserSearch);
}