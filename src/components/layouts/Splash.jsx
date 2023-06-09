// import;
import classes from "./Splash.module.css";
import markSplash from "../../assets/images/mark_splash.svg";
import footCopyright from "../../assets/images/copyright.svg";

function Splash() {
  return (
    <>
      <div id="layoutWrap">
        <section className={classes.container}>
          <div className={`slogBox`}>
            <img src={markSplash} />
            <span className={`black`}>
              지구를 지키는 <strong>가벼운 습관</strong>
            </span>
          </div>
          <div className={classes.copyright}>
            <img src={footCopyright} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Splash;
