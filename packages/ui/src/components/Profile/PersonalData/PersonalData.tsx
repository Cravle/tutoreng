import { memo } from 'react'

import { MuiTelInput } from 'mui-tel-input'

import BigAvatarPlaceHolder from '../../../assets/BigAvatarPlaceHolder.png'
import { COLORS } from '../../../constatnts/colors'
import useUserStore from '../../../stores/user.store'
import ChoseButton from '../../ChoseButton/ChoseButton'
import Small from '../../Typography/Small'

export default memo(function PersonalData() {
  const user = useUserStore((state) => state.user)
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
        <div className="mt-5">{user.name}</div>
      </div>

      <div className="mt-7">
        <div>
          <Small color={COLORS.menuFont} fontWeight="500">
            Призвіще
          </Small>
        </div>
        <div className="mt-5">{user.surname}</div>
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
            <ChoseButton active title={user.sex === 'MALE' ? 'Ч' : 'Ж'} />
          </div>
        </div>
        <div>
          {/* <div>
            <Small color={COLORS.menuFont} fontWeight="500">
              Дата народження
            </Small>
          </div> */}
          {/* <div className="mt-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker disabled value={user.date} />
            </LocalizationProvider>
          </div> */}
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
          <MuiTelInput
            value={user.mobileNumber}
            disabled
            sx={{
              border: 'none',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
            // onChange={field.onChange}
            defaultCountry="UA"
            // error={!!fieldState.error?.message}
            // helperText={fieldState.error?.message}
          />
        </div>
      </div>

      {/* email */}
      <div className="mt-7">
        <div>
          <Small color={COLORS.menuFont} fontWeight="500">
            Email
          </Small>
        </div>
        <div className="mt-2">{user.email}</div>
      </div>

      {/* time zone  */}
      {/* <div className="mt-7">
        <div>
          <Small color={COLORS.menuFont} fontWeight="500">
            Часовий пояс
          </Small>

          <div className="mt-2">UTC +2</div>
        </div>
      </div> */}
    </div>
  )
})
