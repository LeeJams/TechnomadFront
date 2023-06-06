// import;
import classes from "./Home.module.css";
// import profileSampleHangang from "../../assets/images/profile_sample_Hangang.png";
// import IcoArrow from "../ui/IcoArrow.jsx";
import IcoPerson from "../components/ui/IcoPerson.jsx";
import Heart from "../components/ui/Heart.jsx";
import plogLevel from "../assets/images/plogLevel.png";
import bgSample01 from "../assets/images/bgSample01.png";
import bgSample02 from "../assets/images/bgSample02.png";
import IcoRunning from "../components/ui/IcoRunning";

function CrewDetail() {
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
              <span className={`green`}>32L</span>/
              <span className={`black`}>100L</span>
            </p>
          </div>
          <div className={`dsFlex ${classes.listArea}`}>
            <div>
              <div className={`tal ${classes.textValue}`}>
                <span className={`roboto black ${classes.num}`}>13.2</span>
                <span className={`roboto gray ${classes.unit}`}>L</span>
              </div>
              <div className={`tal ${classes.textValue}`}>
                <span className={`roboto black ${classes.num}`}>12.560</span>
                <span className={`gray ${classes.unit}`}>걸음</span>
              </div>
              <div className={`tal ${classes.textValue}`}>
                <span className={`roboto black ${classes.num}`}>13.2</span>
                <span className={`gray ${classes.unit}`}>거리(km)</span>
              </div>
            </div>
            <button type="button" className={`${classes.btn}`}>
              담깅 시작
            </button>
          </div>
        </div>
      </section>
      <section className={`pddSide20 ${classes.visualBanner}`}>
        <div className={`${classes.bgArea}`}></div>
        <div className={`${classes.textWrap}`}>
          <p className={`gray ${classes.main}`}>SeSAC x 테크노마드</p>
          <p className={`${classes.desc}`}>
            <strong>오</strong>늘의
            <strong>담</strong>깅<strong>완</strong>료!
            <strong className={`${classes.large}`}>오담완 챌린지</strong>
          </p>
        </div>
      </section>
      {/* My 담깅 */}
      <section className={`pddSide20 pdb72 ${classes.myDamgging}`}>
        <h2 className={`h2Title`}>MY 담깅</h2>
        <div className={`tabLink mgb16`}>
          <a href="#" className={`markRoundCom active`}>
            #전체
          </a>
          <a href="#" className={`markRoundCom`}>
            #CREW
          </a>
          <a href="#" className={`markRoundCom`}>
            #챌린지
          </a>
          <a href="#" className={`markRoundCom`}>
            #이벤트
          </a>
        </div>
        <div className={`tabContent`}>
          <div>
            {/* 홈, 크루 공통 사용되는 리스트입니다. */}
            <ul className="dsFlex listRound">
              <li>
                <div className={`image`}>
                  <img src={bgSample01} />
                </div>
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
                <div className={`image`}>
                  <img src={bgSample02} />
                </div>
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

export default CrewDetail;
