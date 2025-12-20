export interface Location {
  lat: number;
  lng: number;
  zoom: number;
}

export const DEFAULT_LOCATION: Location = {
  lat: 37.497625203,
  lng: 127.03088379,
  zoom: 3,
};
