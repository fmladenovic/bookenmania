import { combineReducers, Reducer } from 'redux';

import * as types from './page.types';
import { homePageReducer } from './home/home.reducer';

export const pageReducer: Reducer<types.IPageState, types.IPageAction> = combineReducers({
  home: homePageReducer,
});
