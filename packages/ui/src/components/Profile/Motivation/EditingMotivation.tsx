import { memo } from 'react'

import { Button, TextField } from '@mui/material'

import { COLORS } from '../../../constatnts/colors'
import Small from '../../Typography/Small'

import { useEditingMotivation } from './useEditingMotivation'

export default memo(function EditingMotivation() {
  const { handleSubmit, onSubmit, register } = useEditingMotivation()
  return (
    <div className="flex w-full flex-col flex-grow bg-white border border-mainBorder rounded-25px p-7">
      <Small color={COLORS.menuFont}>
        Ваші цілі, дедлайн та інші побажання
      </Small>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          multiline
          sx={{
            height: '200px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                height: '200px',
              },
            },
          }}
          {...register('motivation')}
        />
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
