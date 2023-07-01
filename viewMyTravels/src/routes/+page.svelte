<script>
  import "../style/style.css";
  import svelteLogo from "../images/svelteLogo.png";
  import nodeLogo from "../images/nodejs.png";
  import pythonLogo from "../images/python.jpg";
  import MapWindow from "../components/MapWindow.svelte";
</script>

<main>
  <h1>View My Travels</h1>
  <div class="mapContainer">
    <div class="mapWindow"><MapWindow /></div>
  </div>
  <div class="tools">
    <p>
      This page is being built as a way for me to showcase my UI/UX skills, by
      combinining a few different tools
    </p>

    <ul class="skills">
      <li><img alt="Svelte Logo" src={svelteLogo} /></li>
      <li><img alt="Svelte Logo" src={nodeLogo} /></li>
      <li><img alt="Svelte Logo" src={pythonLogo} /></li>
    </ul>
  </div>
</main>
