import UnAuthRoutes from './GusetsRouting'
import { ProtectedRouting } from './ProtectedRouting'
import { useAppRouting } from './useAppRouting'

export const AppRouting = () => {
  const { isAuth, isLoading } = useAppRouting()

  if (isLoading) {
    return <div>loading...</div>
  }

  return isAuth ? <ProtectedRouting /> : <UnAuthRoutes />
}
