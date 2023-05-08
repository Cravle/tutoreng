import { memo } from 'react'

import { COLORS } from '../../../constatnts/colors'
import { StyledInput } from '../../FormComponents/StyledInput/StyledInput'
import Small from '../../Typography/Small'

export default memo(function Passwords() {
  return (
    <div>
      <Small color={COLORS.menuFont}>Старий пароль</Small>

      <div className="mt-4 mb-4 w-full">
        <StyledInput fullWidth disabled />
      </div>

      <Small color={COLORS.menuFont}>Новий пароль</Small>

      <div className="mt-4 mb-4 w-full">
        <StyledInput fullWidth disabled />
      </div>
      <Small color={COLORS.menuFont}>Повторіть новий пароль</Small>

      <div className="mt-4 mb-4 w-full">
        <StyledInput fullWidth disabled />
      </div>
    </div>
  )
})
