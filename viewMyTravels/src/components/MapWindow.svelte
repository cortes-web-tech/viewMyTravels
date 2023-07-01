<script>
  import { Loader } from "@googlemaps/js-api-loader";
  import "../style/style.css";
  // AIzaSyCf3Ti2vqg3FkheXkhAgdFDYf12Ytp5OnA

  const loader = new Loader({
    apiKey: "AIzaSyCf3Ti2vqg3FkheXkhAgdFDYf12Ytp5OnA",
    version: "weekly",
  });
  let map;

  async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  //   initMap();
</script>

<main>
  <div class="mapWindow" id="map" />
</main>
