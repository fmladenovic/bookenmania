import * as types from './book.types';
import * as constants from './book.constants';
import { IBook } from '../../resource/book/book.types';

export const getBook = (isbn: IBook['id']): types.IGetBook => ({
  type: constants.GET_BOOK,
  payload: isbn,
});
