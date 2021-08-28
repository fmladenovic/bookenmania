import { combineReducers, Reducer } from 'redux';

import * as types from './home.types';
import * as constants from './home.constants';
import { isActionOfType } from '../../../utils/action.utils';

const initialState: types.IHomePageState = {
  searchedBooks: [],
};

const searchedBooksReducer: Reducer<
  types.IHomePageState['searchedBooks'],
  types.IStoreSearchedBooks | types.IClearSearchedBooks
> = (state = initialState.searchedBooks, action) => {
  if (isActionOfType<types.IStoreSearchedBooks>(action, constants.STORE_SEARCHED_BOOKS)) {
    return action.payload;
  } else if (isActionOfType<types.IClearSearchedBooks>(action, constants.CLEAR_SEARCHED_BOOKS)) {
    return initialState.searchedBooks;
  }
  return state;
};

export const homePageReducer: Reducer<types.IHomePageState, types.IHomePageAction> = combineReducers({
  searchedBooks: searchedBooksReducer,
});
