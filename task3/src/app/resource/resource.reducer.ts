import { combineReducers } from 'redux';
import { bookReducer } from './book/book.reducer';

import * as types from './resource.types';

export const resourceReducer = combineReducers<types.IResourcesState>({
  book: bookReducer,
});
