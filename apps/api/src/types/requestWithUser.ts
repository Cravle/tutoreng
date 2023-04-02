import type { Request } from 'express';
import type { User } from '@tutoreng/db/src';

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;
