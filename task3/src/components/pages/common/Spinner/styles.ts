import { makeStyles } from '@material-ui/core';

export const useSpinnerStyles = makeStyles((theme) => ({
  spinner: {
    zIndex: 1000,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  error: {
    marginTop: '5px',
    fontSize: '11px',
    color: 'red',
  },
}));
