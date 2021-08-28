import { makeStyles } from '@material-ui/core';

export const useTopMenuStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 0.5,
  },
  title: {
    letterSpacing: '15px',
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));
