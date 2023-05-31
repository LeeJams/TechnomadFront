// import;
import classes from "./Header.module.css";
import markSplash from "../../assets/images/mark_splash.svg";
import footCopyright from "../../assets/images/copyright.svg";

function Splash() {
  return (
    <>
      <div>
        <div className={classes.slogBox}>
          <img src={markSplash} />
        </div>
        <div className={classes.copyright}>
          <img src={footCopyright} />
        </div>
      </div>
    </>
  );
}

export default Splash;
