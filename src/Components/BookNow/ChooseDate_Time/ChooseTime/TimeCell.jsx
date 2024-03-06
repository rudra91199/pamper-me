import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTimeFormat } from "../../../../Hooks/useTimeFormat";

const TimeCell = ({ timeBlock, selectedDate, currentWeek }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service, employee, address } = location.state;
  const {splittedFirstValue, fractionFirstTimeString, splittedSecondValue, fractionSecondTimeString} = useTimeFormat(timeBlock)
  return (
    <span
      className="time-cell"
      onClick={() =>
        navigate("/booknow/recurring", {
          state: {
            service,
            employee,
            address,
            date: selectedDate,
            time: timeBlock,
          },
        })
      }
    >
      <span>{splittedFirstValue + fractionFirstTimeString}</span>
      {timeBlock?.firstValue < 12 ? "am" : "pm"}
      &nbsp;-&nbsp;
      <span>{splittedSecondValue + fractionSecondTimeString}</span>
      {timeBlock?.secondValue < 12 ? "am" : "pm"}
    </span>
  );
};

export default TimeCell;
