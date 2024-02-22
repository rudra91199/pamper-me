import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const RepeatOccurrence = ({counter,setCounter}) => {
  return (
    <div className="repeat-occurrence">
      <p>Repeat</p>
      <div>
        <button
          onClick={() =>
            setCounter({ repeat: counter.repeat, end: counter.end - 1 })
          }
          disabled={counter.end <= 0}
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
      <p>{counter.end > 1 ? "Times" : "Time"}</p>
    </div>
  );
};

export default RepeatOccurrence;
