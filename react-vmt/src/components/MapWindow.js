import React from "react";
import "../App.css";
import locationData from "../data.json";
import p1 from "../images/Chicago River 1.jpg";
import Moment from "moment";
import { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

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
  const [zoom, setZoom] = useState(18);

  function updateLocation(lat, lng) {
    const center = { lat: lat, lng: lng };
    setlatitude(lat);
    setLongitude(lng);
    setZoom(14);
    var finZoom = 0;
    let interval = setInterval(() => {
      setZoom(zoom + 0.2);
      finZoom += 1;
      if (finZoom === 4) {
        clearInterval(interval);
      }
    }, 1000);
  }
  return (
    <div>
      <GoogleMap
        id="map"
        zoom={zoom}
        center={{ lat: latitude, lng: longitude }}
        mapContainerClassName="mapWindow"
        mapTypeId="satellite"
      >
        <div>
          <Marker position={{ lat: latitude, lng: longitude }}></Marker>
        </div>
      </GoogleMap>
      <div>
        {data != "" ? (
          <table>
            <tbody className="mapControl">
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
