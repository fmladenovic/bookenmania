import { CircularProgress } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useSpinnerStyles } from './styles';
import { ISpinnerProps } from './types';

export const Spinner: FunctionComponent<ISpinnerProps> = ({ show }) => {
  const classes = useSpinnerStyles();
  return (
    <>
      {show && (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};
