import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent: React.FC<{
  text: string;
  lat: number;
  lng: number;
}> = ({ text }) => <div>{text}</div>;

const Map: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAVdLkZyvTaHQka8mIpYNsYBW-43Fydf7g" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
