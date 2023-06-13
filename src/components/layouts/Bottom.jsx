import classes from "./Bottom.module.css";
// import icoRecord from "../../assets/images/icones/ico_record.png";
import IcoCrew from "../ui/IcoCrew.jsx";
import IcoHome from "../ui/IcoHome.jsx";
import IcoChallenge from "../ui/IcoChallenge.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";
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
            <NavLink to="/TechnomadFront/crew">
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
            <NavLink to="/TechnomadFront/record">
              {({ isActive }) => (
                <>
                  <span
                    className={`${classes.menuIcon} ${classes.recordBg} ${
                      isActive && classes.active
                    }`}
                  ></span>
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
            <NavLink to="/TechnomadFront/" end>
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
            <NavLink to="/TechnomadFront/challenge">
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
          <li className={`${classes.listMenu} ${classes.icoMy}`}>
            <NavLink onClick={() => alert("준비중입니다 :3")}>
              <>
                <span className={classes.menuIcon}>
                  <IcoPerson onGreen={selectColor()} />
                </span>
                <span
                  className={classes.menuName}
                  style={{
                    color: selectColor(),
                  }}
                >
                  마이페이지
                </span>
              </>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottom;
