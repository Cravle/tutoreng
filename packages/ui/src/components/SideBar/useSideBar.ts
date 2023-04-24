import { useState } from 'react'

export const useSideBar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return {
    collapsed,
    handleCollapse,
  }
}
