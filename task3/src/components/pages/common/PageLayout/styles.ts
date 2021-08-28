import { makeStyles } from '@material-ui/core';

export const usePageLayoutStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    padding: '0',
    margin: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    position: 'relative',
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing(2),
    boxSizing: 'border-box',
    overflow: 'auto',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    height: '100%',
    width: '900px',
    minWidth: '300px',
  },
}));
