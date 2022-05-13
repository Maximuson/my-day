import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { setCalendarDate } from "../../../store/actions/calendar";
import { contrast, sameDay } from "../../../store/utility";
import Task from "../Task/Task";
// import { CalendarContext, sameDay } from "../context/CalendarContext";

function Day({ day, date }) {
//   const { setTask, setDate } = useContext(CalendarContext);
const dispatch = useDispatch()


  const getStyle = (color) => {
    return { background: color, color: contrast(color) };
  };
  const selected = sameDay(day.date, date);
  const style =
    (day.date.getMonth() !== date.getMonth() ? " disabled" : "") +
    (sameDay(day.date, new Date()) ? " current-day" : "") +
    (selected ? " selected-day" : "");

  return (
    <div  className={`day ${style}`} onClick={() => dispatch(setCalendarDate(day.date))}>
      <div className="task-day">
        <div className="tasks">
          {day.tasks.map((task) => (
            <Task key={task.id} task={task} style={getStyle(task.color)} />
          ))}
        </div>
        <h3> {day.date.getDate()} </h3>
      </div>
      {selected ? (
        <div
          className="button button-blue add-button"
        //   onClick={() => setTask({})}
        >
          +
        </div>
      ) : null}
    </div>
  );
}

export default Day;
