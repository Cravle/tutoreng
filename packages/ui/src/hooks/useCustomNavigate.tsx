import { NavigateOptions, useNavigate } from 'react-router-dom'

import type { ROUTE_TYPES } from '../Routes/routes'

export const useCustomNavigate = () => {
  const _navigate = useNavigate()

  const navigate = (path: ROUTE_TYPES, options?: NavigateOptions) =>
    _navigate(path, options)

  return navigate
}
