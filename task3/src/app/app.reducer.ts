import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { IAppState, IAppAction } from './app.types';

import { resourceReducer } from './resource/resource.reducer';
import { apiReducer } from './api/api.reducer';
import { pageReducer } from './page/page.reducer';
import { connectRouter, LocationChangeAction } from 'connected-react-router';

export const createAppReducer = (history: History): Reducer<IAppState, IAppAction | LocationChangeAction> =>
  combineReducers({
    api: apiReducer,
    resource: resourceReducer,
    page: pageReducer,
    router: connectRouter(history),
  });
