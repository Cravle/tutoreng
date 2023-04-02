import { memo } from 'react'

import { ViewState } from '@devexpress/dx-react-scheduler'
import {
  Appointments,
  DayView,
  MonthView,
  Scheduler,
  Toolbar,
  ViewSwitcher,
  WeekView,
} from '@devexpress/dx-react-scheduler-material-ui'
import { Paper } from '@mui/material'

import { appointments } from './mock'
import { useTimeTable } from './useTimeTable'

export default memo(function TimeTable() {
  const { currenView, onCurrentViewNameChange } = useTimeTable()
  return (
    <div className={'w-full pb-16'}>
      <Paper>
        <Scheduler data={appointments} height={1000}>
          <ViewState
            defaultCurrentDate="2018-07-25"
            onCurrentViewNameChange={onCurrentViewNameChange}
            currentViewName={currenView}
          />
          <WeekView
            name={'week'}
            displayName={'Week'}
            startDayHour={6}
            endDayHour={23}
          />
          <MonthView />
          <DayView />
          <Toolbar />
          <ViewSwitcher />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  )
})
