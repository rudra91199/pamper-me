import React from "react";
import "./RecurringDates.css"
import { useLocation } from "react-router-dom";
import BackNav from "../Navigation/BackNav";
import { format } from "date-fns";
import TimeCell from "../ChooseDate_Time/ChooseTime/TimeCell";
import NextNav from "../Navigation/NextNav";
import { useTimeFormat } from "../../../Hooks/useTimeFormat";

const RecurringDates = () => {
  const state = useLocation().state;
  // const {splittedFirstValue, fractionFirstTimeString, splittedSecondValue, fractionSecondTimeString} = useTimeFormat(state.time)
  console.log(state);
  return (
    <div className="recurring-dates">
      <div className="book-now-heading-container">
        <BackNav url={"/booknow/recurring"} />
        <h3 className="booknow-heading">Recurring Bookings</h3>
      </div>
      <p>
        To book this service, a minimum of 1 and a maximum of{" "}
        {state?.dates?.length} bookings are required.
      </p>
      <ul>
        {state?.dates?.map((date, i) => (
          <div key={i}>
            <li >
              {i + 1 + "."} &nbsp;{format(date?.date, "dd/MM/yyyy")} &nbsp;{" "}
              <span
                className="time-cell"

              >
                <span>{useTimeFormat(date.time).splittedFirstValue + useTimeFormat(date.time).fractionFirstTimeString}</span>
                {date?.time?.firstValue < 12 ? "am" : "pm"}
                &nbsp;-&nbsp;
                <span>{useTimeFormat(date.time).splittedSecondValue + useTimeFormat(date.time).fractionSecondTimeString}</span>
                {date?.time?.secondValue < 12 ? "am" : "pm"}
              </span>
            </li>
            {i < state.dates.length - 1 && <hr />}
          </div>
        ))}
      </ul>
      <NextNav url={`/booknow/checkout/${state?.service?.title}`} />
    </div>
  );
};

export default RecurringDates;
