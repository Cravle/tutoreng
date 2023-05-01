import { memo } from 'react'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import TableContainer from '@mui/material/TableContainer'
import type { UserResponseType } from '@tutoreng/shared/src'

type UsersTableProps = {
  users: UserResponseType[]
}

export default memo(function UsersTable({ users }: UsersTableProps) {
  console.log(users, 'users table')

  if (!users) return null

  return (
    <div className="w-full">
      <TableContainer component={Paper} className="w-full">
        <Table sx={{ minWidth: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имʼя</TableCell>
              <TableCell align="right">Роль</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Номер телефону</TableCell>
              <TableCell align="right">Telegram</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.mobileNumber}</TableCell>
                <TableCell align="right">{row.telegram}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
})
