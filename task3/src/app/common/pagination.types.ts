export interface Pagination<T> {
  page?: number;
  payload: T;
}

export interface PaginationResponse<T> {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  offset: null;
  docs: T[];
}
