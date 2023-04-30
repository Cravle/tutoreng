import { memo } from 'react'

import { COLORS } from '../../constatnts/colors'

import { Typography, TypographyProps } from './Typography'

export default memo(function Small({ color, children }: TypographyProps) {
  return (
    <Typography
      fontSize={'12px'}
      lineHeight={'14px'}
      fontWeight={'400'}
      color={COLORS[color as keyof typeof COLORS] || color}
    >
      {children}
    </Typography>
  )
})
