import { RoleEnum } from '@tutoreng/db'

export const getRoleItems: () => {
  label: string
  value: RoleEnum
}[] = () => {
  return Object.keys(RoleEnum).map((key) => {
    return {
      label: key,
      value: RoleEnum[key as keyof typeof RoleEnum],
    }
  })
}
