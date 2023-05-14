import { memo } from 'react'

import { Controller } from 'react-hook-form'

import styled from '@emotion/styled'
import {
  Button,
  FormControl,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

import { COLORS } from '../../../constatnts/colors'
import CloseModal from '../../Icons/CloseModal'
import Medium from '../../Typography/Medium'
import Small from '../../Typography/Small'
import Title from '../../Typography/Title'

import HourPicker from './HourPicker'
import { useCreateEvent } from './useCreateEvent'

type CreateEventModalProps = {
  open: boolean
  handleClose: () => void
  defaultDate?: {
    day: Date
    startHour: string
    endHour: string
  }
}

export default memo(function CreateEventModal({
  handleClose,
  open,
}: CreateEventModalProps) {
  const {
    date,
    startHoursAndMnutes,
    endHoursAndMnutes,
    handleSubmit,
    onSubmit,
    control,
    handleClickOutside,
    students,
    potentioalOwners,
  } = useCreateEvent({ handleClose })
  console.log(event, 'event 41')
  return (
    <Modal
      title="Створити нову подію"
      onClose={handleClickOutside}
      open={open}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > div': {
          outline: 'none',
        },
      }}
    >
      <div
        className={`w-480 ${
          potentioalOwners ? 'h-[620px]' : 'h-[520px]'
        }  mx-auto my-auto `}
      >
        <div className="h-full bg-white rounded-25px">
          {/* header */}
          <div className={'p-4 border-b border-solid border-mainBorder'}>
            <div className="flex flex-row justify-between items-center">
              <Title>Створити нову подію</Title>
              <div onClick={handleClose}>
                <CloseModal />
              </div>
            </div>
          </div>
          {/* body */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="p-7">
              <div className="mb-2">
                <Small color={COLORS.menuFont}>Додати назву</Small>
              </div>
              {/* title */}
              <Controller
                name="title"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      variant="outlined"
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )
                }}
              />
              <div className="mb-2 mt-5">
                <Small color={COLORS.menuFont}>Посилання на урок</Small>
              </div>
              {/* call url */}
              <Controller
                name="callUrl"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      variant="outlined"
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )
                }}
              />

              {potentioalOwners && (
                <div className="mt-5">
                  <div className="mb-2">
                    <Small color={COLORS.menuFont}>Обрати вчителя</Small>
                  </div>
                  <Controller
                    name="owner"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => {
                      return (
                        <FormControl className="w-full">
                          <StyledSelect
                            labelId="selectStudent"
                            value={field.value}
                            onChange={field.onChange}
                          >
                            <DefaultMenutItem value="default" disabled>
                              Обрати вчителя
                            </DefaultMenutItem>

                            {potentioalOwners?.map((owner) => {
                              return (
                                <MenuItem value={owner.id}>
                                  {owner.name} {owner.surname}
                                </MenuItem>
                              )
                            })}
                          </StyledSelect>
                        </FormControl>
                      )
                    }}
                  />
                </div>
              )}

              {/* Student name */}
              <div className="mt-5">
                <div className="mb-2">
                  <Small color={COLORS.menuFont}>Обрати учня</Small>
                </div>
                <Controller
                  name="student"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => {
                    return (
                      <FormControl className="w-full">
                        <StyledSelect
                          labelId="selectStudent"
                          value={field.value}
                          onChange={field.onChange}
                        >
                          <DefaultMenutItem value="default" disabled>
                            Обрати імʼя учня
                          </DefaultMenutItem>

                          {students?.map((student) => {
                            return (
                              <MenuItem value={student.id}>
                                {student.name} {student.surname}
                              </MenuItem>
                            )
                          })}
                        </StyledSelect>
                      </FormControl>
                    )
                  }}
                />
              </div>

              {/* Date */}
              <div>
                <div className="mb-2 mt-5">
                  <Small color={COLORS.menuFont}>Дата та час</Small>
                </div>

                <div className="flex flex-row items-center w-full justify-between">
                  <div className="mr-3 w-52">
                    <Controller
                      name="date"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => {
                        return (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              defaultValue={dayjs(date)}
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </LocalizationProvider>
                        )
                      }}
                    />
                  </div>
                  <div className="w-24">
                    <Controller
                      name="startTime"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => {
                        return (
                          <FormControl className="w-full">
                            <HourPicker
                              defaultValue={startHoursAndMnutes}
                              field={field}
                            />
                          </FormControl>
                        )
                      }}
                    />
                  </div>

                  <div className="mx-2">
                    <Medium>-</Medium>
                  </div>
                  <div className="w-24">
                    <Controller
                      name="endTime"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => {
                        return (
                          <FormControl className="w-full">
                            <HourPicker
                              defaultValue={endHoursAndMnutes}
                              field={field}
                            />
                          </FormControl>
                        )
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* <div>
                <div className="mb-2 mt-5">
                  <Small color={COLORS.menuFont}>Обрати продукт</Small>
                </div>
                <Controller
                  name="product"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => {
                    return (
                      <div className="flex flex-row">
                        {PRODUCTS.map((product) => (
                          <StyledProduct
                            active={field.value === product}
                            key={product}
                            onClick={() => field.onChange(product)}
                          >
                            <Medium
                              color={field.value === product && COLORS.white}
                            >
                              {product}
                            </Medium>
                          </StyledProduct>
                        ))}
                      </div>
                    )
                  }}
                />
              </div> */}
            </div>
            <div className="w-full flex justify-center">
              <div>
                <Button variant="contained" type="submit">
                  Зберегти
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
})

const Input = styled(TextField)`
  width: 100%;
  border-radius: 8px;

  .MuiOutlinedInput-root {
    border-radius: 8px;
  }

  input {
    padding: 11px;
    height: 15px;
    font-size: 15px;
  }
`

const DefaultMenutItem = styled(MenuItem)`
  color: ${COLORS.menuFont};
`

const StyledSelect = styled(Select)`
  min-width: 100%;
  border-radius: 8px;

  .MuiSelect-select {
    padding: 12px 11px;
    min-height: 15px;
    border-radius: 8px;
    height: 16px;
  }
`

// const StyledProduct = styled.div<{ active: boolean }>`
//   padding: 6px;
//   border-radius: 8px;
//   margin-right: 12px;
//   cursor: pointer;

//   background: ${COLORS.menuBgHover};

//   ${({ active }) =>
//     active &&
//     css`
//       background: ${COLORS.primary};
//     `}
// `
