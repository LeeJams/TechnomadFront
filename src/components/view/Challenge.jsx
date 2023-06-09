// import;
import classes from "./Crew.module.css";
import IcoArrow from "../ui/IcoArrow.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
import IcoLook from "../ui/IcoLook.jsx";
import IcoIng from "../ui/IcoIng.jsx";
import Heart from "../ui/Heart.jsx";
import BtnAdd from "../ui/BtnAdd.jsx";
import BtnSearch from "../ui/BtnSearch.jsx";
import BtnAlert from "../ui/BtnAlert.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

function Challenge() {
  return (
    <>
      {/* 헤더 */}
      <header className={`header`}>
        <div className={`container`}>
          <h2 className={`titleArea`}>
            <span className={`pageName`}>챌린지</span>
          </h2>
          <div className={`btnWrap`}>
            <button type="button">
              <BtnSearch />
            </button>
            <button type="button">
              <BtnAlert />
            </button>
          </div>
        </div>
      </header>
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
      {/* 참여 중인 챌린지 */}
      <section className={`${classes.myCrew}`}>
        <h2 className={`h2Title dsFlex pddSide20`}>
          참여 중인 챌린지
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
                <div className={`bgBox thr`}>
                  <div className={`bgImg`}></div>
                </div>
                <span className={`listName`}>한강코스 도그런</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* 주목할 만한 챌린지 */}
      <section className={`pddSide20`}>
        <h2 className={`h2Title dsFlex`}>
          <span>
            주목할 만한 챌린지
            <IcoLook />
          </span>
          <span>
            <IcoArrow />
          </span>
        </h2>
        <div className={`mgb16`}>
          {/* 홈, 크루 공통 사용되는 리스트입니다. */}
          <ul className="dsFlex listRound">
            <li>
              <div className={`image bgSample05`}></div>
              <div className={`detail`}>
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
      <section className={`pddSide20 visualBanner challenge`}>
        <div className={`bgArea`}></div>
        <div className={`textWrap`}>
          <p className={`gray main`}>이벤트</p>
          <p className={`desc`}>
            30일 담깅 인증하면
            <br />
            도넛 기프티콘 당첨 기회!
          </p>
        </div>
      </section>
      <section className={`pddSide20 pdb72`}>
        <h2 className={`h2Title dsFlex`}>
          <span>
            진행중인 챌린지
            <IcoIng />
          </span>
          <span>
            <IcoArrow />
          </span>
        </h2>
        <div className={`mgb16`}>
          {/* 홈, 크루 공통 사용되는 리스트입니다. */}
          <ul className="dsFlex listRound">
            <li>
              <div className={`image bgSample06`}></div>
              <div className={`detail`}>
                <p className={`title`}>새싹톤 X 수달보호</p>
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
              <div className={`image bgSample03`}></div>
              <div className={`detail`}>
                <p className={`title`}>26주 담깅 완주</p>
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
              <div className={`image bgSample05`}></div>
              <div className={`detail`}>
                <p className={`title`}>담배꽁초 줍기 마라톤</p>
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
                <p className={`title`}>하루 0.5리터 담기</p>
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
