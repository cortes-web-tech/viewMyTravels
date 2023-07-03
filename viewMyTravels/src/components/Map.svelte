<script>
  let container;
  let zoom = 13;
  let center = { lat: 39.66528666666667, lng: -105.20575 };
  import metadata from "../../../travelPics_ETL/parsedOutput.backup.json";
  import { createEventDispatcher, onMount } from "svelte";
  import "../style/style.css";
  import v1 from "../images/sm Chicago River.jpg";

  onMount(async () => {
    // Init Map
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
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

    // Info view for when user clicks on marker
    const infowindow = new google.maps.InfoWindow({
      content: v1,
      ariaLabel: "Uluru",
    });

    const pm = document.createElement("img");
    pm.src = v1;
    const pmView = new AdvancedMarkerElement({
      map,
      position: center,

      title: "New marker",
      content: pm,
    });
    marker.setMap(map);
    // pmView.setMap(map);
    // Zoom around, returns to center
    map.addListener("center_changed", () => {
      window.setTimeout(() => {
        map.panTo(marker.getPosition());
      }, 3000);
    });

    // Click on marker

    marker.addListener("click", () => {
      map.getZoom() < 18 ? map.setZoom(19) : map.setZoom(17);
      infowindow.open({
        anchor: marker,
        map,
      });
    });

    // Change Location
    const p1 = document.getElementById("0");
    const p2 = document.getElementById("1");
    const p3 = document.getElementById("2");
    const p4 = document.getElementById("3");
    const p5 = document.getElementById("4");
    const p6 = document.getElementById("5");
    const c1 = { lat: 41.888905, lng: -87.62452 };
    const c2 = { lat: 41.87798, lng: -87.61882833333334 };
    const c3 = { lat: 39.66528666666667, lng: -105.20575 };
    const c4 = { lat: 29.754601390309437, lng: -95.35780226251494 };
    const c5 = { lat: 29.754755, lng: -95.35896333333334 };
    // 29.754602390309437, -95.35777946373861
    const c6 = { lat: 36.12143616666667, lng: -115.1692583333333 };
    google.maps.event.addDomListener(p1, "click", () => {
      adjustMap(c1);
    });
    google.maps.event.addDomListener(p2, "click", () => {
      adjustMap(c2);
    });
    google.maps.event.addDomListener(p3, "click", () => {
      adjustMap(c3);
    });
    google.maps.event.addDomListener(p4, "click", () => {
      adjustMap(c4);
    });
    google.maps.event.addDomListener(p5, "click", () => {
      adjustMap(c5);
    });
    google.maps.event.addDomListener(p6, "click", () => {
      adjustMap(c6);
    });

    function adjustMap(center) {
      map.setZoom(12);
      map.setCenter(center);
      marker.setPosition(center);
      setTimeout(() => {
        map.setZoom(18);
      }, 3000);
    }
  });

  // Fetches data for each event
  function changeLocation(name) {
    let id = name.id;
    center = { lat: name.kMDItemLatitude, lng: name.kMDItemLongitude };
  }
</script>

<div class="wrapMap">
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
  img {
    height: 250px;
    width: 250px;
  }
</style>
