import { memo } from 'react'

import type { UserResponseType } from '@tutoreng/shared/src'

type UsersTableProps = {
  users: UserResponseType[]
}

export default memo(function UsersTable({ users }: UsersTableProps) {
  console.log(users, 'users table')
  return <div>users table</div>
})
