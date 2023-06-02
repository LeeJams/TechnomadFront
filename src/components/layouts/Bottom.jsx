import classes from "./Bottom.module.css";
import icoRecord from "../../assets/images/icones/ico_record.png";
import IcoCrew from "../ui/IcoCrew.jsx";
import IcoHome from "../ui/IcoHome.jsx";
import IcoChallenge from "../ui/IcoChallenge.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
import { Link, useLocation } from "react-router-dom";

function Bottom() {
  const { pathname } = useLocation();

  const selectColor = (path) => {
    return pathname.includes(path) ? "#1EC41E" : "#999";
  };

  return (
    <div>
      <div className={classes.bottomBar}>
        <ul className={classes.menuBox}>
          <li className={classes.listMenu}>
            <Link to="/crew">
              <span className={classes.menuIcon}>
                <IcoCrew onGreen={selectColor("/crew")} />
              </span>
              <span
                className={classes.menuName}
                style={{
                  color: selectColor("/crew"),
                }}
              >
                크루
              </span>
            </Link>
          </li>
          <li className={classes.listMenu}>
            <Link to="/record">
              <span className={classes.menuIcon}>
                <img src={icoRecord} />
              </span>
              <span
                className={classes.menuName}
                style={{
                  color: selectColor("/record"),
                }}
              >
                기록
              </span>
            </Link>
          </li>
          <li className={classes.listMenu}>
            <Link to="/">
              <span className={classes.menuIcon}>
                <IcoHome onGreen={selectColor("/")} />
              </span>
              <span
                className={`${classes.menuName} bold`}
                style={{
                  color: selectColor("/"),
                }}
              >
                홈
              </span>
            </Link>
          </li>
          <li className={classes.listMenu}>
            <Link to="/challenge">
              <span className={classes.menuIcon}>
                <IcoChallenge onGreen={selectColor("/challenge")} />
              </span>
              <span
                className={classes.menuName}
                style={{
                  color: selectColor("/challenge"),
                }}
              >
                챌린지
              </span>
            </Link>
          </li>
          <li className={classes.listMenu}>
            <Link to="mypage">
              <span className={classes.menuIcon}>
                <IcoPerson onGreen={selectColor("/mypage")} />
              </span>
              <span
                className={classes.menuName}
                style={{
                  color: selectColor("/mypage"),
                }}
              >
                마이페이지
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottom;
