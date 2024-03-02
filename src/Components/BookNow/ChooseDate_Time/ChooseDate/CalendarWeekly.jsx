import { addDays, format, getMonth, getWeek, isSameDay, isSameMonth, isSameWeek, isSameYear, lastDayOfWeek, startOfWeek } from 'date-fns';

const CalendarWeekly = ({currentMonth, onDateClickHandle,selectedDate}) => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
  const currentDate = format(new Date(), "dd");

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
            ${
              isSameYear(day, new Date()) &&
              getMonth(day) < getMonth(new Date()) &&
              "disable-date"
            }
            ${
              getMonth(new Date()) == getMonth(day) &&
            parseInt(format(day, "d")) < parseInt(currentDate) &&
            "disable-date"
          }
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

export default CalendarWeekly