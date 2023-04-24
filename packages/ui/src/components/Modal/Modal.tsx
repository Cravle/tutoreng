import { memo } from 'react'

import { createPortal } from 'react-dom'

export default memo(function Modal({
  children,
}: {
  children: React.ReactNode
}) {
  return createPortal(
    <div
      className={
        'fixed inset-0 bg-black bg-opacity-50 h-screen w-screen flex justify-center'
      }
    >
      <div className={'p-4 mx-auto my-auto bg-white '}>{children}</div>
    </div>,
    document.body,
  )
})
