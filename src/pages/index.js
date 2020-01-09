import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/users';
import { UserList } from '../components/UserList';
import { SkeletonList } from '../components/SkeletonList';


export default () => {
  const itemsPerPage = 10;

  const isLoading = useSelector(state => state.user.loading)
  const users = useSelector(state => state.user.users)
  const page = useSelector(state => state.user.page)

  const dispatch = useDispatch()

  const handleChangePage = (event, page) => {
    dispatch(fetchUsers(page, itemsPerPage))
  }

  useEffect(() => {
    dispatch(fetchUsers(page, itemsPerPage))
  }, [])

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
            {isLoading ? <SkeletonList rows={users} /> : <UserList rows={users} />}
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
