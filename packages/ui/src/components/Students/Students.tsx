import { memo } from 'react'

import Heading from '../Typography/Heading'

export default memo(function Students() {
  return (
    <div className="mt-7 flex flex-col flex-grow">
      <div className="mb-5">
        <Heading>Студенти</Heading>
      </div>
      <div className="bg-white border border-mainBorder p-7 flex flex-grow flex-col rounded-25px"></div>
    </div>
  )
})
