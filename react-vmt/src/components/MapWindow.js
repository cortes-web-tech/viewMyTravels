import React from "react";
import "../App.css";
import locationData from "../data.json";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
function MapWindow() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setLocationData();
  }, []);

  function setLocationData() {
    setData(locationData);
    console.log(data);
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GCP_MAPS_API_KEY,
  });
  return (
    <div>
      {isLoaded ? (
        <div>
          <Map />
          {data[0].kMDItemDisplayName}
          <table>
            <tbody>
              {/*data.map((pic, key) => {
                <tr key={pic.id}>
                  <td>aaa{pic.kMDItemDisplayName}</td>
                </tr>;
              })*/}
            </tbody>
          </table>
        </div>
      ) : (
        "loading.."
      )}
    </div>
  );
}

function Map() {
  const [longitude, setLongitude] = useState(-105.20575);
  const [latitude, setlatitude] = useState(39.66528666666667);
  console.log(latitude);
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

function MapControl() {
  return (
    <div>
      {/*data.map((picture, key) => {
        <tr key={picture.id}>
          <td>name</td>
          <td>date</td>
        </tr>;
      })*/}
    </div>
  );
}
export default MapWindow;
