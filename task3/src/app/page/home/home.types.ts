import { ISelector } from '../../common/common.types';
import { Pagination } from '../../common/pagination.types';
import { IBook, IBookSearchParams } from '../../resource/book/book.types';

import * as constants from './home.constants';

export interface ISearchBooks {
  type: typeof constants.SEARCH_BOOKS;
  payload: Pagination<IBookSearchParams>;
}

export interface IStoreSearchedBooks {
  type: typeof constants.STORE_SEARCHED_BOOKS;
  payload: IBook['id'][];
}

export interface IClearSearchedBooks {
  type: typeof constants.CLEAR_SEARCHED_BOOKS;
}

export type IHomePageAction = IStoreSearchedBooks | IClearSearchedBooks;

export interface IHomePageState {
  searchedBooks: IBook['id'][];
}

export interface ISelectSearchedBooks extends ISelector<IBook['id'][]> {}

export interface IHomePageSelectors {
  selectSearchedBooks: ISelectSearchedBooks;
}
