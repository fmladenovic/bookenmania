import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PageLayout } from '../common/PageLayout';
import { searchBooks } from '../../../app/page/home/home.actions';
import { Grid, Input } from '@material-ui/core';
import { useDebounce } from '../../../utils/debounce.utils';
import { useHomeStyles } from './styles';
import { homePageSelectors } from '../../../app/page/home/home.selectors';
import { useSelect, useSelectWithParams } from '../../../utils/selector.utils';
import { apiSelectors } from '../../../app/api/api.selectors';
import { useCallback } from 'react';
import { BookItem } from './BookItem';

export const HomePage: FunctionComponent = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const [page, setPage] = useState(1);
  const bookIds = useSelect(homePageSelectors.selectSearchedBooks);

  const [showSpinner, setShowSpinner] = useState(false);
  const inProgress = useSelectWithParams(apiSelectors.selectApiInProgress, 'searchBooks');
  const error = useSelectWithParams(apiSelectors.selectApiError, 'searchBooks');

  const onQueryChange = useDebounce(
    (queryString) => {
      dispatch(searchBooks({ page, payload: queryString }));
    },
    1200,
    [dispatch, page],
  );

  const handleInfiniteScroll = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    setShowSpinner(!error && inProgress);
  }, [error, inProgress, setShowSpinner]);
  useEffect(() => {
    if (query) {
      setShowSpinner(true);
      setPage(1);
      onQueryChange(query);
    }
  }, [onQueryChange, query]);

  useEffect(() => {
    if (page > 1) {
      dispatch(searchBooks({ page, payload: query }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);
  return (
    <PageLayout onInfiniteScroll={handleInfiniteScroll} showSpinner={showSpinner}>
      <div className={classes.root}>
        <div className={classes.filterWrapper}>
          <Input
            className={classes.queryInput}
            placeholder="Type forward..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className={classes.error}>{error?.message}</span>
          <p className={classes.notices}>
            Notice: Input should be in key:value format divided by space (&ldquo; &rdquo;)
            <br />
            Notice: If your input contains space replace it with undescore (&ldquo;_&rdquo;)
            <br />
            Example: title:Lord_of author:Alison
          </p>
        </div>

        <Grid className={classes.booksWrapper} direction="row" container justify="space-around">
          {bookIds.map((bookId) => (
            <Grid key={`searchedBook-${bookId}`} lg={4} md={3} sm={2} item>
              <BookItem bookId={bookId} />
            </Grid>
          ))}
        </Grid>
      </div>
    </PageLayout>
  );
};
