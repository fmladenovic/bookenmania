import { makeStyles } from '@material-ui/core';

export const useHomeStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  filterWrapper: {
    width: '50%',
  },
  queryInput: {
    width: '100%',
  },
  notices: {
    marginTop: '5px',
    fontSize: '11px',
    color: 'gray',
  },

  error: {
    marginTop: '5px',
    fontSize: '11px',
    color: 'red',
  },
  booksWrapper: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
}));
