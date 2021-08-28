import { makeStyles } from '@material-ui/core';

export const useTableStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
    '& > .MuiTableCell-head': {
      color: theme.palette.primary.contrastText,
    },
    marginBottom: theme.spacing(2),
  },
}));
