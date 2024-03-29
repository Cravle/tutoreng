import { lazy, memo, Suspense } from 'react'

import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

import { ROUTES } from './routes'

const LoginPage = lazy(() => import('../pages/Login'))

const routes: RouteObject[] = [
  {
    children: [
      {
        path: '/login',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <Navigate to={ROUTES.LOGIN} />,
      },
    ],
  },
]

export default memo(function UnAuthRoutes() {
  const router = useRoutes(routes)
  return router
})
