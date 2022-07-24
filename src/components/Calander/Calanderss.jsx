import React from 'react'
import {ScheduleComponent,ViewsDirective,ViewDirective,
Day,Week,WorkWeek,Month,Agenda,Inject,DragAndDrop,Resize} from '@syncfusion/ej2-react-schedule'

import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'

import { scheduleData } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'


const Calanderss = () => {
  const {currentMod}=useStateContext();
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10
    bg-white rounded-3xl dark:bg-main-dark-bg dark:text-gray-100'>
          <div className='mb-10 dark:bg-main-dark-bg dark:text-gray-100'>
        <p className='text-gray-400 dark:text-gray-100'>Page</p>
        <p className='text-3xl font-extrabold dark:text-gray-100
        tracking-tight text-slate-900'>Calander</p>
      </div>
      <ScheduleComponent 
     
      height="650px"
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2021,0,10)}>
          <Inject   services={[Day,
            Week,WorkWeek,Month,Agenda,
            Resize,DragAndDrop]} />
      </ScheduleComponent>
      
    </div>
  )
}

export default Calanderss
