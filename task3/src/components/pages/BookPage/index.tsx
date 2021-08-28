import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { apiSelectors } from '../../../app/api/api.selectors';
import { getBook } from '../../../app/page/book/book.actions';
import { bookSelectors } from '../../../app/resource/book/book.selectors';
import { useSelectWithParams } from '../../../utils/selector.utils';
import { PageLayout } from '../common/PageLayout';
import { BookItem } from '../HomePage/BookItem';
import { useBookPageStyles } from './styles';
import { IBookPageProps } from './types';

export const BookPage: FunctionComponent = () => {
  const classes = useBookPageStyles();
  const dispatch = useDispatch();
  const { bookId } = useParams<IBookPageProps>();
  const book = useSelectWithParams(bookSelectors.selectResourceById, bookId);

  const inProgress = useSelectWithParams(apiSelectors.selectApiInProgress, 'getBook');
  const error = useSelectWithParams(apiSelectors.selectApiError, 'getBook');

  useEffect(() => {
    dispatch(getBook(bookId));
  }, [bookId, dispatch]);
  return (
    <PageLayout showSpinner={inProgress}>
      {book && (
        <div>
          <BookItem bookId={bookId} />
        </div>
      )}
      {error && <div className={classes.error}> {`Something went wrong...(405)`}</div>}
    </PageLayout>
  );
};
