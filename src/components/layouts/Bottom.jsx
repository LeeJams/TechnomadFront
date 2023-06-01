// import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./Bottom.module.css";
import icoRecord from "../../assets/images/icones/ico_record.png";
import IcoCrew from "../ui/IcoCrew.jsx";
import IcoHome from "../ui/IcoHome.jsx";
import IcoChallenge from "../ui/IcoChallenge.jsx";
import IcoPerson from "../ui/IcoPerson.jsx";

function Bottom() {
  const [color, setColor] = useState("#999");

  const colorHandler = () => {
    setColor("#1EC41E");
  };

  return (
    <div>
      <div className={classes.bottomBar}>
        <ul className={classes.menuBox}>
          <li className={classes.listMenu}>
            <a href="#">
              <span className={classes.menuIcon} onClick={colorHandler}>
                <IcoCrew onGreen={color} />
              </span>
              <span className={classes.menuName}>크루</span>
            </a>
          </li>
          <li className={classes.listMenu}>
            <a href="#">
              <span className={classes.menuIcon}>
                <img src={icoRecord} />
              </span>
              <span className={classes.menuName}>기록</span>
            </a>
          </li>
          <li className={classes.listMenu}>
            <a href="#">
              <span className={classes.menuIcon}>
                <IcoHome />
              </span>
              <span className={`${classes.menuName} bold`}>홈</span>
            </a>
          </li>
          <li className={classes.listMenu}>
            <a href="#">
              <span className={classes.menuIcon}>
                <IcoChallenge />
              </span>
              <span className={classes.menuName}>챌린지</span>
            </a>
          </li>
          <li className={classes.listMenu}>
            <a href="#">
              <span className={classes.menuIcon}>
                <IcoPerson />
              </span>
              <span className={classes.menuName}>마이페이지</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottom;
