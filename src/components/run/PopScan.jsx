// import;
import IcoFlash from "../ui/IcoFlash.jsx";
import IcoLighter from "../ui/IcoLighter.jsx";
import IcoPicture from "../../assets/images/ico_picture.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function PopScan({ floggingInfo }) {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const inputFile = useRef(null);
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    setFile(files[0]);
    console.log(files);
  };
  const onFileClick = () => {
    inputFile.current.click();
  };

  useEffect(() => {
    if (file) {
      navigate(`/TechnomadFront/result`, {
        state: { file, ...floggingInfo },
      });
    }
  }, [file, floggingInfo, navigate]);

  return (
    <>
      {/* 인증촬영 팝업 */}
      <div id="popTakePicture" className={`popLayer top open`}>
        <div className={`inner`}>
          <div className={`popCont`}>
            <div className={`cont`}>
              <div className={`whiteBox`}>
                <p className={`mainText`}>
                  담깅 종료!
                  <br />
                  인증 촬영을 시작합니다.
                </p>
                <p className={`icoPicture`}>
                  <img src={IcoPicture} />
                </p>
                <ul className={`dsFlex pddSide20 caution`}>
                  <li>
                    <IcoLighter />
                    <p>
                      밝은 배경에서
                      <br />
                      촬영해주세요.
                    </p>
                  </li>
                  <li>
                    <IcoFlash />
                    <p>
                      빛이 반사되지
                      <br />
                      않도록 주의해주세요.
                    </p>
                  </li>
                </ul>
                <div className={`btnWrap`}>
                  <button type="button" className={`btnCommon gray`}>
                    돌아가기
                  </button>
                  <input
                    style={{ display: "none" }}
                    ref={inputFile}
                    type="file"
                    accept="image/*"
                    capture="camera"
                    onChange={onFileChange}
                  />
                  <button
                    type="button"
                    className={`btnCommon`}
                    onClick={onFileClick}
                  >
                    인증 촬영
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 배경 */}
        <span className={`popLayerBg`}></span>
      </div>
    </>
  );
}

export default PopScan;
