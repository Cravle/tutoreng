import UnAuthRoutes from './GusetsRouting'
import { ProtectedRouting } from './ProtectedRouting'

export const AppRouting = () => {
  const user = true /* useUserStore((store) => store.user)*/

  return user ? <ProtectedRouting /> : <UnAuthRoutes />
}
