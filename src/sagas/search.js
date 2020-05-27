import { put, call } from 'redux-saga/effects';
import { searchUserService } from '../services/search';

import * as types from '../actions'

export function* searchSaga(payload) {
    try {
      const response = yield call(searchUserService, payload);
      if(response && response.searchResult.length>0){
        yield put({ type: types.USER_SEARCH_SUCCESS, response });
      }
    //   else if(response && response.restrict){
    //     yield put({ type: types.USER_SEARCH_RESTRICT, response });
    //   }
      else{
        yield put({ type: types.USER_SEARCH_FAILED, response });
      }
    } catch(error) {
      yield put({ type: types.LOGIN_USER_ERROR, error })
    }
  }