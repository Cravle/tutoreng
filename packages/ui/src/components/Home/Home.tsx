import { memo } from 'react'

import CreateEventModal from '../Modals/CreateEventModal/CreateEventModal'
import NewEvent from '../NewEventButton/NewEventButton'
import Students from '../Students/Students'
import TimeTable from '../TimeTable'
import Heading from '../Typography/Heading'

import useHome from './useHome'

export default memo(function Home() {
  const { openEventModal, setOpenEventModal } = useHome()
  return (
    <div className={'w-full px-7 py-4 flex'}>
      <div className="w-4/5 mr-7 flex flex-col">
        <div className="mb-5">
          <Heading>Графік занять</Heading>
        </div>
        <TimeTable handleOpenEventModal={() => setOpenEventModal(true)} />
      </div>

      <div className="w-1/5 h-full flex flex-col">
        <div className="mb-5">
          <Heading>Нова подія</Heading>
        </div>
        <NewEvent onClick={() => setOpenEventModal(true)} />

        <Students />
      </div>

      {openEventModal && (
        <CreateEventModal
          open={openEventModal}
          handleClose={() => setOpenEventModal(false)}
        />
      )}
    </div>
  )
})
