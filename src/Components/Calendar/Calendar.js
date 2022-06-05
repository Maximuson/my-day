import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCalendarDate } from "../../store/actions/calendar";
import Day from "./Day/Day";
import Header from "./Header/Header";
import UsersService from "../../API/UsersService";
// import Day from "./Day/";

const Calendar = ({ handler }) => {
  const dispatch = useDispatch();

  const date = useSelector((state) => state.calendar.date);
  const days = useSelector((state) => state.calendar.days);

  setCalendarDate();

  useEffect(() => {
    dispatch(setCalendarDate(new Date()));
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    const userId = localStorage.getItem("userId");

   UsersService.getUserData(userId).then((data) => {
     console.log(data)
   })
  }, []);


  if (days.length < 1) return null;

  const names = ["Пон", "Вів", "Сер", "Чет", "Пят", "Суб", "Нед"];

  return (
    <div className="full-height">
      <Header />
      <div className="full-height">
        <div className="calendar borderless day-names">
          {names.map((name) => (
            <h5 key={name}>{name}</h5>
          ))}
        </div>
        <div className="calendar full-height">
          {days.map((day) => (
            <Day key={day.date} day={day} date={date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
