// import;
import classes from "./CrewDetail.module.css";
import IcoArrow from "../ui/IcoArrow.jsx";
import BtnShare from "../ui/BtnShare.jsx";

import { useEffect, useState } from "react";
import http from "../utils/http";
import { useNavigate } from "react-router-dom";

const TAB_LIST = [
  { id: "record", name: "기록" },
  { id: "auth", name: "인증" },
];

function RecordLanding() {
  const navigate = useNavigate();
  const [crewInfo, setCrewInfo] = useState({});
  const [currentTab, setCurrentTab] = useState("record");

  useEffect(() => {
    // TODO : 크루 정보 조회
    const getDetail = async () => {
      try {
        const res = await http.get("/crew/1");
        setCrewInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    //getDetail();
  }, []);

  const changeTab = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <>
      {/* 헤더 */}
      <header className={`header`}>
        <div className={`container`}>
          <h2 className={`titleArea`}>
            <span className={`pageName`}>기록</span>
          </h2>
          <div className={`btnWrap`}>
            <button type="button">
              <BtnShare />
            </button>
          </div>
        </div>
      </header>
      {/* 달력 */}
      <section className={`RecordCalendar`}>
        <strong className={`curMonth`}>2023년 6월</strong>
        <div className="calendarBox pddSide20">
          <ul className={`dayOfWeek dsFlex`}>
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="date Weekly dsFlex">
            <li className={`today`}>
              <span className={`mark`}>11</span>
            </li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
          </ul>
        </div>
        <button type="button" className={`btnDateShow`}>
          <span className={`hide`}>날짜 더보기</span>
          <IcoArrow />
        </button>
      </section>

      {/* 오늘활동 및 탭메뉴*/}
      <section className={classes.recordArea}>
        <div className="todayRecord pddSide20 pdb32">
          <h2 className={`h2Title`}>오늘 활동</h2>
          <ul className={`listRecord`}>
            <li>
              <div className={`label`}>수거한 쓰레기(L)</div>
              <div className={`textValue`}>
                <span>56.01</span>
              </div>
            </li>
            <li>
              <div className={`label`}>걸음</div>
              <div className={`textValue`}>
                <span>260.800</span>
              </div>
            </li>
            <li>
              <div className={`label`}>거리(KM)</div>
              <div className={`textValue`}>
                <span>24.81</span>
              </div>
            </li>
            <li>
              <div className={`label`}>소요시간</div>
              <div className={`textValue`}>
                <span>01:32:00</span>
              </div>
            </li>
          </ul>
        </div>
        {/* 탭메뉴 */}
        <div className={classes.tabLink}>
          {TAB_LIST.map((tab) => {
            return (
              <a
                key={tab.id}
                className={currentTab === tab.id ? classes.active : ""}
                onClick={() => changeTab(tab.id)}
              >
                {tab.name}
              </a>
            );
          })}
        </div>
        <div className={`${classes.tabContent}`}>
          {/* 기록 */}
          {
            // TODO : 기록 컴포넌트
            currentTab === "record" && (
              <div
                className={`pddSide20 listCont ${classes.bgGray}`}
                style={{ paddingBottom: 80 }}
              >
                <div>
                  <div className={`${classes.recordTitle}`} onClick={""}>
                    <span className={`visualSelect`}>
                      전체
                      <IcoArrow />
                    </span>
                  </div>
                  <ul className={`eventBox`}>
                    <li>
                      <div className={`listEvent dsFlex`}>
                        <div>
                          <strong className={`eventTitle`}>
                            멍멍런! 챌린지
                          </strong>
                          <span className={`markRoundCom`}>챌린지</span>
                        </div>
                        <div className={`btnWrap`}>
                          <button type="button" className={`btn`}>
                            <span className={`hide`}>더보기</span>
                            <IcoArrow />
                          </button>
                        </div>
                      </div>
                      <div className={`result`}>
                        <span className={`resultText`}>
                          <span className={`roboto`}>12.300</span>걸음
                        </span>
                        <span className={`resultText roboto`}>5L</span>
                        <span className={`resultText roboto`}>18:01~19:50</span>
                      </div>
                    </li>
                    <li>
                      <div className={`listEvent dsFlex`}>
                        <div>
                          <strong className={`eventTitle`}>직장인 런!</strong>
                          <span className={`markRoundCom`}>CREW</span>
                        </div>
                        <div className={`btnWrap`}>
                          <button type="button" className={`btn`}>
                            <span className={`hide`}>더보기</span>
                            <IcoArrow />
                          </button>
                        </div>
                      </div>
                      <div className={`result`}>
                        <span className={`resultText`}>
                          <span className={`roboto`}>8.682</span>걸음
                        </span>
                        <span className={`resultText roboto`}>10L</span>
                        <span className={`resultText roboto`}>06:00~06:30</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )
          }
          {/* 인증 */}
          {
            // TODO : 인증 컴포넌트
            currentTab === "auth" && <div className={classes.listCont}></div>
          }
        </div>
      </section>
    </>
  );
}

export default RecordLanding;
