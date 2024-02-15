import { FaArrowLeftLong } from "react-icons/fa6";
import "./Recurring.css";
import { useState } from "react";
import RecurringDaily from "./RecurringDaily";
import RecurringWeekly from "./RecurringWeekly";
import RecurringMonthly from "./RecurringMonthly";

const Recurring = () => {
  const [tabs, setTabs] = useState("daily");
  return (
    <div className="recurring">
      <div className="book-now-heading-container">
        <button className="booknow-nav-btn">
          <FaArrowLeftLong />
        </button>
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
        {tabs === "daily" ? (
          <RecurringDaily />
        ) : tabs === "weekly" ? (
          <RecurringWeekly />
        ) : (
          <RecurringMonthly />
        )}
      </div>
    </div>
  );
};

export default Recurring;
