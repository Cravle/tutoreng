import { Suspense } from 'react'

import { Navigate, useRoutes } from 'react-router-dom'

import { Layout } from '../components/Layout'
import { Home } from '../pages/Home'
import Profile from '../pages/Profile'
import Users from '../pages/Users/Users'

import { ROUTES } from './routes'
import { useAppRouting } from './useAppRouting'

export const ProtectedRouting = () => {
  useAppRouting()
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: '/profile',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: '/users',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Users />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to={ROUTES.HOME} />,
    },
  ])
  return routes
}
