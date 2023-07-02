import MapWindow from "./MappWindow.svelte";

const app = new MapWindow({
  target: document.body,
  props: {
    ready: false,
  },
});

window.initMap = function ready() {
  app.$set({ ready: true });
};

export default app;
