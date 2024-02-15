import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import OccurrenceInfo from "./OccurrenceInfo";

const RecurringDaily = () => {
  const [counter, setCounter] = useState({
    repeat: 1,
    end: 1,
  });

  return (
    <div className="recurring-daily">
      <div className="repeat-days">
        <p>Repeat every</p>
        <div>
          <button
            onClick={() =>
              setCounter({ repeat: counter.repeat - 1, end: counter.end })
            }
            disabled={counter.repeat <= 1}
          >
            {" "}
            <FiMinus />
          </button>
          <p>{counter.repeat}</p>
          <button
            onClick={() =>
              setCounter({ repeat: counter.repeat + 1, end: counter.end })
            }
          >
            <FiPlus />
          </button>
        </div>
        <p>{counter.repeat > 1 ? "days" : "day"}</p>
      </div>
      <div className="repeat-occurrence">
        <p>End after</p>
        <div>
          <button
            onClick={() =>
              setCounter({ repeat: counter.repeat, end: counter.end - 1 })
            }
            disabled={counter.end <= 1}
          >
            <FiMinus />
          </button>
          <p>{counter.end}</p>
          <button
            onClick={() =>
              setCounter({ repeat: counter.repeat, end: counter.end + 1 })
            }
            disabled={counter.end > 9}
          >
            <FiPlus />
          </button>
        </div>
        <p>{counter.end > 1 ? "occurrences" : "occurrence"}</p>
      </div>
      <OccurrenceInfo/>
    </div>
  );
};

export default RecurringDaily;
