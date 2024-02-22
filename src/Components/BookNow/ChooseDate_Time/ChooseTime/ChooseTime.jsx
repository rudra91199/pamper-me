import React, { useContext } from "react";
import "./ChooseTime.css";
import { useLocation } from "react-router-dom";
import TimeCell from "./TimeCell";
import { Context } from "../../../../Providers/PamperContext";
import { format } from "date-fns";

const ChooseTime = ({ selectedDate }) => {
  const currentDate = new Date();
  const localHours = currentDate.getHours();

  const location = useLocation();
  const { service } = location.state;
  const timeBlocks = [];
  let firstValue = format(currentDate,"d") === format(selectedDate,"d") ? (localHours > 11 ? localHours : 11) : 11
  let secondValue = 0;
  while (1) {
    secondValue = firstValue + parseInt(service.duration) / 60;
    if (firstValue + parseInt(service.duration) / 60 > 23) {
      break;
    }
    const timeRange = { firstValue, secondValue };
    timeBlocks.push(timeRange);
    firstValue = firstValue + 0.5;
  }

  return (
    <div className="choose-time-container">
      <h4>Choose Time</h4>
      <div className="time-block-container">
        {timeBlocks.map((timeBlock, index) => (
          <TimeCell
            key={index}
            timeBlock={timeBlock}
            selectedDate={selectedDate}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseTime;
