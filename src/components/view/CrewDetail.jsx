// import;
import classes from "./CrewDetail.module.css";
import profileSampleDog from "../../assets/images/profile_sample_01.png";
import profileSampleCherry from "../../assets/images/profile_sample_cherry.png";
import IcoArrow from "../ui/IcoArrow.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
import IcoChat from "../ui/IcoChat.jsx";
import Heart from "../ui/Heart.jsx";
import BtnEdit from "../ui/BtnEdit.jsx";

function CrewDetail() {
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

      {/* 탭메뉴 및 컨텐츠 */}
      <section>
        {/* 탭메뉴 */}
        <div className={classes.tabLink}>
          <a href="#" className={classes.active}>
            기록
          </a>
          <a href="#">피드</a>
          <a href="#">랭킹</a>
          <a href="#">인증</a>
        </div>
        <div className={classes.tabContent}>
          {/* 기록 */}
          <div className={`${classes.listCont} ${classes.bgGray}`}>
            <div>
              <div className={classes.recordTitle} onClick={""}>
                <strong>오늘의 활동</strong>
                <span className={classes.icoArrow}>
                  <IcoArrow />
                </span>
              </div>
              <ul className={classes.listRecord}>
                <li>
                  <div className={classes.label}>참여인원(명)</div>
                  <div className={classes.textValue}>
                    <span>12</span>
                  </div>
                </li>
                <li>
                  <div className={classes.label}>수거한 쓰레기(L)</div>
                  <div className={classes.textValue}>
                    <span>56.01</span>
                  </div>
                </li>
                <li>
                  <div className={classes.label}>걸음</div>
                  <div className={classes.textValue}>
                    <span>260.800</span>
                  </div>
                </li>
                <li>
                  <div className={classes.label}>거리(KM)</div>
                  <div className={classes.textValue}>
                    <span>24.81</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className={classes.recordTitle}>
                <strong>MY활동</strong>
              </div>
              <ul className={classes.listRecord}>
                <li>
                  <div className={classes.label}>수거한 쓰레기(L)</div>
                  <div className={classes.textValue}>
                    <span>56.01</span>
                  </div>
                </li>
                <li>
                  <div className={classes.label}>걸음</div>
                  <div className={classes.textValue}>
                    <span>260.800</span>
                  </div>
                </li>
                <li>
                  <div className={classes.label}>거리(KM)</div>
                  <div className={classes.textValue}>
                    <span>24.81</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* 버튼 영역 */}
            <div className={`bwCommon ${classes.btnWrap}`}>
              <button type="button" className={`btnGrCommon ${classes.btn}`}>
                담깅 시작하기
              </button>
            </div>
          </div>
          {/* 피드 */}
          <div className={classes.listCont}>
            {/* 공지글 */}
            <div className={classes.feed}>
              <span className={`markRoundCom ${classes.notice}`}>공지</span>
              <div className={`crewInfo`}>
                <div className={`dsFlex pdb16 crewProfile`}>
                  <div className={`photoBox mgr12`}>
                    <img src={profileSampleDog} />
                  </div>
                  <div className={`detailCrewInfo`}>
                    <div>
                      <strong className={`crewName`}>한강수호대</strong>
                      <span className={`markRoundCom leader`}>리더</span>
                    </div>
                    <div className={classes.recentInfo}>
                      <span className={classes.time}>6시간 전</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className={classes.insertCont}>
                한강지킴이 크루 규칙입니다. 필독사항!
                <br />
                1. 크루활동은 자유롭게 언제든지 가능합니다.
                <br />
                2. 자주... <span className={`gray`}>더보기</span>
              </p>
              <div className={`dsFlex mglMinus8 articleAppend`}>
                <div className={`listDesc`}>
                  <IcoChat />
                  <span className={`roboto gray`}>15</span>
                </div>
                <div className={`listDesc`}>
                  <Heart />
                  <span className={`roboto gray`}>200</span>
                </div>
              </div>
            </div>
            {/* 일반게시글 */}
            <div className={classes.feed}>
              <div className={`crewInfo`}>
                <div className={`dsFlex pdb16 crewProfile`}>
                  <div className={`photoBox mgr12`}>
                    <img src={profileSampleCherry} />
                  </div>
                  <div className={`detailCrewInfo`}>
                    <div>
                      <strong className={`crewName`}>체리쨩</strong>
                    </div>
                    <div className={classes.recentInfo}>
                      <span className={classes.time}>6시간 전</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className={classes.insertCont}>
                오늘 한강에서 달리시는 분 있을까요? 저는 6시에 갈건데 시간되면
                함께 달려요!
              </p>
              <div className={`dsFlex mglMinus8 articleAppend`}>
                <div className={`listDesc`}>
                  <IcoChat />
                  <span className={`roboto gray`}>15</span>
                </div>
                <div className={`listDesc`}>
                  <Heart />
                  <span className={`roboto gray`}>200</span>
                </div>
              </div>
              <button type="button" className={classes.btnEdit}>
                <span className="hide">게시물 수정</span>
                <BtnEdit />
              </button>
            </div>
          </div>
          {/* 랭킹 */}
          <div className={classes.listCont}>
            3
            <br />
            <br />
          </div>
          {/* 인증 */}
          {/* <div className={classes.listCont}>인증</div> */}
        </div>
      </section>
    </>
  );
}

export default CrewDetail;
