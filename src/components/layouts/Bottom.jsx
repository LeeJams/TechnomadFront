import classes from "./Bottom.module.css";
import icoRecord from "../../assets/images/icones/ico_record.png";
import IcoCrew from "../ui/IcoCrew.jsx";
import IcoHome from "../ui/IcoHome.jsx";
import IcoChallenge from "../ui/IcoChallenge.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
import IcoLine from "../ui/IcoLine.jsx";
import { NavLink } from "react-router-dom";

function Bottom() {
  const selectColor = (active) => {
    return active ? "#1EC41E" : "#999";
  };

  return (
    <div>
      <div className={classes.bottomBar}>
        <ul className={classes.menuBox}>
          <li className={classes.listMenu}>
            <NavLink to="/crew">
              {({ isActive }) => (
                <>
                  <span className={classes.menuIcon}>
                    <IcoCrew onGreen={selectColor(isActive)} />
                  </span>
                  <span
                    className={classes.menuName}
                    style={{
                      color: selectColor(isActive),
                    }}
                  >
                    크루
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li className={classes.listMenu}>
            <NavLink to="/record">
              {({ isActive }) => (
                <>
                  <span className={classes.menuIcon}>
                    <img src={icoRecord} />
                  </span>
                  <span
                    className={classes.menuName}
                    style={{
                      color: selectColor(isActive),
                    }}
                  >
                    기록
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li className={classes.listMenu}>
            <NavLink to="/">
              {({ isActive }) => (
                <>
                  <span className={classes.menuIcon}>
                    <IcoHome onGreen={selectColor(isActive)} />
                  </span>
                  <span
                    className={classes.menuName}
                    style={{
                      color: selectColor(isActive),
                    }}
                  >
                    홈
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li className={classes.listMenu}>
            <NavLink to="/challenge">
              {({ isActive }) => (
                <>
                  <span className={classes.menuIcon}>
                    <IcoChallenge onGreen={selectColor(isActive)} />
                  </span>
                  <span
                    className={classes.menuName}
                    style={{
                      color: selectColor(isActive),
                    }}
                  >
                    챌린지
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li className={classes.listMenu}>
            <NavLink to="/mypage">
              {({ isActive }) => (
                <>
                  <span className={classes.menuIcon}>
                    <IcoPerson onGreen={selectColor(isActive)} />
                  </span>
                  <span
                    className={classes.menuName}
                    style={{
                      color: selectColor(isActive),
                    }}
                  >
                    마이페이지
                  </span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottom;
