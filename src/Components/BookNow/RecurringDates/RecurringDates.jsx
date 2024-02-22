import React from "react";
import "./RecurringDates.css"
import { useLocation } from "react-router-dom";
import BackNav from "../Navigation/BackNav";
import { format } from "date-fns";
import TimeCell from "../ChooseDate_Time/ChooseTime/TimeCell";
import NextNav from "../Navigation/NextNav";

const RecurringDates = () => {
  const state = useLocation().state;
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
          <>
            <li >
              {i + 1+"."} &nbsp;{format(date?.date, "dd/MM/yyyy")} &nbsp;{" "}
              <span><TimeCell timeBlock={date?.time} />{" "}</span>
            </li>
            {i < state.dates.length -1 && <hr/>}
          </>
        ))}
      </ul>
      <NextNav url={`/booknow/checkout/${state?.service?.title}`}/>
    </div>
  );
};

export default RecurringDates;
