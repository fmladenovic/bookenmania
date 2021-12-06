import { makeStyles } from '@material-ui/core';

export const useBookItemStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15px',
    cursor: 'pointer',
  },
  image: {
    height: '300px',
  },
  titleAuthorsWrapper: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {},
  authors: {
    fontStyle: 'italic',
    color: 'gray',
  },
  author: {
    marginLeft: '5px',
  },
}));
