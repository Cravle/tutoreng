import { memo } from 'react'

import type { UserResponseType } from '@tutoreng/shared/src'

import { COLORS } from '../../../constatnts/colors'
import useUserStore from '../../../stores/user.store'
import Medium from '../../Typography/Medium'
import Small from '../../Typography/Small'

type MotivationProps = {
  pageOwner?: UserResponseType
}

export default memo(function Motivation({ pageOwner }: MotivationProps) {
  const currentUser = useUserStore((state) => state.user)
  const user = pageOwner || currentUser
  return (
    <div className="flex w-full flex-col flex-grow bg-white border border-mainBorder rounded-25px p-7">
      <Small color={COLORS.menuFont}>
        Ваші цілі, дедлайн та інші побажання
      </Small>
      <div className="mt-5">
        {user?.motivation ? (
          <Medium>{user?.motivation}</Medium>
        ) : (
          <Small color={COLORS.menuFont}>(пусто)</Small>
        )}
      </div>
    </div>
  )
})
