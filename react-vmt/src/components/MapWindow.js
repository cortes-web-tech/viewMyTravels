import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
function MapWindow() {
  console.log(process.env.REACT_APP_GCP_MAPS_API_KEY);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GCP_MAPS_API_KEY,
  });
  return <div>{isLoaded ? <Map /> : "loading.."}</div>;
}

function Map() {
  const [longitude, setLongitude] = useState(-105.20575);
  const [latitude, setlatitude] = useState(39.66528666666667);

  return (
    <GoogleMap
      zoom={18}
      center={{ lat: latitude, lng: longitude }}
      mapContainerClassName="mapWindow"
      mapTypeId="satellite"
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
}

export default MapWindow;
