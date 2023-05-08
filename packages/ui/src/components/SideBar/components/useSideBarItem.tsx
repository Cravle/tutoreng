import { useLocation } from 'react-router-dom'

import { useCustomNavigate } from '../../../hooks/useCustomNavigate'
import type { ROUTE_TYPES } from '../../../Routes/routes'
import useUserStore from '../../../stores/user.store'
import { SIDEBAR_ITEMS_BY_ROLE } from '../constants'

export const useSideBarItem = () => {
  const navigate = useCustomNavigate()
  const location = useLocation()
  const user = useUserStore((state) => state.user)

  const menuItems = user ? SIDEBAR_ITEMS_BY_ROLE[user.role] : []

  const handleClick = (path: ROUTE_TYPES) => {
    navigate(path)
  }

  const isActive = (path: ROUTE_TYPES) => {
    return location.pathname === path
  }

  return {
    handleClick,
    isActive,
    menuItems,
  }
}
