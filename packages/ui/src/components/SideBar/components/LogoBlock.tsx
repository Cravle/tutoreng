import { memo } from 'react'

import Logo from '../../Icons/Logo'
import LogoSmall from '../../Icons/LogoSmall'

type Props = {
  collapsed?: boolean
}

export default memo(function LogoBlock({ collapsed }: Props) {
  return (
    <>
      {collapsed ? (
        <div className="flex justify-center align-middle mt-10  ">
          <LogoSmall />
        </div>
      ) : (
        <div className="mt-10 px-4">
          <Logo />
        </div>
      )}
    </>
  )
})
