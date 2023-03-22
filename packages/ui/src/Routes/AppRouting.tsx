import useUserStore from '../stores/user.store'
import { ProtectedRouting } from './ProtectedRouting'
import UnAuthRoutes from './GusetsRouting'

export const AppRouting = () => {
  const user = useUserStore((store) => store.user)

  console.log(user, 'user')

  return user ? <ProtectedRouting /> : <UnAuthRoutes />
}
