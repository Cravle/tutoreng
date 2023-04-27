import { memo } from 'react'

import styled from '@emotion/styled'
import { MenuItem, Select } from '@mui/material'

function generateTimeArray(): string[] {
  const times: string[] = []
  for (let hour = 0; hour < 24; hour++) {
    const hourString: string = hour.toString().padStart(2, '0')
    for (let minute = 0; minute < 60; minute += 15) {
      const minuteString: string = minute.toString().padStart(2, '0')
      times.push(`${hourString}:${minuteString}`)
    }
  }
  return times
}

type HourPickerProps = {
  defaultValue?: string
  field: any
}

export default memo(function HourPicker({
  defaultValue,
  field,
}: HourPickerProps) {
  return (
    <StyledSelect
      labelId="selectStudent"
      defaultValue={defaultValue || '00:00'}
      MenuProps={{
        style: {
          maxHeight: 200,
        },
      }}
      value={field.value}
      onChange={field.onChange}
    >
      {generateTimeArray().map((time) => (
        <MenuItem value={time}>{time}</MenuItem>
      ))}
    </StyledSelect>
  )
})

const StyledSelect = styled(Select)`
  border-radius: 8px;
  max-height: 100px;

  .MuiSelect-select {
    padding: 12px 11px;
    min-height: 15px;
    border-radius: 8px;
    height: 16px;
  }
`
