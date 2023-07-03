import React from "react";
import MapWindow from "./MapWindow";

function Map() {
  return (
    <div>
      <div className="wrapMap">
        <div className="viewMap" />
        <div className="timeline">
          <p>Click on title to switch to new location</p>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default Map;
