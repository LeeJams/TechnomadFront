// import;
import classes from "./Splash.module.css";
import markSplash from "../../assets/images/mark_splash.svg";
import footCopyright from "../../assets/images/copyright.svg";

function Splash() {
  return (
    <>
      <div id="layoutWrap">
        <section className={classes.container}>
          <div className={classes.slogBox}>
            <img src={markSplash} />
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
