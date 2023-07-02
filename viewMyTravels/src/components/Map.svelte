<script>
  let container;
  let zoom = 13;
  let center = { lat: 39.66528666666667, lng: -105.20575 };

  import metadata from "../../../travelPics_ETL/parsedOutput.backup.json";
  console.log(metadata);
  import { onMount } from "svelte";
  import "../style/style.css";

  onMount(async () => {
    // Init Map
    const map = new google.maps.Map(container, {
      zoom,
      center,
      mapTypeId: "satellite",
      mapId: "map",
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
    google.maps.event.addDomListener(mapDiv, "click", () => {
      marker.setPosition(newPosition);
      map.setCenter(newPosition);
    });
  });
</script>

<div class="wrapMap">
  <button id="changeLocation">New location</button>
  <div class="viewMap" bind:this={container} />
</div>

<style>
  .wrapMap {
    padding-top: 20px;
  }
  .viewMap {
    width: 70rem;
    height: 28rem;
    margin: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
</style>
