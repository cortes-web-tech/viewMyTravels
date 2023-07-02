<script>
  let container;
  let map;
  let zoom = 19;
  let center = { lat: 39.66528666666667, lng: -105.20575 };

  import metadata from "../../../travelPics_ETL/parsedOutput.backup.json";
  import { onMount } from "svelte";
  import "../style/style.css";

  onMount(async () => {
    const showMap = new google.maps.Map(container, {
      zoom,
      center,
      mapTypeId: "satellite",
      mapId: "showMap",
    });
    let markerPosition = { lat: 41.8889, lng: -87.62452 };
    const marker = new google.maps.Marker({
      showMap,
      position: markerPosition,
      title: "marker",
    });
    marker.setMap(showMap);
  });

  function changeLocation(newLat, long) {
    center = { lat: newLat, lng: long };
  }
</script>

<div class="wrapMap">
  <button on:click|once={changeLocation(41.8889, -87.62452)}
    >New location</button
  >

  <div class="viewMap" bind:this={container} />
  {#each metadata as picture (picture.id)}
    <tr key={picture.id}>
      <td>Latitude: {picture.kMDItemLatitude}</td>
      <td>Longitude: {picture.kMDItemLongitude}</td>
      <td>Date: {picture.kMDItemContentCreationDate} </td>
    </tr>
  {/each}
  <!-- {#each metadata as picture (picture.id)}
    {console.log(
      "Latitude: " +
        picture.kMDItemLatitude +
        "\nLongitude: " +
        picture.kMDItemLongitude +
        "\nDate Created: " +
        picture.kMDItemContentCreationDate
    )}
  {/each} -->
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
