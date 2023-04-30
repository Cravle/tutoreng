import { memo } from 'react'

import styled from '@emotion/styled'
import { FormControl, MenuItem, Select } from '@mui/material'

type Field = {
  value: string
  onChange: (e: any) => void
}

type StyledSelectProps<T> = {
  field: T
  items: {
    value: string
    label: string
  }[]
}

export default memo(function StyledSelect<T extends Field>({
  field,
  items,
}: StyledSelectProps<T>) {
  return (
    <FormControl className="w-full">
      <SSelect
        labelId="selectStudent"
        defaultValue={'default'}
        value={field.value}
        onChange={field.onChange}
      >
        {items.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </SSelect>
    </FormControl>
  )
})

const SSelect = styled(Select)`
  min-width: 100%;
  border-radius: 8px;

  .MuiSelect-select {
    padding: 12px 11px;
    min-height: 15px;
    border-radius: 8px;
    height: 16px;
  }
`
