// import;Crew
import classes from "./Crew.module.css";
import bgSample03 from "../../assets/images/bgSample03.png";
import bgSample04 from "../../assets/images/bgSample04.png";
import IcoArrow from "../ui/IcoArrow.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
import Heart from "../ui/Heart.jsx";
import BtnAdd from "../ui/BtnAdd.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

function Challenge() {
  return (
    <>
      <section className={`slideBanner challenge`}>
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
              <div className={`bgArea bg03`}>
                <div className={`textWrap tal`}>
                  <p className={`main white`}>
                    <span className={`smalltxt`}>야생동물 지키기 챌린지</span>
                    새싹톤 X 수달보호 듀잇런
                  </p>
                  <p className={`desc white`}>2023.04.01~2023.06.30</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`bgArea bg04`}>
                <div className={`textWrap tal`}>
                  <p className={`main`}>
                    <span className={`smalltxt`}>매주 참가하는 재미</span>
                    26주 완성, 퍼펙트 그린 플랜!
                  </p>
                  <p className={`desc gray`}>2023.06.01~2023.06.30</p>
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
              <a href="#">
                <div className={`bgBox fst`}>
                  <div className={`bgImg`}></div>
                </div>
                <span className={`listName`}>한강런!!</span>
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
        <div className={`mgb16`}>
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
      </section>
    </>
  );
}

export default Challenge;
