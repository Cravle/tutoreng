import { memo } from 'react'

import { Typography } from '@mui/material'

import CreateEventModal from '../CreateEventModal/CreateEventModal'
import TimeTable from '../TimeTable'

import useHome from './useHome'

export default memo(function Home() {
  const { openEventModal } = useHome()
  return (
    <div className={'w-full px-7 py-4 h-content'}>
      <div className="mb-5">
        <Typography fontSize={20} lineHeight={'24px'} fontWeight={700}>
          Графік занять
        </Typography>
      </div>
      <TimeTable />
      {openEventModal && <CreateEventModal />}
    </div>
  )
})
