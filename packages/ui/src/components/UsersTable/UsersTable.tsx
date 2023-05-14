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

import { COLORS } from '../../constatnts/colors'
import Small from '../Typography/Small'

import { useUserTable } from './useUserTable'

type UsersTableProps = {
  users: UserResponseType[]
}

export default memo(function UsersTable({ users }: UsersTableProps) {
  const { handleGoToSchedule, handleGoToProfile } = useUserTable()
  if (!users) return null

  return (
    <div className="w-full">
      <TableContainer component={Paper} className="w-full">
        <Table sx={{ minWidth: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Імʼя</TableCell>
              <TableCell align="right">Роль</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Номер телефону</TableCell>
              <TableCell align="right">Telegram</TableCell>
              <TableCell align="right">Розклад</TableCell>
              <TableCell align="right">Профіль</TableCell>
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
                <TableCell align="right">
                  <div
                    onClick={() => handleGoToSchedule(row.id)}
                    className="cursor-pointer"
                  >
                    <Small color={COLORS.button}>до розкладу</Small>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div
                    onClick={() => handleGoToProfile(row.id)}
                    className="cursor-pointer"
                  >
                    <Small color={COLORS.button}>до профілю</Small>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
})
