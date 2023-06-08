// import;
import { useState } from "react";
import classes from "./Header.module.css";
import profileSampleDog from "../../assets/images/profile_sample_01.png";
import BtnSearch from "../ui/BtnSearch.jsx";
import BtnAlert from "../ui/BtnAlert.jsx";
import BtnBackpage from "../ui/BtnBackpage.jsx";
import BtnShare from "../ui/BtnShare.jsx";
import BtnHamburger from "../ui/BtnHamburger.jsx";

function Header() {
  // let bgBlue = {
  //   backgroundColor: "aliceblue",
  // };
  // let bgPink = {
  //   backgroundColor: "pink",
  // };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    console.log(files);
  };

  return (
    <div>
      <header className={classes.header}>
        {/* 홈 헤더 */}
        <div className={classes.container}>
          <h2 className={classes.headTitle}>
            <span>오늘도 힘차게 담깅!</span>
            <span>
              <strong className={classes.userName}>테크노마드</strong> 님
              반가워요.
            </span>
          </h2>
          <div className={classes.photoBox}>
            <img src={profileSampleDog} />
          </div>
        </div>
        {/* <input
          type="file"
          accept="image/*"
          capture="camera"
          onChange={onFileChange}
        /> */}
        {/* 플로깅 페이지 헤더 */}
        {/* <div className={classes.container}>
          <h2 className={classes.headTitle}>
            <em className={classes.textStart}>
              <span className="textDate">5월 29일</span>
              한강지킴이 모여라!
            </em>
          </h2>
        </div> */}

        {/* 서브페이지 헤더 */}
        {/* <div className={classes.container}>
          <div className={classes.titleArea}>
            <button type="button">
              <BtnBackpage />
            </button>
            <span className={`${classes.pageName} roboto`}>CREW</span>
          </div>
          <div className={classes.btnWrap}>
            <button type="button">
              <BtnSearch />
            </button>
            <button type="button">
              <BtnAlert />
            </button>

            <button type="button">
              <BtnShare />
            </button>
            <button type="button">
              <BtnHamburger />
            </button>
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default Header;
