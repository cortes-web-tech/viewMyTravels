<script>
  import Map from "./Map.svelte";
  // export let ready;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=API_Key_Changed"
  >
  </script>
</svelte:head>

<!-- {#if ready} -->
<Map />

<!-- {/if} -->

<style>
</style>
