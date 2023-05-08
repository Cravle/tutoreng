import { memo } from 'react'

import { COLORS } from '../../../constatnts/colors'
import useUserStore from '../../../stores/user.store'
import Medium from '../../Typography/Medium'
import Small from '../../Typography/Small'

export default memo(function Motivation() {
  const user = useUserStore((state) => state.user)
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
