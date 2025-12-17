"use client";

import { MapPin } from "lucide-react";
import { FieldState } from "./schema";

interface AddressFieldProps {
  address: string | undefined;
  state: FieldState;
  error?: string;
  onAddressClick: () => void;
}

const AddressField = ({
  address,
  state,
  error,
  onAddressClick,
}: AddressFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="text-b2-medium text-foreground block">Address</label>
      {!address ? (
        <button
          type="button"
          onClick={onAddressClick}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background hover:bg-muted transition-colors flex items-center justify-center gap-2 text-b2-medium text-foreground"
        >
          <MapPin className="w-5 h-5" />
          Add Address
        </button>
      ) : (
        <div className="relative">
          <input
            type="text"
            value={address}
            readOnly
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none text-b2-regular
              ${
                state === "error"
                  ? "border-red-500"
                  : state === "success"
                    ? "border-green-500"
                    : "border-input"
              }
              bg-background text-foreground
            `}
          />
          <button
            type="button"
            onClick={onAddressClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-b3-regular text-muted-foreground hover:text-foreground underline"
          >
            Change
          </button>
        </div>
      )}
      {error && <p className="text-b3-regular text-red-500">{error}</p>}
    </div>
  );
};

export default AddressField;
