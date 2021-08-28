import { generateResourceReducer } from '../generators/resource.reducer';

import * as types from './book.types';
import * as constants from './book.constants';

export const bookReducer = generateResourceReducer<types.IBook>({
  STORE: constants.STORE_BOOK,
  CLEAR: constants.CLEAR_BOOK,
});
