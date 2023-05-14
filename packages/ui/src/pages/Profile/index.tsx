import { memo } from 'react'

import { Button } from '@mui/material'

import Contacts from '../../components/Profile/Contacts/Contacts'
import EditingContacts from '../../components/Profile/Contacts/EditingContacts'
import EditingMotivation from '../../components/Profile/Motivation/EditingMotivation'
import Motivation from '../../components/Profile/Motivation/Motivation'
import EditingPasswords from '../../components/Profile/Passwords/EditingPasswords'
import Passwords from '../../components/Profile/Passwords/Passwords'
import EditingPersonalData from '../../components/Profile/PersonalData/EditingPersonalData'
import PersonalData from '../../components/Profile/PersonalData/PersonalData'
import Heading from '../../components/Typography/Heading'
import useProfilePageStore from '../../stores/profilePage.store'

import { useProfile } from './useProfile'

export default memo(function ProfilePage() {
  const { isEditing, setIsEditing } = useProfilePageStore((store) => store)
  const { pageOwnerData } = useProfile()
  console.log(pageOwnerData, 'pageOwner')
  return (
    <div className="h-full flex flex-row p-7 w-full">
      <div className="h-full w-1/3 mr-7 flex flex-col">
        <div className="mb-5">
          <Heading>Особисті дані</Heading>
        </div>
        <div className="flex w-full flex-grow bg-white border border-mainBorder rounded-25px p-7">
          {isEditing ? (
            <EditingPersonalData pageOwner={pageOwnerData} />
          ) : (
            <PersonalData pageOwner={pageOwnerData} />
          )}
        </div>
      </div>
      <div className="w-2/3 h-full box-border">
        <div className="h-1/2 flex flex-col pb-7">
          <div className="mb-5">
            <Heading>Контакти</Heading>
          </div>
          <div className="flex w-full flex-grow bg-white border border-mainBorder rounded-25px p-7">
            {isEditing ? (
              <EditingContacts pageOwner={pageOwnerData} />
            ) : (
              <Contacts pageOwner={pageOwnerData} />
            )}
          </div>
        </div>
        <div className="h-1/2 flex flex-col">
          <div className="flex flex-row gap-7 flex-grow">
            <div className="pb-3 flex flex-grow flex-col w-1/2">
              <div className="mb-5 mt-7">
                <Heading>Мета вивчення</Heading>
              </div>
              {isEditing ? (
                <EditingMotivation pageOwner={pageOwnerData} />
              ) : (
                <Motivation pageOwner={pageOwnerData} />
              )}
            </div>
            {!pageOwnerData && (
              <div className="pb-3 flex flex-grow flex-col w-1/2">
                <div className="mb-5 mt-7">
                  <Heading>Безпека</Heading>
                </div>
                <div className="flex w-full flex-col flex-grow bg-white border border-mainBorder rounded-25px p-7">
                  {isEditing ? <EditingPasswords /> : <Passwords />}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center w-full ">
            <div className="w-44">
              <Button
                variant="contained"
                fullWidth
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Назад' : 'Редагувати'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
