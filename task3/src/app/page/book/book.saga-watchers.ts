import { call, takeLatest } from 'redux-saga/effects';

import * as types from './book.types';
import * as constants from './book.constants';
import * as services from './book.saga-services';

function* invokeGetBook(action: types.IGetBook) {
  yield call(services.getBook, action.payload);
}

export function* watchBookPageSaga() {
  yield takeLatest(constants.GET_BOOK, invokeGetBook);
}
