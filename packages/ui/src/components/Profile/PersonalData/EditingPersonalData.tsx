import { memo } from 'react'

import { Controller } from 'react-hook-form'

import { Button } from '@mui/material'
import { SexEnum } from '@tutoreng/db'
import { MuiTelInput } from 'mui-tel-input'

import BigAvatarPlaceHolder from '../../../assets/BigAvatarPlaceHolder.png'
import { COLORS } from '../../../constatnts/colors'
import ChoseButton from '../../ChoseButton/ChoseButton'
import { StyledInput } from '../../FormComponents/StyledInput/StyledInput'
import Small from '../../Typography/Small'

import { usePersonalData } from './usePersonalData'

export default memo(function EditingPersonalData() {
  const { control, handleSubmit, onSubmit } = usePersonalData()
  return (
    <div className="w-full">
      <div className=" w-full flex items-center justify-center">
        <img src={BigAvatarPlaceHolder} alt="avatar" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-7">
          <div>
            <Small color={COLORS.menuFont} fontWeight="500">
              Імʼя
            </Small>
          </div>
          <div className="mt-5">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return <StyledInput {...field} />
              }}
            />
          </div>
        </div>

        <div className="mt-7">
          <div>
            <Small color={COLORS.menuFont} fontWeight="500">
              Призвіще
            </Small>
          </div>
          <div className="mt-5">
            <Controller
              name="surname"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return <StyledInput {...field} />
              }}
            />
          </div>
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
              <Controller
                name="sex"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  console.log(field, 'field')
                  return (
                    <>
                      <ChoseButton
                        title="Ч"
                        active={field.value === SexEnum.MALE}
                        onClick={() => field.onChange(SexEnum.MALE)}
                      />
                      <ChoseButton
                        title="Ж"
                        active={field.value === SexEnum.FEMALE}
                        onClick={() => field.onChange(SexEnum.FEMALE)}
                      />
                    </>
                  )
                }}
              />
            </div>
          </div>
          {/* <div>
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
          </div> */}
        </div>
        {/* телефон */}

        <div className="mt-7">
          <div>
            <Small color={COLORS.menuFont} fontWeight="500">
              Телефон
            </Small>
          </div>
          <div className="mt-2">
            <Controller
              name="mobileNumber"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => {
                return (
                  <div>
                    <MuiTelInput
                      value={field.value}
                      onChange={field.onChange}
                      defaultCountry="UA"
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  </div>
                )
              }}
            />
          </div>
        </div>

        {/* email */}
        <div className="mt-7">
          <div>
            <Small color={COLORS.menuFont} fontWeight="500">
              Email (після зміни потрібно ще раз залогінитись)
            </Small>
          </div>
          <div className="mt-2">
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => {
                return (
                  <StyledInput
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )
              }}
            />
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

        <div className="flex items-center justify-center w-full mt-8">
          <div className="w-44">
            <Button variant="contained" type="submit" fullWidth>
              Зберегти
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
})
