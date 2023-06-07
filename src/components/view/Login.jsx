import KakaoLogin from "react-kakao-login";
import http from "../utils/http";
import { useNavigate } from "react-router-dom";
import markSplash from "../../assets/images/mark_splash.svg";

const Login = () => {
  const navigate = useNavigate();

  const kakaoClientId = "19c04aa22796f9acb5863bdd929c23ef";
  const kakaoOnSuccess = async (data) => {
    console.log(data);
    const id = data.profile.id; // 인가코드 백엔드로 전달
    try {
      await http.post("/common/login", { accountId: id });
      // TODO : 로그인 성공시 홈으로 이동
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("로그인에 실패했습니다.");
    }
  };
  const kakaoOnFailure = (error) => {
    console.log(error);
    alert("로그인에 실패했습니다.");
  };
  return (
    <div id="layoutWrap">
      <section className={`container dsFlex login`}>
        <div className={`slogBox`}>
          <img src={markSplash} />
        </div>
        <div className="loginBox">
          <KakaoLogin
            token={kakaoClientId}
            onSuccess={kakaoOnSuccess}
            onFail={kakaoOnFailure}
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
