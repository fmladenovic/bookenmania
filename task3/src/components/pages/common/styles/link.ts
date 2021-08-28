import { makeStyles } from '@material-ui/core';

export const useLinkStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.dark,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
}));
