import { useLocation } from 'react-router-dom'

import { useCustomNavigate } from '../../../hooks/useCustomNavigate'
import type { ROUTE_TYPES } from '../../../Routes/routes'

export const useSideBarItem = () => {
  const navigate = useCustomNavigate()
  const location = useLocation()

  const handleClick = (path: ROUTE_TYPES) => {
    navigate(path)
  }

  const isActive = (path: ROUTE_TYPES) => {
    return location.pathname === path
  }

  return {
    handleClick,
    isActive,
  }
}
