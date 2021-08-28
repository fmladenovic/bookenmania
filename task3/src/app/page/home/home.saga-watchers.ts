import { call, takeLatest } from 'redux-saga/effects';

import * as types from './home.types';
import * as constants from './home.constants';
import * as services from './home.saga-services';

function* invokeSearchBooks(action: types.ISearchBooks) {
  yield call(services.searchBooks, action.payload);
}

export function* watchHomePageSaga() {
  yield takeLatest(constants.SEARCH_BOOKS, invokeSearchBooks);
}
