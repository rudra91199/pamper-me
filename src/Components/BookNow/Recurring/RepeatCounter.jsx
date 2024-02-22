import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const RepeatCounter = ({counter,setCounter,repeat}) => {
  return (
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
    <p>{counter.repeat > 1 ? repeat+"s" : repeat}</p>
  </div>
  )
}

export default RepeatCounter