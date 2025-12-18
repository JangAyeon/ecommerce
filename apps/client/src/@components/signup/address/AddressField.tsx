"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Address } from "react-daum-postcode";
import { FieldState } from "@layout/signup/schema";
import AddressModal from "./AddressModal";
import { useMapStore } from "@/@stores/mapStore";

interface AddressFieldProps {
  daumPostAddress: string | undefined;
  extraAddress: string | undefined;
  daumPostAddressState: FieldState;
  extraAddressState: FieldState;
  error?: string;
  onDaumPostAddressChange: (daumPostAddress: string) => void;
  onExtraAddressChange: (extraAddress: string) => void;
}

const AddressField = ({
  daumPostAddress,
  extraAddress,
  daumPostAddressState,
  extraAddressState,

  error,
  onDaumPostAddressChange,
  onExtraAddressChange,
}: AddressFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLocation } = useMapStore();
  const getCoordinatesFromAddress = async (
    address: string
  ): Promise<kakao.maps.services.GeocoderResult[] | undefined> => {
    if (!window.kakao?.maps?.services) {
      console.error("카카오맵이 아직 로드되지 않았습니다.");
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();

    try {
      const result = await new Promise<kakao.maps.services.GeocoderResult[]>(
        (resolve, reject) => {
          geocoder.addressSearch(
            address,
            (
              result: kakao.maps.services.GeocoderResult[],
              status: kakao.maps.services.Status
            ) => {
              if (status === window.kakao.maps.services.Status.OK) {
                resolve(result);
              } else {
                reject(new Error(`주소 검색 실패: ${status}`));
              }
            }
          );
        }
      );

      console.log("좌표 변환 결과:", JSON.stringify(result));
      if (!result[0]) {
        throw new Error("주소 검색 실패: 주소를 찾을 수 없습니다.");
      }
      setLocation({
        lat: parseFloat(result[0].y),
        lng: parseFloat(result[0].x),
      });
      // return result;
    } catch (error) {
      console.error("주소 검색 중 오류:", error);
      return undefined;
    }
  };
  const handleComplete = async (data: Address) => {
    const { address, addressType, bname, buildingName, ...rest } = data;
    const coordinates = await getCoordinatesFromAddress(address);
    let fullAddress = address;
    let extraAddress = "";

    if (addressType === "R") {
      if (data.buildingName !== "") {
        extraAddress += buildingName;
      } else if (bname !== "") {
        extraAddress += bname;
      }

      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    const firstResult = coordinates?.[0];
    const lat = firstResult ? parseFloat(firstResult.y) : undefined;
    const lng = firstResult ? parseFloat(firstResult.x) : undefined;

    console.log("data", {
      coordinates: {
        lat,
        lng,
      },
      address,
      addressType,
      bname,
      buildingName,
      extraAddress,
      fullAddress,
      rest,
    });
    onDaumPostAddressChange(fullAddress);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2">
      <label className="text-b2-medium text-foreground block">Address</label>
      {!daumPostAddress ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background hover:bg-muted transition-colors flex items-center justify-center gap-2 text-b2-medium text-foreground"
        >
          <MapPin className="w-5 h-5" />
          Add Address
        </button>
      ) : (
        <div className="space-y-3">
          <div className="space-y-1">
            <input
              type="text"
              value={daumPostAddress}
              readOnly
              placeholder="Base address"
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none text-b2-regular
                ${
                  daumPostAddressState === "error"
                    ? "border-red-500"
                    : daumPostAddressState === "success"
                      ? "border-green-500"
                      : "border-input"
                }
                bg-background text-foreground
              `}
            />
          </div>
          <div className="space-y-1">
            <input
              type="text"
              value={extraAddress || ""}
              onChange={(e) => onExtraAddressChange(e.target.value)}
              placeholder="Detailed address (optional)"
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none text-b2-regular
                ${
                  extraAddressState === "error"
                    ? "border-red-500"
                    : extraAddressState === "success"
                      ? "border-green-500"
                      : "border-input"
                }
                bg-background text-foreground
              `}
            />
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background hover:bg-muted transition-colors flex items-center justify-center gap-2 text-b2-medium text-foreground"
          >
            <MapPin className="w-5 h-5" />
            Change Address
          </button>
        </div>
      )}
      {error && <p className="text-b3-regular text-red-500">{error}</p>}

      <AddressModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default AddressField;
