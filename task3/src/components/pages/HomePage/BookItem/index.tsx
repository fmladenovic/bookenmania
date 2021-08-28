import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { bookSelectors } from '../../../../app/resource/book/book.selectors';
import { useSelectWithParams } from '../../../../utils/selector.utils';
import { useBookItemStyles } from './styles';
import { IBookItemProps } from './types';

export const BookItem: FunctionComponent<IBookItemProps> = ({ bookId }) => {
  const classes = useBookItemStyles();
  const book = useSelectWithParams(bookSelectors.selectResourceById, bookId);

  const history = useHistory();
  const redirectToBook = useCallback(() => {
    history.push(`/book/${bookId}`);
  }, [history, bookId]);

  return (
    book && (
      <div className={classes.root} onClick={redirectToBook}>
        <img className={classes.image} alt={book.title} src={book.cover} />
        <div className={classes.titleAuthorsWrapper}>
          <span className={classes.title}>{book.title}</span>
          <div className={classes.authors}>
            {book.authorName.map((name, i) => (
              <span key={`book-${book.id}-author-${i}`} className={classes.author}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  );
};
