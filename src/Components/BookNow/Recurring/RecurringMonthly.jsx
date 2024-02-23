import React, { useContext, useEffect, useState } from "react";
import RepeatCounter from "./RepeatCounter";
import RepeatOccurrence from "./RepeatOccurrence";
import {
  addDays,
  addMonths,
  daysToWeeks,
  format,
  getDay,
  getMonth,
  getWeek,
  isSameMonth,
  startOfWeek,
  subDays,
} from "date-fns";
import { useLocation } from "react-router-dom";
import { Context } from "../../../Providers/PamperContext";

const RecurringMonthly = ({ counter, setCounter }) => {
  const [ recurringMonthType, setRecurringMonthType] = useState("date");
  const {allBookingDates,setAllBookingDates} = useContext(Context);
  const { date,time } = useLocation().state;
  const selectedDate = date.getDate();
  console.log();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weeks = ["first", "second", "third", "fourth", "last"];

  const selectedDayString = days.find((_, i) => getDay(date) == i);
  const weekOfMonth = weeks.find(
    (_, i) => Math.ceil(selectedDate / 7) == i + 1
  );

  useEffect(() => {
    const recurringNextDates = [{date,time}];
    
    for (let i = 0; i < counter.end; i++) {
    const nextRecurrMonth = addMonths(date, counter.repeat * (i + 1));
      if(recurringMonthType === "day"){
        let closestNextMonthDay = startOfWeek(nextRecurrMonth, {
          weekStartsOn: getDay(date),
        });
       
        closestNextMonthDay = 
        isSameMonth(addDays(closestNextMonthDay, 7),nextRecurrMonth)?
         addDays(closestNextMonthDay, 7): closestNextMonthDay;


        
        recurringNextDates.push({date:closestNextMonthDay,time});
      }
      else{
        recurringNextDates.push({date:nextRecurrMonth,time});
      }
    }
    setAllBookingDates(recurringNextDates);
  }, [counter,recurringMonthType]);
console.log(allBookingDates)
console.log(daysToWeeks(6))


  return (
    <>
      <RepeatCounter
        counter={counter}
        setCounter={setCounter}
        repeat={"month"}
      />
      <div className="recurring-monthly">
        <label htmlFor="repeat-seleted-date" onClick={() => setRecurringMonthType("date")}>
          <input
            defaultChecked
            type="radio"
            name="recurring"
            id="repeat-seleted-date"
          />
          Repeat on {selectedDate}th every month
        </label>
        <br />
        <label htmlFor="repeat-times" onClick={() => setRecurringMonthType("day")}>
          <input type="radio" name="recurring" id="repeat-times" /> Repeat on
          every {weekOfMonth} {selectedDayString}
        </label>
      </div>
      <RepeatOccurrence counter={counter} setCounter={setCounter} />
    </>
  );
};

export default RecurringMonthly;
