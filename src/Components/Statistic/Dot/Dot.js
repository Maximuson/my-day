import { randomIntFromInterval } from "../../../store/utility";

import styles from "./dot.module.scss";
import { useEffect, useState } from "react";

const Dot = () => {
  const [isDeleted, setDeleted] = useState(false);

  const handleClick = () => {
    setDeleted(true);
  };

  const getInitialPoints = () => {
    const top = randomIntFromInterval(0, 99);
    const left = randomIntFromInterval(0, 99);

    return { top, left };
  };

  const getNearCordinates = ({ top, left }) => {
    const randomDirection = randomIntFromInterval(-20, 20);

    const newTop = Math.abs(
      randomIntFromInterval(
        top - randomDirection - 5,
        top + randomDirection - 5
      )
    );
    const newLeft = Math.abs(
      randomIntFromInterval(
        left - randomDirection - 5,
        left + randomDirection - 5
      )
    );

    const topInContainer = newTop < 99 ? newTop : 99;
    const leftInContainer = newLeft < 99 ? newLeft : 99;

    return { top: topInContainer, left: leftInContainer };
  };

  const [points, setPoints] = useState(getInitialPoints());

  const [style, setStyle] = useState({
    top: `${points.top}%`,
    left: `${points.left}%`,
  });

  useEffect(() => {
    // Start on initial load
    const cordinates = getNearCordinates(points);
    setPoints(cordinates);
    setStyle({ top: `${cordinates.top}%`, left: `${cordinates.left}%` });
  }, []);

  useEffect(() => {
    setInterval(() => {
      const cordinates = getNearCordinates(points);
      // console.log(points)

      setPoints(cordinates);

      // console.log(1);

      setStyle({ top: `${cordinates.top}%`, left: `${cordinates.left}%` });
    }, 15000);
  }, []);

  return isDeleted ? false : (
    <div
      role={"button"}
      onClick={handleClick}
      style={{ ...style }}
      className={styles.item}
    ></div>
  );
};

export default Dot;
