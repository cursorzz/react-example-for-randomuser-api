import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    '& div': {
      marginRight: 10

    }
  },
});

export function SkeletonList({ rows }) {
  const classes = useStyles();

  return (rows.map((row, index) => {
    return (
      <TableRow key={index}>
        <TableCell component="th" scope="row" className={classes.root}>
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="text" width={"50%"} height={40} />
        </TableCell>
        <TableCell component="th" scope="row">
          <Skeleton variant="text" height={40} />
        </TableCell>
        <TableCell component="th" scope="row">
          <Skeleton variant="text" height={40} />
        </TableCell>
        <TableCell component="th" scope="row">
          <Skeleton variant="text" height={40} />
        </TableCell>
      </TableRow>)
  })
  )
}