import { GET_BOOK } from './book.constants';

export interface IGetBook {
  type: typeof GET_BOOK;
  payload: string;
}
