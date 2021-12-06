import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PageLayout } from '../common/PageLayout';
import Pagination from '../common/pagination';
import { searchBooks } from '../../../app/page/home/home.actions';
import { Grid, Input } from '@material-ui/core';
import { useDebounce } from '../../../utils/debounce.utils';
import { useHomeStyles } from './styles';
import { homePageSelectors } from '../../../app/page/home/home.selectors';
import { useSelect, useSelectWithParams } from '../../../utils/selector.utils';
import { apiSelectors } from '../../../app/api/api.selectors';
import { useCallback } from 'react';
import { BookItem } from './BookItem';
import _ from 'lodash';

export const HomePage: FunctionComponent = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const [page, setPage] = useState(1);
  const bookIds = useSelect(homePageSelectors.selectSearchedBooks);

  const [showSpinner, setShowSpinner] = useState(false);
  const inProgress = useSelectWithParams(apiSelectors.selectApiInProgress, 'searchBooks');
  const error = useSelectWithParams(apiSelectors.selectApiError, 'searchBooks');

  const searchForBooks = (searchType: string) => dispatch(searchBooks({ page, payload: searchType + ':' + query }));
  let currentPage = 1;
  const handlePageChange = (page: number) => {

  };
  // const onQueryChange = useDebounce(
  //   (queryString) => {
  //     dispatch(searchBooks({ page, payload: queryString }));
  //   },
  //   1200,
  //   [dispatch, page],
  // );

  const handleInfiniteScroll = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    setShowSpinner(!error && inProgress);
  }, [error, inProgress, setShowSpinner]);
  // useEffect(() => {
  //   if (query) {
  //     setShowSpinner(true);
  //     setPage(1);
  //     onQueryChange(query);
  //   }
  // }, [onQueryChange, query]);

  useEffect(() => {
    if (page > 1) {
      dispatch(searchBooks({ page, payload: query }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  function paginate(items: string[], pageNumber: number) {
    const startIndex = (pageNumber - 1) * 4;
    return _(items).slice(startIndex).take(4).value();
  }
  const booksToDisplay = paginate(bookIds, currentPage);

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
          <button onClick={() => searchForBooks('title')}>Search title</button>
          <button onClick={() => searchForBooks('author')}>Search authors</button>
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
          {booksToDisplay.map((bookId) => (
            <Grid key={`searchedBook-${bookId}`} lg={4} md={3} sm={2} item>
              <BookItem bookId={bookId} />
            </Grid>
          ))}
        </Grid>
        <Pagination itemsCount={bookIds.length} pageSize={4} onPageChange={handlePageChange} />
      </div>
    </PageLayout>
  );
};
