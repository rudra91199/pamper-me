import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TimeCell = ({ timeBlock, selectedDate, currentWeek }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service, employee, address } = location.state;
  const splittedFirstValue = parseInt(
    timeBlock.firstValue.toString().split(".")[0]
  );
  const remainderFirst = timeBlock.firstValue % splittedFirstValue;
  const fractionFirstTimeString = remainderFirst == 0.5 ? ".30" : ".00";
  const splittedSecondValue = parseInt(
    timeBlock.secondValue.toString().split(".")[0]
  );
  const remainderSecond = timeBlock.secondValue % splittedSecondValue;
  const fractionSecondTimeString = remainderSecond == 0.5 ? ".30" : ".00";
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
