import "./ChooseDate_Time.css";
import { useContext, useState } from "react";
import { subMonths, addMonths, getWeek } from "date-fns";
import ChooseTime from "./ChooseTime/ChooseTime";
import { Context } from "../../../Providers/PamperContext";
import CalenderHeader from "./ChooseDate/CalendarHeader";
import CalendarWeekly from "./ChooseDate/CalendarWeekly";
import CalendarDays from "./ChooseDate/CalendarDays";
import CalendarMonthly from "./ChooseDate/CalendarMonthly";

const ChooseDate_Time = () => {
  const [calendarType, setCalendarType] = useState("weekly");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const { selectedDate, setSelectedDate } = useContext(Context);



  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
  };

  return (
    <div className="calendar">
      <CalenderHeader
        currentMonth={currentMonth}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
        setCurrentMonth={setCurrentMonth}
        calendarType={calendarType}
        setCalendarType={setCalendarType}
      />
      <CalendarDays currentMonth={currentMonth} />
      {calendarType === "weekly" ? (
        <CalendarWeekly
          currentMonth={currentMonth}
          onDateClickHandle={onDateClickHandle}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : (
        <CalendarMonthly selectedDate={selectedDate} onDateClickHandle={onDateClickHandle} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
      )}

      <ChooseTime selectedDate={selectedDate} currentWeek={currentWeek} />
    </div>
  );
};

export default ChooseDate_Time;
