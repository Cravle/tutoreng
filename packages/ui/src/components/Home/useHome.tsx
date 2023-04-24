import { useState } from 'react'

const useHome = () => {
  const [openEventModal, setOpenEventModal] = useState<boolean>(false)

  return {
    openEventModal,
    setOpenEventModal,
  }
}

export default useHome
