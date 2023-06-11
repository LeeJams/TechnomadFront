// import;
import classes from "../../components/layouts/Header.module.css";
import confirmSample01 from "../../assets/images/confirmSample01.png";
import confirmSample02 from "../../assets/images/confirmSample02.png";
// import IcoArrow from "../ui/IcoArrow.jsx";
import BtnShare from "../ui/BtnShare.jsx";
import IcoSprout from "../ui/IcoSprout.jsx";
import BtnEdit from "../ui/BtnEdit.jsx";
import IcoCamera from "../ui/IcoCamera.jsx";
import IcoClose from "../ui/IcoClose.jsx";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const { kakao } = window;

function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const inputFile = useRef(null);
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    console.log(files);
  };
  const onFileClick = () => {
    inputFile.current.click();
  };
  console.log(state);
  const preview = URL.createObjectURL(state.file);
  useEffect(() => {
    var linePath = state.linePath.map((item) => {
      return new kakao.maps.LatLng(item.La, item.Ma);
    });

    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: linePath[Math.floor(linePath.length / 2)],
        level: 3, // 지도의 확대 레벨
      };

    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다

    // 지도에 표시할 선을 생성합니다
    var polyline = new kakao.maps.Polyline({
      path: linePath, // 선을 구성하는 좌표배열 입니다
      strokeWeight: 5, // 선의 두께 입니다
      strokeColor: "#FFAE00", // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "solid", // 선의 스타일입니다
    });

    // 지도에 선을 표시합니다
    polyline.setMap(map);
  }, [state.linePath]);

  const startTime =
    state.startTime.getFullYear() +
    "." +
    (state.startTime.getMonth() + 1).toString().padStart(2, "0") +
    "." +
    state.startTime.getDate().toString().padStart(2, "0") +
    " " +
    state.startTime.getHours().toString().padStart(2, "0") +
    ":" +
    state.startTime.getMinutes().toString().padStart(2, "0");

  const endTime =
    state.endTime.getHours().toString().padStart(2, "0") +
    ":" +
    state.endTime.getMinutes().toString().padStart(2, "0");

  return (
    <div id="layoutWrap">
      {/* 담깅 결과 */}
      <section className={`resultArea`}>
        {/* 헤더 */}
        <header className={`header`}>
          <div className={`container`}>
            <div className={`titleArea`}>
              <span className={`pageName`}>담깅 결과</span>
            </div>
            <div className={classes.btnWrap}>
              <button
                type="button"
                onClick={() => {
                  navigate(`/TechnomadFront/${state.isCrew ? "crew/1" : ""}`);
                }}
              >
                <IcoClose />
              </button>
            </div>
          </div>
          <div className={`container sub`}>
            <div className={`titleArea`}>
              <span className={`pageName sub`}>
                기록
                <em>
                  {startTime}-{endTime}
                </em>
              </span>
            </div>
            <div className={`btnWrap`}>
              <button type="button">
                <BtnShare />
              </button>
            </div>
          </div>
        </header>
        {/* 지도 */}
        <div className={`mapArea`}>
          <div id="map" className={`mapBox`}></div>
        </div>

        <div className={`pddSide20 pddUd20`}>
          <ul className={`listRecord`}>
            <li>
              <div className={`label`}>수거한 쓰레기(L)</div>
              <div className={`textValue`}>
                <span>12</span>
              </div>
            </li>
            <li>
              <div className={`label`}>걸음</div>
              <div className={`textValue`}>
                <span>{state.walk}</span>
              </div>
            </li>
            <li>
              <div className={`label`}>거리(KM)</div>
              <div className={`textValue`}>
                <span>{state.distance}</span>
              </div>
            </li>
            <li>
              <div className={`label`}>소요시간</div>
              <div className={`textValue`}>
                <span>{state.time}</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className={`uploadArea`}>
        <div className={`confirm`}>
          <h2 className={`h2Title dsFlex pddSide20`}>
            <span>
              담깅인증
              <IcoSprout />
            </span>
            <button type="button" className={`btnUpload`} onClick={onFileClick}>
              <IcoCamera />
              추가인증
            </button>
            <input
              style={{ display: "none" }}
              ref={inputFile}
              type="file"
              accept="image/*"
              capture="camera"
              onChange={onFileChange}
            />
          </h2>
          <div className="uploaded">
            <img src={preview} />
          </div>
        </div>
        <div className={`write`}>
          <h2 className={`h2Title dsFlex pddSide20`}>
            <span>담깅일지</span>
            <button type="button" className={`btnEdit`}>
              <span className="hide">게시물 수정</span>
              <BtnEdit />
            </button>
          </h2>
          <div className={`writeBox`}>
            <div className={`uploaded`}>
              <img src={confirmSample02} />
            </div>
            <p className={`writeText pddSide20`}>
              오랜만에 하는 플로깅. 화창한 날씨 덕에 제대로 된 런닝을 해서
              뿌듯했다. 하지만 새벽 동안 머물다 간 사람들이 버리고 간 곳곳의
              쓰레기들이 여전히 많이 보여서 아쉬웠다. 내가 지나온 길이
              깨끗해지는 뿌듯함 가득한 하루다.
              <span className={`gray`}>32분전</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Result;
