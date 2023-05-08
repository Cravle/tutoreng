import { memo } from 'react'

import { Controller } from 'react-hook-form'

import { Button } from '@mui/material'

import { COLORS } from '../../../constatnts/colors'
import { StyledInput } from '../../FormComponents/StyledInput/StyledInput'
import Small from '../../Typography/Small'

import { useEditingPasswords } from './useEditingPasswords'

export default memo(function EditingPasswords() {
  const { control, handleSubmit, onSubmit } = useEditingPasswords()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Small color={COLORS.menuFont}>Старий пароль</Small>

      <div className="mt-4 mb-4 w-full">
        <Controller
          name="oldPassword"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => {
            return (
              <StyledInput
                {...field}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )
          }}
        />
      </div>

      <Small color={COLORS.menuFont}>Новий пароль</Small>

      <div className="mt-4 mb-4 w-full">
        <Controller
          name="newPassword"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => {
            return (
              <StyledInput
                {...field}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )
          }}
        />
      </div>
      <Small color={COLORS.menuFont}>Повторіть новий пароль</Small>

      <div className="mt-4 mb-4 w-full">
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => {
            return (
              <StyledInput
                {...field}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )
          }}
        />
      </div>
      <div className="flex items-center justify-center w-full mt-8">
        <div className="w-44">
          <Button variant="contained" type="submit" fullWidth>
            Зберегти
          </Button>
        </div>
      </div>
    </form>
  )
})
