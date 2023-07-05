import React from "react";
import "../App.css";
import locationData from "../data.json";
import Moment from "moment";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
const MapWindow = () => {
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
          </div>
        ) : (
          "loading.."
        )}
      </div>
    </div>
  );
};

function Map() {
  const [longitude, setLongitude] = useState(-105.20575);
  const [latitude, setlatitude] = useState(39.66528666666667);
  const [data, setData] = useState(locationData);
  console.log(data);

  function updateLocation(lat, lng) {
    const center = { lat: lat, lng: lng };
    // setlatitude(lat);
    // setLongitude(lng);
    // const map =
    console.log(center);
  }
  return (
    <div>
      <GoogleMap
        id="map"
        zoom={18}
        center={{ lat: latitude, lng: longitude }}
        mapContainerClassName="mapWindow"
        mapTypeId="satellite"
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
      <div>
        {data != "" ? (
          <table className="mapControl">
            <tbody>
              {data.map((pic, key) => (
                <tr key={pic.id} className="cc">
                  <td>
                    <button
                      href=""
                      onClick={(e) =>
                        updateLocation(
                          pic.kMDItemLatitude,
                          pic.kMDItemLongitude
                        )
                      }
                    >
                      {pic.kMDItemDisplayName}
                    </button>
                  </td>
                  <td>
                    {Moment(pic.kMDItemContentCreationDate).format(
                      "MM/DD/YY h:m A"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
}

export default MapWindow;
