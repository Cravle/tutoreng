import styled from '@emotion/styled'
import { TextField } from '@mui/material'

export const StyledInput = styled(TextField)`
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
