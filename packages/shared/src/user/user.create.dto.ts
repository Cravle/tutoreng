import type { RoleEnum, User } from '@tutoreng/db/src'

import type { UserResponseType } from './userResponseType'

export interface UserCreateDto extends Partial<User> {
  name: string
  surname: string
  email: string
  mobileNumber: string
  password: string
  role: RoleEnum
}

export interface CreateUserResponse {
  user: UserResponseType
}
