import { useEffect, useState } from "react";
import classes from "../StartPlogging.module.css";
import { useNavigate } from "react-router-dom";
const { kakao } = window;
import IcoCompass from "../../ui/IcoCompass.jsx";

export default function Map() {
  const navigate = useNavigate();
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState([]); //

  useEffect(() => {
    const getCurLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, () => {
          alert("현재 위치를 가져올 수 없습니다.");
          navigate(-1);
        });
      } else {
        alert("GPS를 사용할 수 없습니다. 위치정보 설정을 확인해주세요.");
        navigate(-1);
      }
    };
    getCurLocation();
  }, [navigate]);

  const success = (position) => {
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        ), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    let kakaoMap = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    setMap(kakaoMap);
  };

  useEffect(() => {
    const makeLine = setInterval(() => {
      if (map) {
        // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
        let linePath = position;

        // 지도에 표시할 선을 생성합니다
        var polyline = new kakao.maps.Polyline({
          path: linePath, // 선을 구성하는 좌표배열 입니다
          strokeWeight: 5, // 선의 두께 입니다
          strokeColor: "#FFAE00", // 선의 색깔입니다
          strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid", // 선의 스타일입니다
        });

        // 지도에 선을 표시합니다
        polyline.setMap(map);
      }
    }, 5000);
    return () => clearInterval(makeLine);
  }, [map, position]);

  useEffect(() => {
    const position = setInterval(() => {
      if (map) {
        navigator.geolocation.getCurrentPosition((position) => {
          const moveLatLon = new kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          setPosition((prev) => {
            prev.push(moveLatLon);
            return prev;
          });
        });
      }
    }, 5000);
    return () => clearInterval(position);
  }, [map]);

  const moveToCurLocation = () => {
    if (map) {
      navigator.geolocation.getCurrentPosition((position) => {
        const moveLatLon = new kakao.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        map.panTo(moveLatLon);
      });
    }
  };
  return (
    <section className={`mapArea`}>
      {/* Map 영역 */}
      <div className={`mapBox`} id="map">
        {/* 이 위치에 넣어주세요 */}
      </div>
      <button
        type="button"
        className={classes.btnCompass}
        onClick={moveToCurLocation}
      >
        <span className="hide">현재위치보기</span>
        <IcoCompass />
      </button>
    </section>
  );
}
