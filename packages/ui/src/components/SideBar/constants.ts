import type { SVGProps } from 'react'

import { RoleEnum } from '@tutoreng/db'

import { ROUTE_TYPES, ROUTES } from '../../Routes/routes'
import BalanceIcon from '../Icons/BalanceIcon'
import CalendarIcon from '../Icons/CalendarIcon'
import HomeIcon from '../Icons/HomeIcon'
import SettingsIcon from '../Icons/SettingsIcon'
import UsercIcon from '../Icons/UsercIcon'

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
    path: ROUTES.PROFILE,
  },
]

export const SIDEBAR_ADMIN_ITEMS: SideItem[] = [
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
    Icon: UsercIcon,
    title: 'Користувачі',
    path: ROUTES.USERS,
  },
  {
    Icon: CalendarIcon,
    title: 'Календар',
    path: ROUTES.CALENDAR,
  },
  {
    Icon: SettingsIcon,
    title: 'Налаштування',
    path: ROUTES.PROFILE,
  },
]

export const SIDEBAR_TUTOR_ITEMS: SideItem[] = [
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
    Icon: UsercIcon,
    title: 'Користувачі',
    path: ROUTES.USERS,
  },
  {
    Icon: CalendarIcon,
    title: 'Календар',
    path: ROUTES.CALENDAR,
  },
  {
    Icon: SettingsIcon,
    title: 'Налаштування',
    path: ROUTES.PROFILE,
  },
]

export const SIDEBAR_ITEMS_BY_ROLE = {
  [RoleEnum.ADMIN]: SIDEBAR_ADMIN_ITEMS,
  [RoleEnum.TUTOR]: SIDEBAR_TUTOR_ITEMS,
  [RoleEnum.STUDENT]: SIDEBAR_ITEMS,
}
