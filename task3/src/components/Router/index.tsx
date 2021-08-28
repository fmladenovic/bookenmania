import React, { FunctionComponent } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getHistory } from '../../app/store';
import { HomePage } from '../pages/HomePage';
import { BookPage } from '../pages/BookPage';

export const Router: FunctionComponent = () => (
  <ConnectedRouter history={getHistory()}>
    <Switch>
      <Route path="/book/:bookId" component={BookPage} />
      <Route path="/" component={HomePage} />
      <Route path="">
        <Redirect to="/" />
      </Route>
    </Switch>
  </ConnectedRouter>
);
