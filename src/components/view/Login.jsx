import KakaoLogin from "react-kakao-login";

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
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </div>
  );
};

export default Login;
