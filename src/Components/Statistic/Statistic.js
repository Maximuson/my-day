import styles from "./statistic.module.scss";
import { useEffect, useState } from "react";
import Dot from "./Dot/Dot";

const Statistic = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [isDataLoaded, setDataLoaded] = useState(false);

  const [statisticData, setStatisticData] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDataLoaded(true);
      setStatisticData({
        A: 6,
        B: 4,
        C: 5,
        D: 8,
      });
    }, 1000);
  }, []);

  const allTasks = Object.values(statisticData).reduce((acc, item) => {
    return acc + item;
  }, 0);

  const maxValue = Object.values(statisticData).reduce((acc, item) => {
    return item > acc ? item : acc;
  }, 0);

  const getBgSize = (categoryCount) => {
    const maxSize = 40;
    const minSize = 7;

    const scale = categoryCount / maxValue;

    let size = maxSize * scale;

    const result = size < 7 ? minSize : size;

    return {
      width: `${result}vh`,
      height: `${result}vh`,
      fontSize: `${result * 2}px`,
    };
  };

  return (
    <div
      className={`${styles.container} ${isLoaded && styles.loaded} ${
        isDataLoaded && styles.paintBlock
      }`}
    >
      <div className={`${styles.matrix} `}>
        <div className={`${styles.block} ${styles.blockB}`}>
          <div style={getBgSize(statisticData.B)} className={styles.background}>
            <span className={styles.count}>{statisticData.B}</span>

            {/*{[...Array(statisticData.B)].map(() => (*/}
            {/*  <Dot />*/}
            {/*))}*/}
          </div>
        </div>
        <div className={`${styles.block} ${styles.blockA}`}>
          <div style={getBgSize(statisticData.A)} className={styles.background}>
            <span className={styles.count}>{statisticData.A}</span>

            {/*{[...Array(statisticData.A)].map(() => (*/}
            {/*  <Dot />*/}
            {/*))}*/}
          </div>
        </div>
        <div className={`${styles.block} ${styles.blockD}`}>
          <div style={getBgSize(statisticData.D)} className={styles.background}>
            <span className={styles.count}>{statisticData.D}</span>

            {/*{[...Array(statisticData.D)].map(() => (*/}
            {/*  <Dot />*/}
            {/*))}*/}
          </div>
        </div>
        <div className={`${styles.block} ${styles.blockC}`}>
          <div style={getBgSize(statisticData.C)} className={styles.background}>
            <span className={styles.count}>{statisticData.C}</span>

            {/*{[...Array(statisticData.C)].map(() => (*/}
            {/*  <Dot />*/}
            {/*))}*/}
          </div>
        </div>
        <div className={styles.arrowUpContainer}>
          <span className={styles.arrowText}>Важливо</span>
        </div>
        <div className={styles.arrowRightContainer}>
          <span className={styles.arrowText}>Терміново</span>
        </div>
        <div className={styles.arrowLeftContainer}>
          <span className={styles.arrowText}>Не&nbsp;терміново</span>
        </div>
        <div className={styles.arrowDownContainer}>
          <span className={styles.arrowText}>Не&nbsp;важливо</span>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
