import { addMonths, addWeeks, format, getMonth, getWeek, lastDayOfWeek, subMonths, subWeeks } from "date-fns";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BackNav from "../../Navigation/BackNav";

const CalenderHeader = ({
  currentMonth,
  currentWeek,
  setCurrentWeek,
  setCurrentMonth,
  calendarType,
  setCalendarType,
}) => {
  const dateFormat = "dd MMM yyyy";
  const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });

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

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  return (
    <div>
      <div className="book-now-heading-container">
        <BackNav url={"/booknow/choose-location"}/>
        <h3 className="booknow-heading">Choose Date & Time</h3>
      </div>
      <div className="header row flex-middle">
        <div className="col col-start date-tab">
          <button
            onClick={() => setCalendarType("weekly")}
            className={`${calendarType === "weekly" && "calendar-active"}`}
          >
            Week
          </button>
          <button
            onClick={() => setCalendarType("monthly")}
            className={`${calendarType === "monthly" && "calendar-active"}`}
          >
            Month
          </button>
        </div>
        <div className="col col-center">
          {calendarType === "weekly" ? (
            <span>
              {format(currentMonth, dateFormat)} - {format(endDate, dateFormat)}
            </span>
          ) : (
            <span>{format(currentMonth, "MMMM yyyy")}</span>
          )}
        </div>
        <div className="col col-end date-nav">
          <button
            onClick={() =>
              calendarType === "weekly"
                ? changeWeekHandle("prev")
                : changeMonthHandle("prev")
            }
            disabled={ calendarType === "weekly" ? getWeek(new Date()) == currentWeek : getMonth(new Date()) == getMonth(currentMonth)}
          >
            <IoIosArrowBack className="nav-icon" />
          </button>
          <button
            onClick={() =>
              calendarType === "weekly"
                ? changeWeekHandle("next")
                : changeMonthHandle("next")
            }
          >
            <IoIosArrowForward className="nav-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalenderHeader;
