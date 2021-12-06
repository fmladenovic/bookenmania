import { all, call, put } from '@redux-saga/core/effects';

import * as actions from './book.actions';
import * as api from '../../api/api.saga-services';
import { IBook, IBookSearchParams } from './book.types';
import { getBookApi, searchBooksApi } from '../../api/request-config/book.api';
import { Pagination, PaginationResponse } from '../../common/pagination.types';
import { createBookCoverPath, createId } from '../../../utils/book.utils';

export function* storeBook(book: IBook) {
  yield put(actions.storeBook(book));
  return book.id;
}

export function* clearBook(bookId: IBook['id']) {
  yield put(actions.clearBook(bookId));
}

export function* searchBooks(params: Pagination<IBookSearchParams>) {
  const pagedBooks = (yield call(api.apiRequest, searchBooksApi(params))) as PaginationResponse<IBook>;
  if (!pagedBooks) {
    return;
  }

const books = pagedBooks.docs.map((book) => ({
  id: createId(book.key),
  key: book.key,
  title: book.title,
  authorName: book.authorName,
  text: book.text,
  coverI: book.coverI,
  cover: createBookCoverPath(book.coverI),
}));

  const bookIds = (yield put(
    actions.storeBook(books),
  )) as IBook['id'][];
  return books.map(book => book.id);
}

export function* getBook(isbn: IBook['id']) {
  const book = (yield call(api.apiRequest, getBookApi(isbn))) as IBook;
  if (!book) {
    return;
  }
  console.log(book);
  return book.id;
}
