// import;
import classes from "./Crew.module.css";
import profileSampleDog from "../../assets/images/profile_sample_01.png";
import profileSampleCherry from "../../assets/images/profile_sample_cherry.png";
import profileSampleHangang from "../../assets/images/profile_sample_Hangang.png";
import IcoArrow from "../ui/IcoArrow.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
import IcoChat from "../ui/IcoChat.jsx";
import Heart from "../ui/Heart.jsx";
import BtnEdit from "../ui/BtnEdit.jsx";

function Crew() {
  return (
    <>
      {/* 상단 배너 및 크루 정보 */}
      <section className={classes.crewDetailInfo}>
        {/* 배너 */}
        <div className={classes.bannerBox}></div>
        <div className={classes.crewInfo}>
          <p className={`crewIntroTitle`}>한강지킴이 모여라!</p>
          <div className={`tagBox`}>
            <span className={`tags`}>#한강</span>
            <span className={`tags`}>#저녁런</span>
            <span className={`tags`}>#담깅</span>
          </div>
          <div className={`dsFlex articleAppend`}>
            <div className={`listDesc`}>
              <IcoPerson />
              <span className={`roboto gray`}>2,830</span>
            </div>
          </div>
          <p className={classes.introText}>
            안녕하세요. 한강지킴이 러너 모임입니다. 매일 1봉투씩 인증해주세요~
            오늘도 담깅!
          </p>
        </div>
      </section>
      {/* HOT 크루*/}
      <section className={`pddSide20 pdb72 ${classes.hotCrew}`}>
        <h2 className={`h2Title`}>
          <span>HOT 크루</span>
          <span className={classes.icoArrow}>
            <IcoArrow />
          </span>
        </h2>
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

export default Crew;
