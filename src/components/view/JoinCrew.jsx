// import;
import classes from "./JoinCrew.module.css";
import profileSampleDog from "../../assets/images/profile_sample_01.png";
import Heart from "../ui/Heart.jsx";
import { useEffect, useState } from "react";
import http from "../utils/http";
import { useNavigate } from "react-router-dom";

function JoinCrew() {
  const navigate = useNavigate();
  const [crewInfo, setCrewInfo] = useState({});

  useEffect(() => {
    const getCrewInfo = async () => {
      try {
        // TODO : 크루 정보 조회
        const res = await http.get("/crew/1");
        setCrewInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    //getCrewInfo();
  }, []);

  const joinCrew = async (id) => {
    try {
      // TODO : 크루 가입
      await http.post("/crew/join", { crewId: id });
      alert("크루에 가입되었습니다.");
      // TODO : 가입 후 크루 상세 페이지로 이동
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("크루 가입에 실패했습니다.");
    }
  };

  return (
    <div id="layoutWrap">
      <section className={classes.joinCrew}>
        {/* 배너 */}
        <div className={classes.bannerBox}></div>
        {/* 크루정보 */}
        <div className={`pddSide20 crewInfo pdt16`}>
          <p className={`crewIntroTitle`}>한강지킴이 모여라!</p>
          <div className={`tagBox`}>
            <span className={`tags`}>#한강</span>
            <span className={`tags`}>#저녁런</span>
            <span className={`tags`}>#담깅</span>
          </div>
          <div className={`dsFlex pdb5 crewProfile`}>
            <div className={`photoBox mgr12`}>
              <img src={profileSampleDog} />
            </div>
            <div className={`detailCrewInfo`}>
              <div>
                <strong className={`crewName`}>한강수호대</strong>
                <span className={`markRoundCom`}>프로필</span>
              </div>
              <div className={classes.crewNum}>
                <span className={classes.current}>3</span>
                <span>/</span>
                <span className={classes.total}>15</span>
                <span>&nbsp;&nbsp;명</span>
              </div>
            </div>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className={`bwCommon ${classes.btnWrap}`}>
          <button type="button" className={`dsFlex ${classes.btnHeart}`}>
            <span className={classes.ico}>
              <Heart />
            </span>
            <span className={classes.num}>600</span>
          </button>
          <button
            type="button"
            className={`btnCommon ${classes.btn}`}
            onClick={() => navigate("/TechnomadFront/crew/1")}
          >
            참여하기
          </button>
        </div>
      </section>
    </div>
  );
}

export default JoinCrew;
