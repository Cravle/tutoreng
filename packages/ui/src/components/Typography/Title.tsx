import { memo } from 'react'

import { Typography, TypographyProps } from './Typography'

export default memo(function Title({ color, children }: TypographyProps) {
  return (
    <Typography
      fontSize={'18px'}
      lineHeight={'21px'}
      fontWeight={'600'}
      color={color}
    >
      {children}
    </Typography>
  )
})
