import { memo } from 'react'

import CreateNewUserModal from '../../components/Modals/CreateUserModal/CreateNewUserModal'
import AddNewButton from '../../components/NewEventButton/AddNewButton'
import Heading from '../../components/Typography/Heading'
import UsersTable from '../../components/UsersTable/UsersTable'

import { useUsersPage } from './useUsersPage'

export default memo(function UsersPage() {
  const { openCreateUserModal, users, setOpenCreateUserModal } = useUsersPage()
  return (
    <>
      <div className="h-full flex flex-row p-7 w-full">
        <div className="w-3/4 h-full mr-7 flex flex-col">
          <div className="mb-5">
            <Heading>Користувачі</Heading>
          </div>
          <div className="flex w-full flex-grow bg-white border border-mainBorder rounded-25px p-7">
            <UsersTable users={users} />
          </div>
        </div>
        <div className="w-1/4">
          <div className="mb-5">
            <Heading>Створити нового користувача</Heading>
          </div>
          <div className="flex w-full ">
            <AddNewButton
              onClick={() => setOpenCreateUserModal(true)}
              title="Новий користувач"
            />
          </div>
        </div>
      </div>

      <CreateNewUserModal
        open={openCreateUserModal}
        handleClose={() => setOpenCreateUserModal(false)}
      />
    </>
  )
})
