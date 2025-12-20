"use client";

import Script from "next/script";
import { useRef } from "react";
import { LocateFixed } from "lucide-react";
import { useMapStore } from "@/@stores/mapStore";
import { DEFAULT_LOCATION } from "@/@types/map/map";

declare global {
  interface Window {
    kakao: typeof kakao;
  }
}

const NEXT_PUBLIC_KAKAO_MAP_CLIENT = "17f9d619fec0e389ba9d0371f16da37b";

interface MapProps {
  isVisible?: boolean;
}

export default function Map({ isVisible = true }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const { setMap, map, location } = useMapStore();

  const handleCenterMap = () => {
    if (!map) return;

    const centerPosition = new window.kakao.maps.LatLng(
      location.lat,
      location.lng
    );
    map.setCenter(centerPosition);
  };

  const initMap = () => {
    if (!mapRef.current) return;

    window.kakao.maps.load(() => {
      const MapContainer = mapRef.current;
      const MapOptions = {
        center: new window.kakao.maps.LatLng(
          DEFAULT_LOCATION.lat,
          DEFAULT_LOCATION.lng
        ),
        draggable: true, // 지도를 생성할때 지도 이동 및 확대/축소를 막으려면 draggable: false 옵션을 추가
        level: DEFAULT_LOCATION.zoom,
      };
      const map = new window.kakao.maps.Map(MapContainer, MapOptions);
      setMap(map);
    });
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false&libraries=services,clusterer`}
        onReady={initMap}
      />
      <div className={`relative w-full `}>
        <div
          ref={mapRef}
          className={`w-full  h-[150px] ${!isVisible ? "hidden" : ""}`}
        />
        {isVisible && (
          <button
            type="button"
            onClick={handleCenterMap}
            className="absolute bottom-2 right-2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-md transition-colors"
            aria-label="지도 중심으로 이동"
          >
            <LocateFixed className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    </>
  );
}
