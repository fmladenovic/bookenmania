import { makeStyles } from '@material-ui/core';

export const useFilterStyles = makeStyles((theme) => ({
  filterRow: {
    paddingBottom: theme.spacing(2),
  },
  filterInput: {
    paddingRight: theme.spacing(1),
  },
}));
