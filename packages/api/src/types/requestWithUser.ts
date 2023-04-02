import { User } from '@tutoreng/db/src'
import type { Request } from 'express'

interface RequestWithUser extends Request {
  user: User
}

export default RequestWithUser
