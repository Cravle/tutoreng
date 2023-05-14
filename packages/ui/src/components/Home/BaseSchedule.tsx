import { memo } from 'react'

import { useParams } from 'react-router-dom'

import useUserStore from '../../stores/user.store'
import CreateEventModal from '../Modals/CreateEventModal/CreateEventModal'
import AddNewButton from '../NewEventButton/AddNewButton'
import TimeTable from '../TimeTable'
import Heading from '../Typography/Heading'

import { useBaseSchedule } from './useBaseSchedule'

export default memo(function BaseSchedule() {
  const { userId } = useParams()
  const currentUser = useUserStore((store) => store.user)

  const { openEventModal, setOpenEventModal, user } = useBaseSchedule(userId)
  return (
    <div className={'w-full px-7 py-4 flex'}>
      <div className="w-4/5 mr-7 flex flex-col">
        <div className="mb-5">
          <Heading>
            Графік занять{' '}
            {user ? `${user.role} ${user.name} ${user.surname} ` : ''}
          </Heading>
        </div>
        <TimeTable
          handleOpenEventModal={() => setOpenEventModal(true)}
          owner={user}
        />
      </div>

      {currentUser.role !== 'STUDENT' && (
        <div className="w-1/5 h-full flex flex-col">
          <div className="mb-5">
            <Heading>Нова подія</Heading>
          </div>
          <AddNewButton
            onClick={() => setOpenEventModal(true)}
            title="Створити заняття"
            disabled={!!userId}
          />

          {/* <Students /> */}
        </div>
      )}

      {openEventModal && (
        <CreateEventModal
          open={openEventModal}
          handleClose={() => setOpenEventModal(false)}
        />
      )}
    </div>
  )
})
