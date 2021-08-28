import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useTopMenuStyles } from './styles';
import { Link } from 'react-router-dom';

export const TopMenu: FunctionComponent = () => {
  const classes = useTopMenuStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.wrapper}>
            <Link className={classes.link} to="/">
              <Typography className={classes.title} variant="h6" noWrap>
                BOOKENMANIA
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
