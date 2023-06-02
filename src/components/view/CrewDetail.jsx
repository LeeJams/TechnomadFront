// import;
import classes from "./CrewDetail.module.css";
import IcoArrow from "../ui/IcoArrow.jsx";
import visualBannerCrew from "../../assets/images/banner_01.png";

function CrewDetail() {
  return (
    <>
      <section>
        {/* 배너 */}
        <div className={classes.bannerBox}>
          <img src={visualBannerCrew} />
        </div>
      </section>
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
          <div className={`${classes.listCont} ${classes.bgGray}`}>
            <div>
              <div className={classes.recordTitle} onClick={() => ()}>
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
            <div className={classes.btnWrap}>
              <button
                type="button"
                className={`${classes.btn} ${classes.green}`}
              >
                Damging
              </button>
            </div>
          </div>
          {/* <div className={classes.listCont}>2</div>
          <div className={classes.listCont}>3</div>
          <div className={classes.listCont}>4</div> */}
        </div>
      </section>
    </>
  );
}

export default CrewDetail;
