import { memo } from 'react'

import { Button } from '@mui/material'

import Contacts from '../../components/Profile/Contacts'
import PersonalData from '../../components/Profile/PersonalData'
import Heading from '../../components/Typography/Heading'
import Small from '../../components/Typography/Small'
import { COLORS } from '../../constatnts/colors'

export default memo(function ProfilePage() {
  return (
    <div className="h-full flex flex-row p-7 w-full">
      <div className="h-full w-1/3 mr-7 flex flex-col">
        <div className="mb-5">
          <Heading>Особисті дані</Heading>
        </div>
        <div className="flex w-full flex-grow bg-white border border-mainBorder rounded-25px p-7">
          <PersonalData />
        </div>
      </div>
      <div className="w-2/3 h-full box-border">
        <div className="h-1/2 flex flex-col pb-7">
          <div className="mb-5">
            <Heading>Контакти</Heading>
          </div>
          <div className="flex w-full flex-grow bg-white border border-mainBorder rounded-25px p-7">
            <Contacts />
          </div>
        </div>
        <div className="h-1/2 flex flex-col">
          <div className="flex flex-row gap-7 flex-grow">
            <div className="pb-7 flex flex-grow flex-col w-1/2">
              <div className="mb-5 mt-7">
                <Heading>Мета вивчення</Heading>
              </div>
              <div className="flex w-full flex-col flex-grow bg-white border border-mainBorder rounded-25px p-7">
                <Small color={COLORS.menuFont}>
                  Ваші цілі, дедлайн та інші побажання
                </Small>
                <div className="mt-5">
                  <Small color={COLORS.menuFont}>(пусто)</Small>
                </div>
              </div>
            </div>
            <div className="pb-7 flex flex-grow flex-col w-1/2">
              <div className="mb-5 mt-7">
                <Heading>Безпека</Heading>
              </div>
              <div className="flex w-full flex-grow bg-white border border-mainBorder rounded-25px p-7">
                <Small color={COLORS.menuFont}>Старий пароль</Small>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <div className="w-44">
              <Button variant="contained" fullWidth>
                Редагувати
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
