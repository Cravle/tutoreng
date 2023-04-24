import { memo } from 'react'

import Arrow from '../Icons/Arrow'

export default memo(function ExpandButton() {
  return (
    <div className="rounded-full border border-mainBorder bg-menuBgHover flex justify-center align-middle w-fit p-1.5">
      <Arrow />
    </div>
  )
})
