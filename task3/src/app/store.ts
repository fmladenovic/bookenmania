import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { History, createBrowserHistory } from 'history';
import { IAppState, IAppAction } from './app.types';

import { createAppReducer } from './app.reducer';
import { appSagaWatcher } from './app.saga-watchers';
import { routerMiddleware } from 'connected-react-router';

let history: History | null = null;

export const getHistory = (): History => {
  if (!history) {
    history = createBrowserHistory();
  }

  return history;
};

const setUpStore = () => {
  const sagasMiddleware = createSagaMiddleware();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const store = createStore<IAppState, IAppAction, {}, {}>(
    createAppReducer(getHistory()),
    applyMiddleware(routerMiddleware(getHistory()), sagasMiddleware),
  );

  sagasMiddleware.run(appSagaWatcher);

  return store;
};

// singleton simulation
let store: Store<IAppState, IAppAction> | null = null;

export const configureStore = (): Store<IAppState, IAppAction> => {
  if (!store) {
    store = setUpStore();
  }

  return store;
};
