import { generateClearResourceAction, generateStoreResourceAction } from '../generators/resource.actions';

import * as types from './book.types';
import * as constants from './book.constants';

export const storeBook = generateStoreResourceAction<types.IBook>(constants.STORE_BOOK);
export const clearBook = generateClearResourceAction(constants.CLEAR_BOOK);
