import type { UserResponseType } from 'src/user/userResponseType'

export interface FindUserRequest {}

export interface FindUserResponse {
  user: UserResponseType
}
