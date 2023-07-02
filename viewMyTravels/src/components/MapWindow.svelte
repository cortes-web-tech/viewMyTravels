<script>
  import Map from "./Map.svelte";
  export let ready;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6cf3KF3JjJICbjTE5brZ06Lqm_f1CQcQ&callback=initMap"
  >
  </script>
</svelte:head>

<!-- {#if ready} -->
<Map />

<!-- {/if} -->

<style>
</style>
