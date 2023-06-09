import classes from "./Home.module.css";
import IcoPerson from "../components/ui/IcoPerson.jsx";
import Heart from "../components/ui/Heart.jsx";
import plogLevel from "../assets/images/plogLevel.png";
import bgSample01 from "../assets/images/bgSample01.png";
import bgSample02 from "../assets/images/bgSample02.png";
import IcoRunning from "../components/ui/IcoRunning";
import { useEffect, useState } from "react";
import http from "./utils/http";
import { getCookie } from "./utils/cookies";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [myPloggingHistory, setMyPloggingHistory] = useState({
    targetTrashLiter: null,
    todayAllExerciseDistance: null,
    todayAllTrashLiter: null,
    todayAllWalkingCount: null,
  });
  const [myCrewList, setMyCrewList] = useState([]);
  const [curBtn, setCurBtn] = useState("all");

  useEffect(() => {
    const getMyPloggingHistory = async () => {
      const response = await http.get("/user/my-plogging-history", {
        userId: getCookie("id"),
      });
      setMyPloggingHistory(response.responseData);
    };

    const getMyCrewList = async () => {
      const response = await http.get("/user/my-crew", {
        userId: getCookie("id"),
      });
      setMyCrewList(response.responseData);
    };

    try {
      // getMyPloggingHistory();
      // getMyCrewList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {/* 오늘의 담깅 */}
      <section className={`pddSide20 ${classes.todayRecord}`}>
        <h2 className={`h2Title`}>
          오늘도 담깅!
          <IcoRunning />
        </h2>
        <div className={`dsFlex ${classes.damggingBox}`}>
          <div className={`${classes.level}`}>
            <div className={`${classes.growingPlant}`}>
              <img src={plogLevel} />
            </div>
            <p className={`roboto tac ${classes.currentState}`}>
              <span className={`green`}>
                {myPloggingHistory.targetTrashLiter || 75}
              </span>
              /<span className={`black`}>100L</span>
            </p>
          </div>
          <div className={`dsFlex ${classes.listArea}`}>
            <div>
              <div className={`tal ${classes.textValue}`}>
                <span className={`roboto black ${classes.num}`}>
                  {myPloggingHistory.todayAllTrashLiter || 20}
                </span>
                <span className={`roboto gray ${classes.unit}`}>L</span>
              </div>
              <div className={`tal ${classes.textValue}`}>
                <span className={`roboto black ${classes.num}`}>
                  {myPloggingHistory.todayAllWalkingCount || 5137}
                </span>
                <span className={`gray ${classes.unit}`}>걸음</span>
              </div>
              <div className={`tal ${classes.textValue}`}>
                <span className={`roboto black ${classes.num}`}>
                  {myPloggingHistory.todayAllExerciseDistance || 3.51}
                </span>
                <span className={`gray ${classes.unit}`}>거리(km)</span>
              </div>
            </div>
            <button
              type="button"
              className={`${classes.btn}`}
              onClick={() => navigate("/TechnomadFront/run")}
            >
              담깅 시작
            </button>
          </div>
        </div>
      </section>
      <section
        className={`pddSide20 visualBanner`}
        onClick={() => navigate("/TechnomadFront/challenge")}
      >
        <div className={`bgArea home`}></div>
        <div className={`textWrap`}>
          <p className={`gray main`}>SeSAC x 테크노마드</p>
          <p className={`desc`}>
            <strong>오</strong>늘의
            <strong>담</strong>깅<strong>완</strong>료!
            <strong className={`.large}`}>오담완 챌린지</strong>
          </p>
        </div>
      </section>
      {/* My 담깅 */}
      <section className={`pddSide20 pdb72 ${classes.myDamgging}`}>
        <h2 className={`h2Title`}>MY 담깅</h2>
        <div className={`tabLink mgb16`}>
          <button
            className={`markRoundCom ${curBtn === "all" ? "active" : ""}`}
            onClick={() => setCurBtn("all")}
          >
            #전체
          </button>
          <button
            className={`markRoundCom ${curBtn === "crew" ? "active" : ""}`}
            onClick={() => setCurBtn("crew")}
          >
            #CREW
          </button>
          <button
            className={`markRoundCom ${curBtn === "challenge" ? "active" : ""}`}
            onClick={() => setCurBtn("challenge")}
          >
            #챌린지
          </button>
          <button
            className={`markRoundCom ${curBtn === "event" ? "active" : ""}`}
            onClick={() => setCurBtn("event")}
          >
            #이벤트
          </button>
        </div>
        <div className={`tabContent`}>
          <div>
            {/* 홈, 크루 공통 사용되는 리스트입니다. */}
            <ul className="dsFlex listRound">
              <li>
                <div className={`image bgSample01`}></div>
                <div className={`detail`}>
                  <span className={`markRoundCom type`}>CREW</span>
                  <p className={`title`}>2030 같이 쓰레기 담을 사람!</p>
                  <div className={`dsFlex mglMinus8 articleAppend`}>
                    <div className={`listDesc`}>
                      <IcoPerson />
                      <span className={`roboto gray`}>15</span>
                    </div>
                    <div className={`listDesc`}>
                      <Heart />
                      <span className={`roboto gray`}>200</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className={`image bgSample02`}></div>
                <div className={`detail`}>
                  <span className={`markRoundCom type`}>챌린지</span>
                  <p className={`title`}>멍멍런! 챌린지</p>
                  <div className={`dsFlex mglMinus8 articleAppend`}>
                    <div className={`listDesc`}>
                      <IcoPerson />
                      <span className={`roboto gray`}>15</span>
                    </div>
                    <div className={`listDesc`}>
                      <Heart />
                      <span className={`roboto gray`}>200</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Home;
