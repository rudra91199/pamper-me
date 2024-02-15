import "./ChooseDate_Time.css";
import { useContext, useEffect, useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ChooseTime from "./ChooseTime/ChooseTime";
import { useLocation } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Context } from "../../../Providers/PamperContext";

const ChooseDate_Time = ({ showDetailsHandle }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const { selectedDate, setSelectedDate } = useContext(Context);
  const currentDate = format(new Date(), "dd");
  const location = useLocation();

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
  };

  console.log(format(selectedDate, "ccc dd MMM yy"));

  const renderHeader = () => {
    const dateFormat = "dd MMM yyyy";
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    return (
      <div>
        <div className="book-now-heading-container">
          <button className="booknow-nav-btn">
            <FaArrowLeftLong />
          </button>
          <h3 className="booknow-heading">Choose Date & Time</h3>
        </div>
        <div className="header row flex-middle">
          <div className="col col-start date-tab">
            <button>Week</button>
            <button>Month</button>
          </div>
          <div className="col col-center">
            <span>
              {format(currentMonth, dateFormat)} - {format(endDate, dateFormat)}
            </span>
          </div>
          <div className="col col-end date-nav">
            <button
              onClick={() => changeWeekHandle("prev")}
              disabled={getWeek(new Date()) == currentWeek}
            >
              <IoIosArrowBack className="nav-icon" />
            </button>
            <button onClick={() => changeWeekHandle("next")}>
              <IoIosArrowForward className="nav-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center date" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });

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
            ${parseInt(formattedDate) < parseInt(currentDate) && "disable-date"}
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
  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}

      <ChooseTime selectedDate={selectedDate} />
    </div>
  );
};

export default ChooseDate_Time;
/**
 * Header:
 * icon for switching to the previous month,
 * formatted date showing current month and year,
 * another icon for switching to next month
 * icons should also handle onClick events to change a month
 */
