import { useEffect, useState } from "react";
import IcoPause from "../../ui/IcoPause.jsx";
import classes from "../StartPlogging.module.css";

export default function Record({ isStart }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isStart) {
      const timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isStart]);

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor((time % 3600) % 60);
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <section className={`pddSide20 ${classes.recodeBox}`}>
      <ul className={`dsFlex ${classes.listMeasure}`}>
        <li>
          <strong className={classes.value}>{timeString}</strong>
          <span className={classes.unit}>시간</span>
        </li>
        <li>
          <strong className={classes.value}>12.560</strong>
          <span className={classes.unit}>걸음</span>
        </li>
        <li>
          <strong className={classes.value}>4.81</strong>
          <span className={classes.unit}>거리(km)</span>
        </li>
      </ul>
      <div className={`dsFlex btnBox`}>
        <button type="button" className={`btnCircle`}>
          <span className="hide">일시정지</span>
          <IcoPause />
        </button>
      </div>
    </section>
  );
}
