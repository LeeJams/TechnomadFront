// import;
import IcoFlash from "../ui/IcoFlash.jsx";
import IcoLighter from "../ui/IcoLighter.jsx";
import IcoClose from "../ui/IcoClose.jsx";

function PopScan() {
  return (
    <>
      {/* 플로깅 시작 팝업 */}
      <div id="popStartPlogging" className={`popLayer top open`}>
        <div className={`inner`}>
          <div className={`popCont`}>
            <div className="popHeader pddSide20">
              <strong>인증 촬영</strong>
              <button type="button" className={`btnPopClose`}>
                <span className={`hide`}>팝업닫기</span>
                <IcoClose />
              </button>
            </div>
            <div className={`cont`}>
              <p className={`subText`}>
                쓰레기 봉투를 사각형 안에 맞춰주세요.
                <br />
                자동으로 촬영합니다.
              </p>
              <div className={`scanArea`}>{/* 스캔영역 */}</div>
              <ul className={`dsFlex pddSide20 caution`}>
                <li>
                  <IcoLighter />
                  <p>
                    밝은 배경에서
                    <br />
                    촬영해주세요.
                  </p>
                </li>
                <li>
                  <IcoFlash />
                  <p>
                    빛이 반사되지 않도록
                    <br />
                    주의해주세요.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 배경 */}
        <span className={`popLayerBg`}></span>
      </div>
    </>
  );
}

export default PopScan;
