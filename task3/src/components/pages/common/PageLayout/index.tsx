import React, { FunctionComponent, useRef } from 'react';
import { Spinner } from '../Spinner';
import { TopMenu } from '../TopMenu';
import { usePageLayoutStyles } from './styles';
import { IPageLayoutProps } from './types';

export const PageLayout: FunctionComponent<IPageLayoutProps> = ({ children, onInfiniteScroll, showSpinner }) => {
  const classes = usePageLayoutStyles();
  const contentWrapper = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    if (contentWrapper.current && onInfiniteScroll && contentWrapper.current.scrollTop) {
      if (
        contentWrapper.current.scrollHeight - contentWrapper.current.scrollTop ===
        contentWrapper.current.clientHeight
      ) {
        onInfiniteScroll();
      }
    }
  };
  return (
    <div className={classes.root}>
      <TopMenu />
      <div id="contentWrapper" ref={contentWrapper} className={classes.contentWrapper} onScroll={onScroll}>
        <div className={classes.content}>{children}</div>
      </div>
      <Spinner show={showSpinner} />
    </div>
  );
};
