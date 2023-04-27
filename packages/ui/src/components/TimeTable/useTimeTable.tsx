import { useState } from 'react'

import { TimeViews } from './interfaces'

export const useTimeTable = () => {
  const [currenView, setCurrentView] = useState<string>(TimeViews.week)

  const onCurrentViewNameChange = (view: string) => {
    setCurrentView(view)
  }

  const onCommitChanges = (props: any) => {
    console.log(props)
  }

  return {
    currenView,
    onCurrentViewNameChange,
    onCommitChanges,
  }
}
