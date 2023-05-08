import React, { memo } from 'react'

import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import useNotificationStore from '../../stores/notifications.store'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default memo(function Notifications() {
  const { notifications, removeNotification } = useNotificationStore(
    (state) => state,
  )

  return (
    <>
      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          open
          onClose={() => removeNotification(notification.id)}
          message={notification.message}
        >
          <Alert severity={notification.variant}>{notification.message}</Alert>
        </Snackbar>
      ))}
    </>
  )
})
