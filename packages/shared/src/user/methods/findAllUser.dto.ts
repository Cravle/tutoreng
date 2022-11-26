import type { UserResponseType } from '../userResponseType'

export interface FindAllUserRequest {}

export interface FindAllUserResponse {
  data: UserResponseType[]
}
