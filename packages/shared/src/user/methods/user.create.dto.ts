import type { User } from '@tutoreng/db/src'
import type { UserResponseType } from 'src/user/userResponseType'

export interface CreateUserRequest extends Partial<User> {
}

export interface CreateUserResponse {
  user: UserResponseType
}
