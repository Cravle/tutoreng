import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { fetchUsers } from '../../api/user'

export const useUsersPage = () => {
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false)

  const { data } = useQuery(['users'], () => fetchUsers(), {})
  console.log('users', data)
  const users = data?.data
  return {
    openCreateUserModal,
    setOpenCreateUserModal,
    users,
  }
}
