<script>
  let container;
  let zoom = 13;
  let center = { lat: 39.66528666666667, lng: -105.20575 };
  import metadata from "../../../travelPics_ETL/parsedOutput.backup.json";
  import { onMount } from "svelte";
  import "../style/style.css";

  onMount(async () => {
    // Init Map
    const map = new google.maps.Map(container, {
      zoom,
      center,
      mapTypeId: "satellite",
      mapId: "map",
      gestureHandling: "cooperative",
    });
    // Init Marker
    const marker = new google.maps.Marker({
      map,
      position: center,
      title: "marker",
    });
    marker.setMap(map);
    // Zoom around, returns to center
    map.addListener("center_changed", () => {
      window.setTimeout(() => {
        map.panTo(marker.getPosition());
      }, 3000);
    });

    // Click on marker
    marker.addListener("click", () => {
      map.getZoom() < 18 ? map.setZoom(19) : map.setZoom(17);
    });

    // Change Location
    // Updates map and marker
    const mapDiv = document.getElementById("changeLocation");
    let newPosition = { lat: 41.8889, lng: -87.62452 };
    let update = document.getElementById("changeLocation").nodeValue;
    google.maps.event.addDomListener(mapDiv, "click", () => {
      marker.setPosition(newPosition);
      map.setCenter(newPosition);
    });

    // Zoom out Event Listener
    const zoomOut = document.getElementById("zoomOut");
    google.maps.event.addDomListener(zoomOut, "click", () => {
      map.setZoom(8);
    });

    // Updated Change Location
    const picture = document.getElementById("1");
    google.maps.event.addDomListener(picture, "click", () => {
      console.log("picture");
    });
  });

  // Fetches data for each event
  function changeLocation(name) {
    let id = name.id;
    center = { lat: name.kMDItemLatitude, lng: name.kMDItemLongitude };
    console.log(center);
  }
</script>

<div class="wrapMap">
  <button id="changeLocation">New location</button>
  <button id="zoomOut">Zoom out</button>
  <div class="viewMap" bind:this={container} />
  <div class="timeline">
    <p>Click on title to switch to new location</p>
    <div class="line">
      {#each metadata as picture (picture.id)}
        <div>
          <div class="event">
            <a
              id={picture.id}
              href="/"
              on:click={() => changeLocation(picture)}
            >
              {picture.kMDItemDisplayName}
            </a>
          </div>
          <div class="event">
            {Date(picture.kMDItemContentCreationDate)}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .wrapMap {
    padding-top: 20px;
    background-color: #efe7d3;
  }
  .viewMap {
    width: 70rem;
    height: 28rem;
    margin: auto;
    margin-top: auto;
    margin-bottom: auto;
  }

  .line {
    display: flex;
    justify-content: space-evenly;
  }
</style>
