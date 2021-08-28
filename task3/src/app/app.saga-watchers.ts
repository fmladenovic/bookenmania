import { fork, all } from 'redux-saga/effects';

import { watchPageSaga } from './page/page.saga-watchers';

export function* appSagaWatcher() {
  yield all([watchPageSaga].map(fork));
}
