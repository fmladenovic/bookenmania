import React, { FunctionComponent } from 'react';
import { IPaginationProps } from './types';
import _ from 'lodash';

export const Pagination: FunctionComponent<IPaginationProps> = ({ itemsCount, pageSize, onPageChange }) => {
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
