import { Suspense } from 'react'

import { Navigate, useRoutes } from 'react-router-dom'

import { Layout } from '../components/Layout'
import { Home } from '../pages/Home'
import Profile from '../pages/Profile'

import { ROUTES } from './routes'

export const ProtectedRouting = () => {
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
      ],
    },
    {
      path: '*',
      element: <Navigate to={ROUTES.HOME} />,
    },
  ])
  return routes
}
