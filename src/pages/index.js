import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { Divider } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    '& div': {
      marginRight: 10

    }
  },
});

export default () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;

  const getName = (result) => {
    const { name } = result
    return `${name.title} ${name.first} ${name.last}`
  }

  const handleChangePage = (event, page) => {
    setPage(page)
  }

  const renderSkeletons = (rows) => (
    rows.map((row, index) => {
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
        </TableRow>
      )
    })
  )

  const renderUsers = (rows) => (
    rows.map(row => {
      return (<TableRow key={row.login.uuid}>
        <TableCell component="th" scope="row" className={classes.root}>
          <Avatar alt={getName(row)} src={row.picture.thumbnail} />
          {getName(row)}
        </TableCell>
        <TableCell align="left" component="th">{row.location.city}</TableCell>
        <TableCell align="left" component="th">{row.location.state}</TableCell>
        <TableCell align="left" component="th">{row.email}</TableCell>
      </TableRow>)
    })
  )

  useEffect(() => {
    setLoading(true)
    axios.get(`https://randomuser.me/api/`, { params: { page: page, results: itemsPerPage } })
      .then(res => res['data'])
      .then((response) => {
        setLoading(false)
        setUsers(response["results"])
      })
      .finally(_ => {
        setLoading(false)
      })
  }, [page])


  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? renderSkeletons(users) : renderUsers(users)}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination page={page} onChangePage={handleChangePage} labelDisplayedRows={() => ""} rowsPerPage={itemsPerPage} rowsPerPageOptions={[itemsPerPage]} count={100} />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  )
}
