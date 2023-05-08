import { memo } from 'react'

import { Controller } from 'react-hook-form'

import { Button } from '@mui/material'

import { COLORS } from '../../../constatnts/colors'
import { StyledInput } from '../../FormComponents/StyledInput/StyledInput'
import Small from '../../Typography/Small'
import { SOCIAL_LINKS } from '../constants'

import { useEditingContact } from './useEditingContacts'

export default memo(function EditingContacts() {
  const { control, handleSubmit, onSubmit } = useEditingContact()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
      <div className="grid grid-cols-2 gap-4 w-full">
        {Object.entries(SOCIAL_LINKS).map(([key, value]) => {
          return (
            <div key={key} className="grid gap-4 w-full">
              <div>
                <div>
                  <Small color={COLORS.menuFont} fontWeight="500">
                    {value}
                  </Small>
                </div>

                <div className="mt-4 w-full">
                  <Controller
                    name={key as keyof typeof SOCIAL_LINKS}
                    control={control}
                    render={({ field }) => {
                      return <StyledInput {...field} fullWidth />
                    }}
                  />
                  {/* {MOCK_LINKS[key] ? (
                    <Medium>{MOCK_LINKS[key]}</Medium>
                  ) : (
                    <Medium color={COLORS.menuFont}>(пусто)</Medium>
                  )} */}
                </div>
              </div>
            </div>
          )
        })}
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
