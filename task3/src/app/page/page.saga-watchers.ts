import { all, fork } from 'redux-saga/effects';
import { watchBookPageSaga } from './book/book.saga-watchers';
import { watchHomePageSaga } from './home/home.saga-watchers';

export function* watchPageSaga() {
  yield all([watchHomePageSaga, watchBookPageSaga].map(fork));
}
