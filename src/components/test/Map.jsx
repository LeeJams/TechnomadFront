import { useCallback, useEffect, useState } from "react";

const { kakao } = window;

export default function Map() {
  const [curLocation, setCurLocation] = useState([[0, 0]]);

  const makeLine = useCallback((map) => {
    // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
    var linePath = curLocation.map((location) => {
      return new kakao.maps.LatLng(location[0], location[1]);
    });

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
  });

  function success(position) {
    // setInterval(() => {
    setCurLocation((prev) => {
      prev.push([position.coords.latitude, position.coords.longitude]);
      return prev;
    });
    // }, 5000);
  }

  function error() {
    alert("현재 위치를 가져올 수 없음");
  }

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826005485716, 126.97865678555308), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    if (navigator.geolocation) {
      console.log("GPS를 지원합니다");
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }, [makeLine]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "350px" }}></div>
      {curLocation.map((location, index) => {
        return (
          <p key={index}>
            {index + 1}번째 현재 위치: {location[0]}, {location[1]}
          </p>
        );
      })}
    </>
  );
}
