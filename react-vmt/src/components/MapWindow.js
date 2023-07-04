import React from "react";
import "../App.css";
import locationData from "../data.json";
import Moment from "moment";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
const MapWindow = () => {
  const c1 = { lat: 41.888905, lng: -87.62452 };
  const c2 = { lat: 41.87798, lng: -87.61882833333334 };
  const c3 = { lat: 39.66528666666667, lng: -105.20575 };
  const c4 = { lat: 29.754601390309437, lng: -95.35780226251494 };
  const c5 = { lat: 29.754755, lng: -95.35896333333334 };
  const c6 = { lat: 36.12143616666667, lng: -115.1692583333333 };

  const [data, setData] = useState(locationData);
  console.log(data);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GCP_MAPS_API_KEY,
  });
  return (
    <div>
      <div>
        {isLoaded ? (
          <div>
            <Map />
            <div className="mapControl">
              {data.map((pic, key) => (
                <div key={pic.id} className="cc">
                  <td>{pic.kMDItemDisplayName}</td>
                  <td>
                    {Moment(pic.kMDItemContentCreationDate).format(
                      "MM/DD/YY h:mA"
                    )}
                  </td>
                  <td>Latitude: {pic.kMDItemLatitude}</td>
                  <td>longitude: {pic.kMDItemLongitude}</td>
                </div>
              ))}
            </div>
          </div>
        ) : (
          "loading.."
        )}
      </div>
      {data != "" ? <div></div> : "loading"}
    </div>
  );
};

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
