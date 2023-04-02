import type { UserResponseType } from '../userResponseType'
import type { UserCreateDto } from '../user.create.dto'

export interface UpdateUserRequest extends Partial<UserCreateDto> {}

export interface UpdateUserResponse {
  user: UserResponseType
}
