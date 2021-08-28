import { call } from 'redux-saga/effects';
import { createKey } from '../../../utils/book.utils';
import * as bookResourceService from '../../resource/book/book.saga-service';
import { IBook } from '../../resource/book/book.types';

export function* getBook(id: IBook['id']) {
  yield call(bookResourceService.getBook, createKey(id));
}
