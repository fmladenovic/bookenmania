import * as types from './home.types';
import * as constants from './home.constants';
import { IBook } from '../../resource/book/book.types';
import { Pagination } from '../../common/pagination.types';

export const searchBooks = (props: Pagination<string>): types.ISearchBooks => ({
  type: constants.SEARCH_BOOKS,
  payload: props,
});

export const storeSearchedBooks = (books: IBook['id'][]): types.IStoreSearchedBooks => ({
  type: constants.STORE_SEARCHED_BOOKS,
  payload: books,
});

export const clearSearchedBooks = (): types.IClearSearchedBooks => ({
  type: constants.CLEAR_SEARCHED_BOOKS,
});
