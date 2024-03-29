import { memo } from 'react'

import type { UserResponseType } from '@tutoreng/shared/src'

import { COLORS } from '../../../constatnts/colors'
import useUserStore from '../../../stores/user.store'
import Medium from '../../Typography/Medium'
import Small from '../../Typography/Small'
import { SOCIAL_LINKS } from '../constants'

type ContactsProps = {
  pageOwner?: UserResponseType
}

export default memo(function Contacts({ pageOwner }: ContactsProps) {
  const currentUser = useUserStore((state) => state.user)
  const user = pageOwner || currentUser
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {Object.entries(SOCIAL_LINKS).map(([key, value]) => {
        return (
          <div key={key} className="grid  gap-4">
            <div>
              <div>
                <Small color={COLORS.menuFont} fontWeight="500">
                  {value}
                </Small>
              </div>

              <div className="mt-4">
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  user[key] ? ( // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    <Medium>{user[key]}</Medium>
                  ) : (
                    <Medium color={COLORS.menuFont}>(пусто)</Medium>
                  )
                }
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
})
