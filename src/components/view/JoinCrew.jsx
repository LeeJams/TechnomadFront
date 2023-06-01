// import;
import classes from "./JoinCrew.module.css";
import visualBannerCrew from "../../assets/images/banner_01.png";

function JoinCrew() {
  return (
    <>
      <section className={classes.visualBanner}>
        <div className={classes.bannerBox}>
          <img src={visualBannerCrew} />
        </div>
        <div className={classes.crewInfo}>
          <span>한강지킴이 모여라!</span>
          <div className={classes.tagBox}>
            <span>#한강</span>
            <span>#한강</span>
            <span>#한강</span>
          </div>
          <div className={classes.crewProfile}></div>
        </div>
      </section>
    </>
  );
}

export default JoinCrew;
