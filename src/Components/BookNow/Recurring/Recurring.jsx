import { FaArrowLeftLong } from "react-icons/fa6";
import "./Recurring.css";
import { useContext, useState } from "react";
import RecurringMonthly from "./RecurringMonthly";
import OccurrenceInfo from "./OccurrenceInfo";
import RecurringDaily from "./RecurringDaily";
import RecurringWeekly from "./RecurringWeekly";
import BackNav from "../Navigation/BackNav";
import NextNav from "../Navigation/NextNav";
import { Context } from "../../../Providers/PamperContext";

const Recurring = () => {
  const [tabs, setTabs] = useState("daily");
  const [counter, setCounter] = useState({
    repeat: 1,
    end: 0,
  });
  const {allBookingDates} = useContext(Context); 
 
  return (
    <div className="recurring">
      <div className="book-now-heading-container">
        <BackNav url={"/booknow/choose-date&time"}/>
        <h3 className="booknow-heading">Recurring</h3>
      </div>
      <div className="recurring-tabs">
        <button
          className={`tab ${tabs === "daily" && "active-tab"}`}
          onClick={() => setTabs("daily")}
        >
          Daily
        </button>
        <button
          className={`tab ${tabs === "weekly" && "active-tab"}`}
          onClick={() => setTabs("weekly")}
        >
          Weekly
        </button>
        <button
          className={`tab ${tabs === "monthly" && "active-tab"}`}
          onClick={() => setTabs("monthly")}
        >
          Monthly
        </button>
      </div>
      <div className="recurring-content-container">
        <div className="recurring-content">

          {
            tabs === "daily" && <RecurringDaily counter={counter} setCounter={setCounter} />
            
          }
          {
            tabs === "weekly" && <RecurringWeekly counter={counter} setCounter={setCounter} />
            
          }
          {
            tabs === "monthly" && <RecurringMonthly counter={counter} setCounter={setCounter} />
            
          }
          <OccurrenceInfo />
          </div>
      </div>
          <NextNav url={"/booknow/recurring-dates"} dates={allBookingDates}/>
    </div>
  );
};

export default Recurring;
