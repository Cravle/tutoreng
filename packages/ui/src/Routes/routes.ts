export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  PAYMENTS: '/payments',
  CALENDAR: '/calendar',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  USERS: '/users',
} as const

export type ROUTE_TYPES = (typeof ROUTES)[keyof typeof ROUTES]
