// import;
import classes from "./CrewDetail.module.css";
import profileSampleDog from "../../assets/images/profile_sample_01.png";
import profileSampleCherry from "../../assets/images/profile_sample_cherry.png";
import profileSampleHangang from "../../assets/images/profile_sample_Hangang.png";
import IcoArrow from "../ui/IcoArrow.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
import IcoChat from "../ui/IcoChat.jsx";
import Heart from "../ui/Heart.jsx";
import BtnEdit from "../ui/BtnEdit.jsx";
import BtnWriteGreen from "../ui/BtnWriteGreen.jsx";
import { useEffect, useState } from "react";
import http from "../utils/http";

const TAB_LIST = [
  { id: "record", name: "기록" },
  { id: "feed", name: "피드" },
  { id: "rank", name: "랭킹" },
  { id: "auth", name: "인증" },
];

function CrewDetail() {
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
    <div id="layoutWrap">
      {/* 상단 배너 및 크루 정보 */}
      <section className={classes.crewDetailInfo}>
        {/* 배너 */}
        <div className={classes.bannerBox}></div>
        <div className={classes.crewInfo}>
          <p className={`crewIntroTitle`}>한강지킴이 모여라!</p>
          <div className={`tagBox`}>
            <span className={`tags`}>#한강 </span>
            <span className={`tags`}>#저녁런 </span>
            <span className={`tags`}>#담깅 </span>
          </div>
          <div className={`dsFlex articleAppend`}>
            <div className={`listDesc`}>
              <IcoPerson />
              <span className={`roboto gray`}>37</span>
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
                    <strong>오늘활동</strong>
                    <span className={`${classes.icoArrow}`}>
                      <IcoArrow />
                    </span>
                  </div>
                  <ul className={`listRecord`}>
                    <li>
                      <div className={`label`}>참여인원(명)</div>
                      <div className={`textValue`}>
                        <span>12</span>
                      </div>
                    </li>
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
                  </ul>
                </div>
                <div>
                  <div className={`${classes.recordTitle}`}>
                    <strong>MY활동</strong>
                  </div>
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
                  </ul>
                </div>
                {/* 버튼 영역 */}
                <div className={`bwCommon ${classes.btnWrap}`}>
                  <button type="button" className={`btnCommon ${classes.btn}`}>
                    담깅 시작하기
                  </button>
                </div>
              </div>
            )
          }
          {/* 피드 */}
          {
            // TODO : 피드 컴포넌트
            currentTab === "feed" && (
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
                    <div className={`dsFlex crewProfile`}>
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
                    오늘 한강에서 달리시는 분 있을까요? 저는 6시에 갈건데
                    시간되면 함께 달려요!
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
                  <button type="button" className={`btnEdit`}>
                    <span className="hide">게시물 수정</span>
                    <BtnEdit />
                  </button>
                </div>
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
                    오늘 한강에서 달리시는 분 있을까요? 저는 6시에 갈건데
                    시간되면 함께 달려요!
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
                  <button type="button" className={`btnEdit`}>
                    <span className="hide">게시물 수정</span>
                    <BtnEdit />
                  </button>
                </div>
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
                    오늘 한강에서 달리시는 분 있을까요? 저는 6시에 갈건데
                    시간되면 함께 달려요!
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
                  <button type="button" className={`btnEdit`}>
                    <span className="hide">게시물 수정</span>
                    <BtnEdit />
                  </button>
                </div>
                <button type="button" className={`${classes.btnWriteGreen}`}>
                  <span className={`hide`}>게시물 작성버튼</span>
                  <BtnWriteGreen />
                </button>
              </div>
            )
          }

          {/* 랭킹 */}
          {
            // TODO : 랭킹 컴포넌트
            currentTab === "rank" && (
              <div className={`bgGreenGradi listCont pddSide20`}>
                <div>
                  <div
                    className={`${classes.recordTitle} ${classes.white}`}
                    onClick={""}
                  >
                    <strong>오늘랭킹</strong>
                    <span className={classes.icoArrow}>
                      <IcoArrow />
                    </span>
                  </div>
                  <div className={`dsFlex ${classes.todayRanked}`}>
                    <div className={`${classes.listRank} ${classes.silver}`}>
                      <div className={classes.profileRanked}>
                        <div className={`${classes.photoBox}`}>
                          <img src={profileSampleDog} />
                        </div>
                        <span className={classes.rank}>2</span>
                      </div>
                      <div className={classes.result}>
                        <strong className={classes.userName}>테크노마드</strong>
                        <div className={`roboto tac ${classes.textValue}`}>
                          <span className={classes.num}>8.00</span>
                          <span className={classes.unit}>L</span>
                        </div>
                      </div>
                    </div>
                    <div className={`${classes.listRank} ${classes.winner}`}>
                      <div className={classes.profileRanked}>
                        <div className={`${classes.photoBox}`}>
                          <img src={profileSampleHangang} />
                        </div>
                        <span className={classes.rank}>1</span>
                      </div>
                      <div className={classes.result}>
                        <strong className={classes.userName}>한강수호대</strong>
                        <div className={`roboto tac ${classes.textValue}`}>
                          <span className={classes.num}>11.11</span>
                          <span className={classes.unit}>L</span>
                        </div>
                      </div>
                    </div>
                    <div className={`${classes.listRank} ${classes.bronze}`}>
                      <div className={classes.profileRanked}>
                        <div className={`${classes.photoBox}`}>
                          <img src={profileSampleCherry} />
                        </div>
                        <span className={classes.rank}>3</span>
                      </div>
                      <div className={classes.result}>
                        <strong className={classes.userName}>체리쨩</strong>
                        <div className={`roboto tac ${classes.textValue}`}>
                          <span className={classes.num}>7.99</span>
                          <span className={classes.unit}>L</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className={`listRecord flStart`}>
                    <li>
                      <div className={`tac listNum`}>4</div>
                      <div className={`userInfo`}>
                        <div className={`photoBox`}>
                          <img src={profileSampleCherry} />
                        </div>
                        <strong className={`userName`}>그리니1</strong>
                      </div>
                      <div className={`roboto tar textValue`}>
                        <span className={`num`}>7.99</span>
                        <span className={`unit`}>L</span>
                      </div>
                    </li>
                    <li>
                      <div className={`tac listNum`}>5</div>
                      <div className={`userInfo`}>
                        <div className={`photoBox`}>
                          <img src={profileSampleCherry} />
                        </div>
                        <strong className={`userName`}>그리니2</strong>
                      </div>
                      <div className={`roboto tar textValue`}>
                        <span className={`num`}>7.99</span>
                        <span className={`unit`}>L</span>
                      </div>
                    </li>
                    <li>
                      <div className={`tac listNum`}>6</div>
                      <div className={`userInfo`}>
                        <div className={`photoBox`}>
                          <img src={profileSampleCherry} />
                        </div>
                        <strong className={`userName`}>그리니3</strong>
                      </div>
                      <div className={`roboto tar textValue`}>
                        <span className={`num`}>7.99</span>
                        <span className={`unit`}>L</span>
                      </div>
                    </li>
                    <li>
                      <div className={`tac listNum`}>7</div>
                      <div className={`userInfo`}>
                        <div className={`photoBox`}>
                          <img src={profileSampleCherry} />
                        </div>
                        <strong className={`userName`}>그리니4</strong>
                      </div>
                      <div className={`roboto tar textValue`}>
                        <span className={`num`}>7.99</span>
                        <span className={`unit`}>L</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )
          }
          {/* 인증 */}
          {/* <div className={classes.listCont}>인증</div> */}
        </div>
      </section>
    </div>
  );
}

export default CrewDetail;
