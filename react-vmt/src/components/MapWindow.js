import React from "react";
import "../App.css";
import locationData from "../data.json";
import p1 from "../images/Chicago Adventures.jpg";
import p2 from "../images/Chicago River.jpg";
import p3 from "../images/Baldwin hills scenic overlook 1.jpg";
import p4 from "../images/Flume Red Rocks.jpg";
import p5 from "../images/Summer Vibes 22.jpg";
import p6 from "../images/Texas Shaped Lazy River.jpg";
import p7 from "../images/Natural History Museum LA County.jpg";
import p8 from "../images/Huntington library 1.jpg";
import p9 from "../images/Huntington library 2.jpg";
import p10 from "../images/venetian viewing mirage.jpg";
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
  const [zoom, setZoom] = useState(14);
  const [pic, setPic] = useState(p3);
  const [opacity, setOpacity] = useState(0);
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    var iterations = 0;
    let intervals = setInterval(() => {
      iterations += 1;

      if (iterations > 5) {
        clearInterval(intervals);
      }
      if (toggle == false) {
        console.log(toggle);
        setPic(p5);
        setToggle(true);
      } else {
        console.log(toggle);
        setPic(p4);
        setToggle(false);
      }
    }, 3000);
  }
  function handleZoom() {
    var finZoom = 0;
    let interval = setInterval(() => {
      setZoom(zoom + 0.2);
      finZoom += 1;
      if (finZoom === 5) {
        clearInterval(interval);
      }
    }, 100);
  }

  function updateLocation(id, lat, lng) {
    const center = { lat: lat, lng: lng };
    setlatitude(lat);
    setLongitude(lng);
    setZoom(14);
    switch (id) {
      case 0:
        setPic(p1);
        break;
      case 1:
        setPic(p2);
        break;
      case 2:
        setPic(p3);
        break;
      case 3:
        setPic(p4);
        break;
      case 4:
        setPic(p6);
        break;
      case 5:
        setPic(p7);
        break;
      case 6:
        setPic(p8);
        break;
      case 7:
        setPic(p10);
        break;
      case 9:
        // setPic(p10);
        break;
    }
    // handleZoom();
  }
  return (
    <div>
      <GoogleMap
        clickableIcons="false"
        id="map"
        zoom={zoom}
        center={{ lat: latitude, lng: longitude }}
        mapContainerClassName="mapWindow"
        mapTypeId="satellite"
      >
        <div>
          <Marker position={{ lat: latitude, lng: longitude }}></Marker>
          <InfoWindow
            className="infoWindow"
            position={{ lat: latitude + 0.000015, lng: longitude }}
          >
            <div id="pic">
              <img
                className="pic"
                id="pic"
                src={pic}
                style={{ opacity: opacity }}
              />
            </div>
          </InfoWindow>
        </div>
      </GoogleMap>
      <div>
        {data != "" ? (
          <div className="mapControl">
            {data.map((pic, key) => (
              <ul key={pic.id} className="cc">
                <div className="selectLocation">
                  <button
                    className="locationButton"
                    href=""
                    onClick={(e) =>
                      updateLocation(
                        pic.id,
                        pic.kMDItemLatitude,
                        pic.kMDItemLongitude
                      )
                    }
                  >
                    {pic.kMDItemDisplayName}
                  </button>
                </div>
                <td>
                  {Moment(pic.kMDItemContentCreationDate).format(
                    "MM/DD/YY h:m A"
                  )}
                </td>
              </ul>
            ))}
          </div>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
}

export default MapWindow;
