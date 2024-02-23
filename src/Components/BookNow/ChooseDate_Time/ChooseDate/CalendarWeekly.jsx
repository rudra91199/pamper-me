import { addDays, format, getWeek, isSameDay, lastDayOfWeek, startOfWeek } from 'date-fns';
import React from 'react'

const CalendarWeekly = ({currentMonth, onDateClickHandle,selectedDate}) => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
  const currentDate = format(new Date(), "dd");


    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              isSameDay(day, new Date())
                ? `today ${isSameDay(day, selectedDate) && "selected"}`
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }
            ${
              getWeek(new Date()) == getWeek(day) &&
              parseInt(formattedDate) < parseInt(currentDate) &&
              "disable-date"
            }
            `}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      // setDaysForDisable(disableArray)

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

export default CalendarWeekly