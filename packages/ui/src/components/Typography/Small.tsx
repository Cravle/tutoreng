import { memo } from 'react'

import { Typography, TypographyProps } from './Typography'

export default memo(function Small({ color, children }: TypographyProps) {
  return (
    <Typography
      fontSize={'12px'}
      lineHeight={'14px'}
      fontWeight={'400'}
      color={color}
    >
      {children}
    </Typography>
  )
})
