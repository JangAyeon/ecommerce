"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Address } from "react-daum-postcode";
import { FieldState } from "@layout/signup/schema";
import AddressModal from "./AddressModal";

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

  const handleComplete = (data: Address) => {
    const { address, addressType, bname, buildingName, ...rest } = data;

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
    console.log("data", {
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
