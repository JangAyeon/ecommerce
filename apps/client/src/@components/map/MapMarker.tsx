"use client";
import { useCallback, useEffect } from "react";

import { useMapStore } from "@/@stores/mapStore";

const MapMarker = ({ isVisible }: { isVisible: boolean }) => {
  const { location, map } = useMapStore();

  const loadKakoMarkers = useCallback(() => {
    if (!map || !isVisible) return;
    // @ts-ignore
    map.relayout();
    const markerPosition = new window.kakao.maps.LatLng(
      location.lat,
      location.lng
    );

    // 지도 중심 이동
    map.setCenter(markerPosition);

    // 마커 생성 및 표시
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    console.log("marker", JSON.stringify(location));
  }, [map, location, isVisible]);

  useEffect(() => {
    loadKakoMarkers();
  }, [loadKakoMarkers]);
  return <></>;
};

export default MapMarker;
