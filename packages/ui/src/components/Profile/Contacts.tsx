import { memo } from 'react'

import { COLORS } from '../../constatnts/colors'
import Medium from '../Typography/Medium'
import Small from '../Typography/Small'

import { SOCIAL_LINKS } from './constants'
import { MOCK_LINKS } from './mock'

export default memo(function Contacts() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(SOCIAL_LINKS).map(([key, value]) => {
        return (
          <div key={key} className="grid grid-cols-3 gap-4">
            <div>
              <div>
                <Small color={COLORS.menuFont} fontWeight="500">
                  {value}
                </Small>
              </div>

              <div className="mt-4">
                {MOCK_LINKS[key] ? (
                  <Medium>{MOCK_LINKS[key]}</Medium>
                ) : (
                  <Medium color={COLORS.menuFont}>(пусто)</Medium>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
})
