import KakaoLogin from "react-kakao-login";
import markSplash from "../../assets/images/mark_splash.svg";

const Login = () => {
  const kakaoClientId = "19c04aa22796f9acb5863bdd929c23ef";
  const kakaoOnSuccess = async (data) => {
    console.log(data);
    const idToken = data.response.access_token; // 인가코드 백엔드로 전달
    console.log(idToken);
  };
  const kakaoOnFailure = (error) => {
    console.log(error);
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
