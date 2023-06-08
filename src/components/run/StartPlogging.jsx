// import;
import classes from "./StartPlogging.module.css";
import IcoCompass from "../ui/IcoCompass.jsx";
import IcoRunning from "../ui/IcoRunning.jsx";
import IcoPause from "../ui/IcoPause.jsx";
import IcoPincers from "../ui/IcoPincers.jsx";
import IcoBag from "../ui/IcoBag.jsx";
import IcoClose from "../ui/IcoClose.jsx";

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
      <div className={`dsFlex timeAlert`}>
        <IcoRunning />
        <span className={`alertText`}>500m 내 함께 달리는 크루</span>
        <span className={`currentRunner`}>
          <span className={`value green`}>1234</span>
          <span className={`unit`}>&nbsp;명</span>
        </span>
      </div>

      {/* 플로깅 시작 팝업 */}
      <div id="popStartPlogging" className={`popLayer open`}>
        <div className={`inner`}>
          <div className={`popCont`}>
            <div className={`cont`}>
              <p className={`mainText`}>
                안전한 플로깅을 위해서
                <br />
                준비해주세요.
              </p>
              <div className={`dsFlex ${classes.noticeImgBox}`}>
                <span className={classes.listSupplies}>
                  <IcoPincers />
                  <span className={`white`}>집게</span>
                </span>
                <span className={classes.listSupplies}>
                  <IcoBag />
                  <span className={`white`}>
                    플로깅백
                    <br />
                    (종량제봉투)
                  </span>
                </span>
              </div>
            </div>
            <div className={`dsFlex btnBox`}>
              <button type="button" className={`btnCircle`}>
                <span className="hide">일시정지</span>
                <IcoPause />
              </button>
            </div>
          </div>
        </div>
        <button type="button" className={`btnPopClose`}>
          <span className={`hide`}>팝업닫기</span>
          <IcoClose />
        </button>
        {/* 배경 */}
        <span className={`popLayerBg`}></span>
      </div>

      {/* 플로깅 종료 팝업 - 공통 */}
      {/* <div id="popStartPlogging" className={`popLayer bottom open`}>
        <div className={`inner`}>
          <div className={`popCont`}>
            <div className={`cont`}>
              <div className={`whiteBox tac`}>
                <p className={`mainText`}>플로깅을 종료합니다.</p>
                <p className={`subtext`}>
                  쓰레기 봉투 인증은 밝은 장소에서 진행해주세요.
                </p>
              </div>
            </div>
            <div className={`btnWrap dsFlex`}>
              <button type="button" className={`btnCommon gray`}>
                돌아가기
              </button>
              <button type="button" className={`btnCommon`}>
                인증
              </button>
            </div>
          </div>
        </div>
        <span className={`popLayerBg`}></span>
      </div> */}
    </>
  );
}

export default StartPlogging;
