// import;
import classes from "./CrewDetail.module.css";
import profileSampleDog from "../../assets/images/profile_sample_01.png";
import profileSampleCherry from "../../assets/images/profile_sample_cherry.png";
import profileSampleHangang from "../../assets/images/profile_sample_Hangang.png";
import profileSampleWoman from "../../assets/images/profile_sample_woman.png";
import feedImg from "../../assets/images/banner_2.png";
import IcoArrow from "../ui/IcoArrow.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
import IcoChat from "../ui/IcoChat.jsx";
import Heart from "../ui/Heart.jsx";
import BtnEdit from "../ui/BtnEdit.jsx";
import BtnWriteGreen from "../ui/BtnWriteGreen.jsx";
import BtnBackpage from "../ui/BtnBackpage.jsx";
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
      <section className={classes.RecordCalendar}></section>

      {/* 탭메뉴 및 컨텐츠 */}
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
                        <span className={`resultText`}>5L</span>
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
                          <span className={`roboto`}>86.500</span>걸음
                        </span>
                        <span className={`resultText`}>5L</span>
                        <span className={`resultText roboto`}>09:00~10:00</span>
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
