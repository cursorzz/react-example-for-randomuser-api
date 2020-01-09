import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
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

export function UserList({ rows }) {
  const classes = useStyles();

  const getName = (result) => {
    const { name } = result
    return `${name.title} ${name.first} ${name.last}`
  }

  return (rows.map(row => {
    return (<TableRow key={row.login.uuid}>
      <TableCell component="th" scope="row" className={classes.root}>
        <Avatar alt={getName(row)} src={row.picture.thumbnail} />
        {getName(row)}
      </TableCell>
      <TableCell align="left" component="th">{row.location.city}</TableCell>
      <TableCell align="left" component="th">{row.location.state}</TableCell>
      <TableCell align="left" component="th">{row.email}</TableCell>
    </TableRow>)
  }))
}