import React, { useContext, useEffect } from "react";
import RepeatCounter from "./RepeatCounter";
import RepeatOccurrence from "./RepeatOccurrence";
import { useLocation } from "react-router-dom";
import { addDays } from "date-fns";
import { Context } from "../../../Providers/PamperContext";

const RecurringDaily = ({ counter, setCounter }) => {
  const { setAllBookingDates } = useContext(Context);
  const location = useLocation();
  const { date, time } = location.state;

  useEffect(() => {
    const recurringNextDates = [{date,time}];
    for (let i = 0; i < counter.end; i++) {
      const recurringNextDate = addDays(date, counter.repeat * (i + 1));
      recurringNextDates.push({date:recurringNextDate,time});
    }
    setAllBookingDates(recurringNextDates);
  }, [counter]);
  return (
    <>
      <RepeatCounter counter={counter} setCounter={setCounter} repeat={"Day"} />
      <RepeatOccurrence counter={counter} setCounter={setCounter} />
    </>
  );
};

export default RecurringDaily;
