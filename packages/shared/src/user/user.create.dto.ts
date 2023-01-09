import type { User, RoleEnum } from '@tutoreng/db/src'
import type { UserResponseType } from 'src/user/userResponseType'

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
