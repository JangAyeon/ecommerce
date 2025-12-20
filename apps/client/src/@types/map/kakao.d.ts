declare namespace kakao {
  namespace maps {
    function load(callback: () => void): void;

    class LatLng {
      constructor(lat: number, lng: number);
      getLat(): number;
      getLng(): number;
    }

    class Map {
      constructor(container: HTMLElement | null, options: MapOptions);
      setCenter(latlng: LatLng): void;
      setLevel(level: number): void;
      getCenter(): LatLng;
      getLevel(): number;
    }

    interface MapOptions {
      center: LatLng;
      level: number;
    }

    interface MarkerOptions {
      position: LatLng;
      image?: MarkerImage;
      title?: string;
      draggable?: boolean;
      clickable?: boolean;
      zIndex?: number;
      opacity?: number;
      altitude?: number;
      range?: number;
    }

    class Marker {
      constructor(options: MarkerOptions);
      setMap(map: Map | null): void;
      getMap(): Map | null;
      setPosition(position: LatLng): void;
      getPosition(): LatLng;
      setImage(image: MarkerImage): void;
      setZIndex(zIndex: number): void;
      setVisible(visible: boolean): void;
      getVisible(): boolean;
      setTitle(title: string): void;
      getTitle(): string;
      setDraggable(draggable: boolean): void;
      getDraggable(): boolean;
      setClickable(clickable: boolean): void;
      getClickable(): boolean;
      setOpacity(opacity: number): void;
      getOpacity(): number;
    }

    interface MarkerImageOptions {
      src: string;
      size?: Size;
      options?: MarkerImageOptions;
    }

    class MarkerImage {
      constructor(src: string, size: Size, options?: MarkerImageOptions);
    }

    class Size {
      constructor(width: number, height: number);
    }

    namespace services {
      enum Status {
        OK = "OK",
        ZERO_RESULT = "ZERO_RESULT",
        ERROR = "ERROR",
      }

      class Geocoder {
        addressSearch(
          address: string,
          callback: (result: GeocoderResult[], status: Status) => void
        ): void;
        coord2Address(
          lng: number,
          lat: number,
          callback: (result: GeocoderResult[], status: Status) => void
        ): void;
      }

      type AddressType =
        | "ROAD_ADDR"
        | "REGION_ADDR"
        | "REGION_ADDR2"
        | "BUSINESS_ADDR";

      interface GeocoderAddress {
        address_name: string;
        b_code: string;
        h_code: string;
        main_address_no: string;
        mountain_yn: "Y" | "N";
        region_1depth_name: string;
        region_2depth_name: string;
        region_3depth_h_name: string;
        region_3depth_name: string;
        sub_address_no: string;
        x: string;
        y: string;
      }

      interface GeocoderRoadAddress {
        address_name: string;
        building_name: string;
        main_building_no: string;
        region_1depth_name: string;
        region_2depth_name: string;
        region_3depth_name: string;
        road_name: string;
        sub_building_no: string;
        underground_yn: "Y" | "N";
        x: string;
        y: string;
        zone_no: string;
      }

      interface GeocoderResult {
        address: GeocoderAddress;
        address_name: string;
        address_type: AddressType;
        road_address?: GeocoderRoadAddress;
        x: string;
        y: string;
      }
    }
  }
}
