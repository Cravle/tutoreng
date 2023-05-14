import { memo } from 'react'

import Heading from '../Typography/Heading'

export default memo(function PaymentStatistics() {
  return (
    <div className="w-full flex flex-col h-full ">
      <div className="pb-5">
        <Heading>Статистика</Heading>
      </div>
      <div className="p-7 w-full flex flex-col flex-grow bg-white rounded-[25px] align-middle h-full">
        <div className="w-full flex justify-center items-center h-full">
          <Heading>За данним аккаунтом не найдено статистики платежів</Heading>
        </div>
      </div>
    </div>
  )
})
