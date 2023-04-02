import useUserStore from '../stores/user.store'
import { ProtectedRouting } from './ProtectedRouting'
import UnAuthRoutes from './GusetsRouting'

export const AppRouting = () => {
  const user = true /* useUserStore((store) => store.user)*/

  return user ? <ProtectedRouting /> : <UnAuthRoutes />
}
