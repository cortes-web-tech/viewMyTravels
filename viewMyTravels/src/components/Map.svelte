<script>
  let container;
  let map;
  let zoom = 8;
  let center = { lat: -34.397, lng: 150.644 };

  import { onMount } from "svelte";

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
      //   styles:  // optional
    });
  });
</script>

<div class="wrapMap">
  <div class="viewMap" bind:this={container}>aaa</div>
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
