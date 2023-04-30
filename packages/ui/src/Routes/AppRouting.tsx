import UnAuthRoutes from './GusetsRouting'
import { ProtectedRouting } from './ProtectedRouting'
import { useAppRouting } from './useAppRouting'

export const AppRouting = () => {
  const user = useAppRouting()

  return user ? <ProtectedRouting /> : <UnAuthRoutes />
}
