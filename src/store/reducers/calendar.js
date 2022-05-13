import * as actionTypes from "../actions/actionTypes";
import { sameDay, updateObject } from "../utility.js";

const initialState = {
  date: new Date(),
  days: [],
  task: null,
};

const getDatabase = () => {
  let db = localStorage.getItem("$calendar_db");
  if (!db) {
    db = [];
    setDatabase(db);
  } else {
    db = JSON.parse(db);
    db.map((task) => (task.date = new Date(task.date)));
  }
  return db;
};

const setDatabase = (db) => {
  localStorage.setItem("$calendar_db", JSON.stringify(db));
};

const setDate = (state, action) => {
  const date = action.payload;
  // Calendar Start Day
  const d1 = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  d1.setDate(d1.getDate() - (d1.getDay() === 0 ? 7 : d1.getDay()));
  // Calendart End Day
  const d2 = new Date(date.getFullYear(), date.getMonth() + 2, 0);
  if (d2.getDay() !== 0) d2.setDate(d2.getDate() + (7 - d2.getDay()));

  const db = getDatabase();

  const days = [];
  do {
    // Obtain tasks
    d1.setDate(d1.getDate() + 1); // iterate
    days.push({
      date: new Date(d1.getTime()),
      tasks: db.filter((task) => sameDay(d1, task.date)),
    });
  } while (!sameDay(d1, d2));

  return updateObject(state, {
    // Update state
    ...state,
    date: date,
    days: days,
  });
};

const setTask = (state, action) => {
  return updateObject(state, {
    task: action.payload,
  });
};

const saveTask = (state, action) => {
    let db = getDatabase();
    const task = action.payload;

      db.push(task);

    setDatabase(db);
    return {
      ...state,
    };
  };

  const updateTask = (state, action) => {
    let db = getDatabase();
    const task = action.payload;

    db = db.map((t) => {
        return t.id === task.id ? task : t;
      });

      setDatabase(db);
      return {
        ...state,
      };
  }

  const deleteTask = (state, action) => {
    let db = getDatabase();
    db = db.filter((task) => {
      return task.id !== action.payload;
    });
    setDatabase(db);
    return {
      ...state,
    };
  };


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CALENDAR_DATE:
        return setDate(state, action);
     
    default:
      return state;
  }
};

export default reducer;
