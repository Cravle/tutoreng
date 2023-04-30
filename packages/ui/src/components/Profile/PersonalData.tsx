import { memo } from 'react'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import BigAvatarPlaceHolder from '../../assets/BigAvatarPlaceHolder.png'
import { COLORS } from '../../constatnts/colors'
import Small from '../Typography/Small'

export default memo(function PersonalData() {
  return (
    <div className="w-full">
      <div className=" w-full flex items-center justify-center">
        <img src={BigAvatarPlaceHolder} alt="avatar" />
      </div>

      <div className="mt-7">
        <div>
          <Small color={COLORS.menuFont} fontWeight="500">
            Імʼя
          </Small>
        </div>
        <div className="mt-5">Влад</div>
      </div>

      <div className="mt-7">
        <div>
          <Small color={COLORS.menuFont} fontWeight="500">
            Призвіще
          </Small>
        </div>
        <div className="mt-5">Лобода</div>
      </div>

      {/* стать та дата */}
      <div className="w-full flex flex-row align-middle justify-between mt-7">
        <div>
          <div>
            <Small color={COLORS.menuFont} fontWeight="500">
              Стать
            </Small>
          </div>
          <div className="gap-3 flex flex-row mt-2">
            <div>Ч</div>
            <div>Ж</div>
          </div>
        </div>
        <div>
          <div>
            <Small color={COLORS.menuFont} fontWeight="500">
              Дата народження
            </Small>
          </div>
          <div className="mt-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      {/* телефон */}

      <div className="mt-7">
        <div>
          <Small color={COLORS.menuFont} fontWeight="500">
            Телефон
          </Small>
        </div>
        <div className="mt-2">
          <div>+380 99 999 99 99</div>
        </div>
      </div>

      {/* email */}
      <div className="mt-7">
        <div>
          <Small color={COLORS.menuFont} fontWeight="500">
            Email
          </Small>
        </div>
        <div className="mt-2">example@gmail.com</div>
      </div>

      {/* time zone  */}
      <div className="mt-7">
        <div>
          <Small color={COLORS.menuFont} fontWeight="500">
            Часовий пояс
          </Small>

          <div className="mt-2">UTC +2</div>
        </div>
      </div>
    </div>
  )
})
