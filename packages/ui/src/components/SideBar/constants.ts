import type { SVGProps } from 'react'

import { ROUTE_TYPES, ROUTES } from '../../Routes/routes'
import BalanceIcon from '../Icons/BalanceIcon'
import CalendarIcon from '../Icons/CalendarIcon'
import HomeIcon from '../Icons/HomeIcon'
import SettingsIcon from '../Icons/SettingsIcon'

export type SideItem = {
  Icon: React.FC<SVGProps<SVGSVGElement>>
  title: string
  path: ROUTE_TYPES
}

export const SIDEBAR_ITEMS: SideItem[] = [
  {
    Icon: HomeIcon,
    title: 'Головна',
    path: ROUTES.HOME,
  },
  {
    Icon: BalanceIcon,
    title: 'Баланс',
    path: ROUTES.BALANCE,
  },
  {
    Icon: CalendarIcon,
    title: 'Календар',
    path: ROUTES.CALENDAR,
  },
  {
    Icon: SettingsIcon,
    title: 'Налаштування',
    path: ROUTES.SETTINGS,
  },
]
