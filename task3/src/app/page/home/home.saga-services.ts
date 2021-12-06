import { call, put, select } from 'redux-saga/effects';
import { clearSearchedBooks, storeSearchedBooks } from './home.actions';
import { IBook, IBookSearchParams } from '../../resource/book/book.types';
import * as bookService from '../../resource/book/book.saga-service';
import { Pagination } from '../../common/pagination.types';
import { homePageSelectors } from './home.selectors';

// export function* searchBooks(params: Pagination<string>) {
//   const parsedParams = params.payload
//     .split(' ')
//     .map((joinedKeyValue) => joinedKeyValue.split(':'))
//     .reduce((prev, curr) => {
//       if (curr.length !== 2) {
//         return prev;
//       }
//       prev[curr[0]] = curr[1].replaceAll('_', ' ');
//       return prev;
//     }, {} as IBookSearchParams);
//   const bookIds = (yield call(bookService.searchBooks, { payload: parsedParams, page: params.page })) as IBook['id'][];
//   const prevBookIds = (yield select(homePageSelectors.selectSearchedBooks)) as IBook['id'][];
//   if (params.page !== 1) {
//     yield put(bookIds ? storeSearchedBooks([...prevBookIds, ...bookIds]) : clearSearchedBooks());
//   } else {
//     yield put(bookIds ? storeSearchedBooks(bookIds) : clearSearchedBooks());
//   }
// }

export function* searchBooks(params: Pagination<IBookSearchParams>) {
  const bookIds = (yield call(bookService.searchBooks, {
    payload: params.payload,
    page: params.page,
  })) as IBook['id'][];
  yield put(bookIds ? storeSearchedBooks(bookIds) : clearSearchedBooks());
}
