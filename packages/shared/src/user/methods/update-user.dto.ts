import type { UserResponseType } from 'src/user/userResponseType'
import type { CreateUserRequest } from 'src/user/methods/user.create.dto'

export interface UpdateUserRequest extends Partial<CreateUserRequest> {}

export interface UpdateUserResponse {
  user: UserResponseType
}
