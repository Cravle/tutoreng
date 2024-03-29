import type { RoleEnum, User } from '@tutoreng/db'

import type { UserResponseType } from './userResponseType'

export interface UserCreateDto extends Partial<User> {
  name: string
  surname?: string
  email: string
  mobileNumber: string
  password: string
  nickname?: string
  role: RoleEnum
}

export interface CreateUserResponse {
  user: UserResponseType
}
