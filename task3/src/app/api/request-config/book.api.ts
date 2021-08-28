import { Pagination } from '../../common/pagination.types';
import { IBook, IBookSearchParams } from '../../resource/book/book.types';
import { IApiRequestConfig } from '../api.types';

export const searchBooksApi = (params: Pagination<IBookSearchParams>): IApiRequestConfig => ({
  apiRouteKey: 'searchBooks',
  uri: 'search.json',
  method: 'get',
  params: { ...params.payload, page: params.page },
});

export const getBookApi = (key: IBook['id']): IApiRequestConfig => ({
  apiRouteKey: 'getBook',
  uri: `/${key}.json`,
  method: 'post',
});
