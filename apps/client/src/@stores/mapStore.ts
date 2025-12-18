import { create } from "zustand";
import { Location, DEFAULT_LOCATION } from "@/@lib/types/map";

interface MapStore {
  map: kakao.maps.Map | null;
  location: Location;
  setMap: (map: kakao.maps.Map) => void;
  setLocation: (location: Partial<Location>) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  map: null,
  location: DEFAULT_LOCATION,
  setMap: (map) => set({ map }),
  setLocation: (location) =>
    set((state) => ({
      location: { ...state.location, ...location },
    })),
}));

