import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Login />} />
      </Route>
    </Routes>
  )
}
