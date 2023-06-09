// import;
// import classes from "./CrewDetail.module.css";
import confirmSample01 from "../../assets/images/confirmSample01.png";
import confirmSample02 from "../../assets/images/confirmSample02.png";
// import IcoArrow from "../ui/IcoArrow.jsx";
import BtnShare from "../ui/BtnShare.jsx";
import IcoSprout from "../ui/IcoSprout.jsx";
import BtnEdit from "../ui/BtnEdit.jsx";
import IcoCamera from "../ui/IcoCamera.jsx";
// import Heart from "../ui/Heart.jsx";

function Result() {
  return (
    <>
      {/* 담깅 결과 */}
      <section className={`resultArea`}>
        <header className={`header`}>
          <div className={`container`}>
            <div className={`titleArea`}>
              <span className={`pageName`}>담깅 결과</span>
            </div>
          </div>
          <div className={`container sub`}>
            <div className={`titleArea`}>
              <span className={`pageName sub`}>
                기록
                <em>2023.06.09&nbsp;13:00-14:23</em>
              </span>
            </div>
            <div className={`btnWrap`}>
              <button type="button">
                <BtnShare />
              </button>
            </div>
          </div>
        </header>
        <div className={`mapArea`}>
          <div className={`mapBox`}></div>
        </div>

        <div className={`pddSide20 pddUd20`}>
          <ul className={`listRecord`}>
            <li>
              <div className={`label`}>수거한 쓰레기(L)</div>
              <div className={`textValue`}>
                <span>12</span>
              </div>
            </li>
            <li>
              <div className={`label`}>걸음</div>
              <div className={`textValue`}>
                <span>56.01</span>
              </div>
            </li>
            <li>
              <div className={`label`}>거리(KM)</div>
              <div className={`textValue`}>
                <span>260.800</span>
              </div>
            </li>
            <li>
              <div className={`label`}>소요시간</div>
              <div className={`textValue`}>
                <span>24.81</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className={`uploadArea pdb72`}>
        <div className={`confirm`}>
          <h2 className={`h2Title dsFlex pddSide20`}>
            <span>
              담깅인증
              <IcoSprout />
            </span>
            <button type="button" className={`btnUpload`}>
              <IcoCamera />
              추가인증
            </button>
          </h2>
          <div className="uploaded">
            <img src={confirmSample01} />
          </div>
        </div>
        <div className={`write`}>
          <h2 className={`h2Title dsFlex pddSide20`}>
            <span>담깅일지</span>
            <button type="button" className={`btnEdit`}>
              <span className="hide">게시물 수정</span>
              <BtnEdit />
            </button>
          </h2>
          <div className={`writeBox`}>
            <div className={`uploaded`}>
              <img src={confirmSample02} />
            </div>
            <p className={`writeText pddSide20`}>
              오랜만에 하는 플로깅. 화창한 날씨 덕에 제대로 된 런닝을 해서
              뿌듯했다. 하지만 새벽 동안 머물다 간 사람들이 버리고 간 곳곳의
              쓰레기들이 여전히 많이 보여서 아쉬웠다. 내가 지나온 길이
              깨끗해지는 뿌듯함 가득한 하루다.
              <span className={`gray`}>32분전</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Result;
