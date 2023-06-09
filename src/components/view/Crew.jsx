// import;Crew
import classes from "../view/Crew.module.css";
import bgSample03 from "../../assets/images/bgSample03.png";
import bgSample04 from "../../assets/images/bgSample05.png";
import IcoArrow from "../ui/IcoArrow.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
import Heart from "../ui/Heart.jsx";
import BtnAdd from "../ui/BtnAdd.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";

function Crew() {
  const navigate = useNavigate();

  return (
    <>
      <section className={`slideBanner`}>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {/* https://swiperjs.com/demos 참고.... */}
          <Swiper
            pagination={{
              type: "fraction",
            }}
            effect={"fade"}
            modules={[EffectFade, Autoplay, Pagination]}
            autoplay={{ delay: 3500 }}
            className="mySwiper"
            loop={true}
          >
            <SwiperSlide>
              <div className={`bgArea bg01`}>
                <div className={`textWrap tal`}>
                  <p className={`main`}>
                    <span className={`smalltxt`}>5월이니까</span>
                    담깅도 설레나봄
                  </p>
                  <p className={`desc`}>
                    #담깅이 준비한 #플로깅백 #인증 #이벤트
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`bgArea bg02`}>
                <div className={`textWrap tal`}>
                  <p className={`main`}>
                    <span className={`smalltxt`}>멍멍런</span>
                    우리집 강아지 보러 올래?
                  </p>
                  <p className={`desc`}>산책도 하고 담깅도 하고~</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* 마이크루 */}
      <section className={`${classes.myCrew}`}>
        <h2 className={`h2Title dsFlex pddSide20`}>
          MY 크루
          <span>
            <IcoArrow />
          </span>
        </h2>
        <div className="horizontalBox pddSide20">
          <ul className={`listHoriRound`}>
            <li className={`add`}>
              <button type="button" className={`addNew`}>
                <span className={`hide`}>크루 추가하기</span>
                <BtnAdd />
              </button>
            </li>
            <li>
              <a onClick={() => navigate("/TechnomadFront/crew/1")}>
                <div className={`bgBox fst`}>
                  <div className={`bgImg`}></div>
                </div>
                <span className={`listName`}>한강지킴이 모여라!</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={`bgBox sec`}>
                  <div className={`bgImg`}></div>
                </div>
                <span className={`listName`}>용산방위대 하루2km</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={`bgBox thr`}>
                  <div className={`bgImg`}></div>
                </div>
                <span className={`listName`}>한강코스 도그런</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={`bgBox for`}>
                  <div className={`bgImg`}></div>
                </div>
                <span className={`listName`}>한강코스 도그런</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* HOT크루 */}
      <section className={`pddSide20 pdb72 ${classes.hotCrew}`}>
        <h2 className={`h2Title dsFlex`}>
          HOT 크루
          <span>
            <IcoArrow />
          </span>
        </h2>
        <div className={`tabLink mgb16`}>
          <button className={`markRoundCom active`}>#서울</button>
          <button className={`markRoundCom`}>#한강</button>
          <button className={`markRoundCom`}>#관악구</button>
          <button className={`markRoundCom`}>#마라톤준비</button>
          <button className={`markRoundCom`}>#MZ</button>
          <button className={`markRoundCom`}>#도그런</button>
          <button className={`markRoundCom`}>#퇴근길</button>
        </div>
        <div className={`tabContent`}>
          <div>
            {/* 홈, 크루 공통 사용되는 리스트입니다. */}
            <ul className="dsFlex listRound">
              <li>
                <div className={`image`}>
                  <img src={bgSample03} />
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
                  <img src={bgSample04} />
                </div>
                <div className={`detail`}>
                  <span className={`markRoundCom type`}>챌린지</span>
                  <p className={`title`}>퇴근하는 직장인런</p>
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
