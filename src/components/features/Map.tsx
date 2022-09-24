import React from "react";
import GoogleMapReact from "google-map-react";
type TMap = {
  children: React.ReactNode;
};

const Map = ({ children }: TMap) => {
  const defaultProps = {
    center: { lat: 40.271062, lng: 22.509266 },
    zoom: 17,
  };
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCJBD-XUQd0KPi_5iiqLFueK3eSmnJ_xHo" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      onDragEnd={(e) => console.log(e)}
    >
      {children}
      {/* <AnyReactComponent text="Park House" lat={40.2714} lng={22.5087} /> */}
    </GoogleMapReact>
  );
};

export default Map;

// bootstrapURLKeys={{ key: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY" }}
