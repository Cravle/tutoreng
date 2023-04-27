import type { UserCreateDto } from 'src/user/user.create.dto'
import type { UserResponseType } from 'src/user/userResponseType'

export interface UpdateUserRequest extends Partial<UserCreateDto> {}

export interface UpdateUserResponse {
  user: UserResponseType
}
