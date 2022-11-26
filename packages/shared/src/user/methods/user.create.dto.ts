import type { RoleEnum } from '@tutoreng/db/src'
import type { UserResponseType } from 'src/user/userResponseType'

export interface CreateUserRequest {
  email: string

  name: string

  password: string

  role: RoleEnum
}

export interface CreateUserResponse {
  user: UserResponseType
}
