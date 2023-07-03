import React from "react";
import "../App.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function MapWindow() {
  console.log(process.env.REACT_APP_GCP_MAPS_API_KEY);
  const longitude = -105.20575;
  const latitude = 39.66528666666667;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GCP_MAPS_API_KEY,
  });
  return <div>{isLoaded ? <Map /> : "loading.."}</div>;
}

function Map() {
  return (
    <GoogleMap
      zoom={18}
      center={{ lat: 39.66528666666667, lng: -105.20575 }}
      mapContainerClassName="mapWindow"
      mapTypeId="satellite"
    ></GoogleMap>
  );
}

export default MapWindow;
