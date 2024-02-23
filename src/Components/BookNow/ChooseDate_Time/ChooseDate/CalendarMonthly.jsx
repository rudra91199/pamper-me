import {
    addDays,
  eachDayOfInterval,
  format,
  getMonth,
  getWeek,
  isSameDay,
  isSameMonth,
  lastDayOfMonth,
  lastDayOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import React, { useState } from "react";

const CalendarMonthly = ({ selectedDate, onDateClickHandle, currentMonth }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const current_Date = format(new Date(), "dd");
  const firstDay = startOfMonth(currentMonth);
  const lastDay = lastDayOfMonth(currentMonth);
  const startDate = addDays(startOfWeek(firstDay),1);
  const endDate = addDays(lastDayOfWeek(lastDay),1);
  const totalDays = eachDayOfInterval({ start: startDate, end: endDate });
  return (
    <div className="body">
      <div className="row grid">
        {totalDays.map((date) => (
          <div
            className={`col cell ${
              isSameDay(date, new Date())
                ? `today ${isSameDay(date, selectedDate) && "selected"}`
                : isSameDay(date, selectedDate)
                ? "selected"
                : ""
            }
            ${
              !isSameMonth(date, currentMonth) &&
              "disable-date"
            }
            ${
                getMonth(new Date()) == getMonth(date) &&
              parseInt(format(date, "d")) < parseInt(current_Date) &&
              "disable-date"
            }
            `}
            key={date}
            onClick={() => {
              const cloneDay = date;
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="number">{format(date, "d")}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarMonthly;
