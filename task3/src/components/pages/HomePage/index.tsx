import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PageLayout } from '../common/PageLayout';
import { searchBooks } from '../../../app/page/home/home.actions';
import { Grid, Input } from '@material-ui/core';
// import { useDebounce } from '../../../utils/debounce.utils';
import { useHomeStyles } from './styles';
import { homePageSelectors } from '../../../app/page/home/home.selectors';
import { useSelect, useSelectWithParams } from '../../../utils/selector.utils';
import { apiSelectors } from '../../../app/api/api.selectors';
import { useCallback } from 'react';
import { BookItem } from './BookItem';
import _ from 'lodash';
import { Pagination } from '../common/Pagination';
import { Search } from './Search';
import { Spinner } from '../common/Spinner';
import { IBookSearchParams } from '../../../app/resource/book/book.types';

export const HomePage: FunctionComponent = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const [page, setPage] = useState(1);
  const [params, setParams] = useState<IBookSearchParams>({ title: '', author: '' });
  const bookIds = useSelect(homePageSelectors.selectSearchedBooks);
  console.log(bookIds);

  const [showSpinner, setShowSpinner] = useState(false);
  const inProgress = useSelectWithParams(apiSelectors.selectApiInProgress, 'searchBooks');
  const error = useSelectWithParams(apiSelectors.selectApiError, 'searchBooks');

  const onSearch = useMemo(() => {
    return (title: string, author: string) => {
      setParams({ title, author });
    };
  }, []);

  useEffect(() => {
    dispatch(searchBooks({ payload: params, page }));
  }, [dispatch, page, params]);

  return (
    <PageLayout>
      <div className={classes.root}>
        <Search onSearch={onSearch} />
        <Spinner show={showSpinner} />
        <Grid className={classes.booksWrapper} direction="row" container justify="space-around">
          {bookIds.map((bookId) => (
            <Grid key={`searchedBook-${bookId}`} lg={4} md={3} sm={2} item>
              <BookItem bookId={bookId} />
            </Grid>
          ))}
        </Grid>
        <button onClick={() => setPage((p) => p - 1)}>-</button> {page}
        <button onClick={() => setPage((p) => p + 1)}>+</button>
      </div>
    </PageLayout>
  );
};
