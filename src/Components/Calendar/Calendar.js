import React from 'react';
import './calendar.css';

import { Scheduler, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
import { Day } from '@progress/kendo-date-math';

const Calendar = ({events}) => {
    return (
      <div className="Calendar">
          <Scheduler
            data={events}
            defaultView="week"
        >
            <MonthView />
            <WeekView workWeekStart={Day.Monday} workWeekEnd={Day.Friday}/>
            <DayView startTime="09:00" endTime="18:00"/>
        </Scheduler>
      </div>
    );
  }
  export default Calendar;