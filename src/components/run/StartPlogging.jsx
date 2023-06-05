// import;
import classes from "./StartPlogging.module.css";
import IcoCompass from "../ui/IcoCompass.jsx";
import IcoRunning from "../ui/IcoRunning.jsx";
import IcoPause from "../ui/IcoPause.jsx";

function StartPlogging() {
  return (
    <>
      {/* 상단 배너 및 크루 정보 */}
      <section className={classes.mapArea}>
        {/* Map 영역 */}
        <div className={classes.mapBox}>{/* 이 위치에 넣어주세요 */}</div>
        <button type="button" className={classes.btnCompass}>
          <span className="hide">현재위치보기</span>
          <IcoCompass />
        </button>
      </section>

      <section className={`pddSide20 ${classes.recodeBox}`}>
        <ul className={`dsFlex ${classes.listMeasure}`}>
          <li>
            <strong className={classes.value}>00:00:00</strong>
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

      {/* time Alert 팝업 */}
      <div className="dsFlex timeAlert">
        <IcoRunning />
        <span className="alertText">500m 내 함께 달리는 크루</span>
        <span className="currentRunner">
          <span className="value green">1234</span>
          <span className="unit">명</span>
        </span>
      </div>
    </>
  );
}

export default StartPlogging;
