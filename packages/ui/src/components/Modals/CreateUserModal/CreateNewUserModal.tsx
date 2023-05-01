import { memo } from 'react'

import { Controller } from 'react-hook-form'

import { Button, Modal } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'

import { COLORS } from '../../../constatnts/colors'
import { StyledInput } from '../../FormComponents/StyledInput/StyledInput'
import StyledSelect from '../../FormComponents/StyledSelect/StyledSelect'
import CloseModal from '../../Icons/CloseModal'
import Small from '../../Typography/Small'
import Title from '../../Typography/Title'

import { getRoleItems } from './constants'
import { useCreateUserModal } from './userCreateUserModal'

type CreateNewUserModalProps = {
  open: boolean
  handleClose: () => void
}

export default memo(function CreateNewUserModal({
  open,
  handleClose,
}: CreateNewUserModalProps) {
  const { control, handleClickOutside, handleSubmit, onSubmit } =
    useCreateUserModal({ handleClose })
  return (
    <Modal
      onClose={handleClickOutside}
      open={open}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="w-480 h-[700px] mx-auto my-auto ">
        <div className="h-full bg-white rounded-25px">
          {/* header */}
          <div className={'p-4 border-b border-solid border-mainBorder'}>
            <div className="flex flex-row justify-between items-center">
              <Title>Створення нового користувача</Title>
              <div onClick={handleClose}>
                <CloseModal />
              </div>
            </div>
          </div>
          {/* body */}
          <form
            className="w-full"
            onSubmit={
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              handleSubmit(onSubmit)
            }
          >
            <div className="p-7">
              <div className="mb-2">
                <Small color={COLORS.menuFont}>Імʼя</Small>
              </div>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  return (
                    <StyledInput
                      variant="outlined"
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )
                }}
              />

              <div className="mb-2 mt-2">
                <Small color={COLORS.menuFont}>Фамілія</Small>
              </div>
              <Controller
                name="surname"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  return (
                    <StyledInput
                      variant="outlined"
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )
                }}
              />

              {/* nickname */}
              <div className="mt-4 mb-2">
                <Small color={COLORS.menuFont}>Позивний</Small>
              </div>
              <Controller
                name="nickname"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  return (
                    <StyledInput
                      variant="outlined"
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )
                }}
              />

              {/* email */}
              <div className="mt-4 mb-2">
                <Small color={COLORS.menuFont}>Email</Small>
              </div>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  return (
                    <StyledInput
                      variant="outlined"
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )
                }}
              />

              {/* telegram */}
              <div className="mt-4 mb-2">
                <Small color={COLORS.menuFont}>Telegram</Small>
              </div>
              <Controller
                name="telegram"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  return (
                    <StyledInput
                      variant="outlined"
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )
                }}
              />

              {/* role */}
              <div className="mt-4 mb-2">
                <Small color={COLORS.menuFont}>Роль</Small>
              </div>

              <Controller
                name="role"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  return <StyledSelect field={field} items={getRoleItems()} />
                }}
              />

              <div className="mt-4 mb-2">
                <Small color={COLORS.menuFont}>Номер телефону</Small>
              </div>
              <Controller
                name="mobileNumber"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  return (
                    <MuiTelInput
                      value={field.value}
                      onChange={field.onChange}
                      defaultCountry="UA"
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="w-full flex justify-center">
              <div>
                <Button variant="contained" type="submit">
                  Створити
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
})
