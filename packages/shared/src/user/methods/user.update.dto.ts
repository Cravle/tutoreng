import type { UserResponseType } from 'src/user/userResponseType'
import type { UserCreateDto } from 'src/user/user.create.dto'

export interface UpdateUserRequest extends Partial<UserCreateDto> {}

export interface UpdateUserResponse {
  user: UserResponseType
}
