import React from "react";
import "./ChooseTime.css";
import { useLocation } from "react-router-dom";
import TimeCell from "./TimeCell";

const ChooseTime = ({selectedDate}) => {
const location = useLocation();
const {service} = location.state;
  const timeBlocks = [];
  let firstValue = 11;
  let secondValue = 0;
  while (secondValue <= 23) {
    secondValue = firstValue + parseInt(service.duration) / 60;
    const timeRange = { firstValue, secondValue };
    timeBlocks.push(timeRange);
    firstValue = firstValue + 0.5;
  }

  return (
    <div className="choose-time-container">
      <h4>Choose Time</h4>
      <div className="time-block-container">
        {timeBlocks.map((timeBlock, index) => <TimeCell key={index} timeBlock={timeBlock} selectedDate={selectedDate}/>)}
      </div>
    </div>
  );
};

export default ChooseTime;
