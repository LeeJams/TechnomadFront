import { useEffect, useState } from "react";
import BtnStop from "../../ui/BtnStop.jsx";
import classes from "../StartPlogging.module.css";

export default function Record({ isStart, endRun, isFinish, distance }) {
  const [time, setTime] = useState(0);
  const [walk, setWalk] = useState(0);
  // const [previousBeta, setPreviousBeta] = useState(null);
  // const [isStepDetected, setIsStepDetected] = useState(false);

  useEffect(() => {
    if (isStart) {
      const timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      if (isFinish) {
        clearInterval(timer);
      }

      return () => {
        clearInterval(timer);
      };
    }
  }, [isStart, isFinish]);

  useEffect(() => {
    function startStepCounting() {
      // 걸음 수 측정을 위해 이벤트 리스너 등록
      let previousBeta = null;
      let isStepDetected = false;
      let stepCount = 0;
      window.addEventListener("deviceorientation", (event) => {
        const { beta } = event;

        // 이전 beta 값이 null인 경우 초기화
        if (previousBeta === null) {
          previousBeta = beta;
          return;
        }

        // 이전 값과 현재 값의 차이 계산
        const deltaBeta = beta - previousBeta;

        // 걸음을 감지하는 조건 설정
        if (!isStepDetected && deltaBeta > 10) {
          isStepDetected = true;
        } else if (isStepDetected && deltaBeta < -10) {
          isStepDetected = false;
          stepCount++;
        }

        previousBeta = beta;
        setWalk(stepCount);
      });
    }
    if (isStart) {
      window.DeviceOrientationEvent.requestPermission().then((response) => {
        if (response === "granted") {
          startStepCounting();
        } else {
          alert("걸음 수 측정을 위해 권한이 필요합니다.");
        }
      });
    }
  }, [isStart]);

  const finish = () => {
    endRun({ time: timeString, walk, distance });
  };

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
          <strong className={classes.value}>{walk}</strong>
          <span className={classes.unit}>걸음</span>
        </li>
        <li>
          <strong className={classes.value}>{distance}</strong>
          <span className={classes.unit}>거리(km)</span>
        </li>
      </ul>
      <div className={`dsFlex btnBox`}>
        <button type="button" className={`btnCircle`} onClick={finish}>
          <span className="hide">일시정지</span>
          <BtnStop />
        </button>
      </div>
    </section>
  );
}
