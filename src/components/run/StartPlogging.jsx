import classes from "./StartPlogging.module.css";

import IcoRunning from "../ui/IcoRunning.jsx";
import IcoPincers from "../ui/IcoPincers.jsx";
import IcoBag from "../ui/IcoBag.jsx";
import IcoClose from "../ui/IcoClose.jsx";
import { useState } from "react";
import Map from "./compo/Map";
import Record from "./compo/Record";

function StartPlogging() {
  const [isStart, setIsStart] = useState(false);

  return (
    <div id="layoutWrap">
      <Map />

      <Record isStart={isStart} />

      {/* time Alert 팝업 */}
      <div
        className={`dsFlex timeAlert`}
        style={{
          zIndex: 2,
          top: 20,
        }}
      >
        <IcoRunning />
        <span className={`alertText`}>500m 내 함께 달리는 크루</span>
        <span className={`currentRunner`}>
          <span className={`value green`}>12</span>
          <span className={`unit`}>&nbsp;명</span>
        </span>
      </div>

      {/* 플로깅 시작 팝업 */}
      {!isStart && (
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
                <button
                  type="button"
                  className={`btnCircle`}
                  onClick={() => setIsStart(true)}
                >
                  <span className="hide">일시정지</span>
                  시작
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            className={`btnPopClose`}
            onClick={() => setIsStart(true)}
          >
            <span className={`hide`}>팝업닫기</span>
            <IcoClose />
          </button>
          <span className={`popLayerBg`}></span>
        </div>
      )}
      {/* 배경 */}

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
    </div>
  );
}

export default StartPlogging;
