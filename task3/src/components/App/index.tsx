import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import { Router } from '../Router';
import { CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { configureStore } from '../../app/store';

export const App: FunctionComponent = () => {
  return (
    <Provider store={configureStore()}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router />
      </MuiPickersUtilsProvider>
    </Provider>
  );
};
