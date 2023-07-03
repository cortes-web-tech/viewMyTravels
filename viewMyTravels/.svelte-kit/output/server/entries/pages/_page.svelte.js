import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
const style = "";
const metadata = [
  {
    id: 0,
    kMDItemOrientation: "0",
    kMDItemLongitude: "-87.62452",
    kMDItemDisplayName: "Chicago River 1",
    kMDItemFSName: "Chicago River 1.HEIC",
    kMDItemContentCreationDate: "2022-07-19 01:48:12 +0000",
    kMDItemGPSDestBearing: "206.0197294250282",
    kMDItemPixelHeight: "3024",
    kMDItemLatitude: "41.888905"
  },
  {
    id: 1,
    kMDItemOrientation: "1",
    kMDItemLongitude: "-87.61882833333334",
    kMDItemDisplayName: "Dyango Chicago",
    kMDItemFSName: "Dyango Chicago.HEIC",
    kMDItemContentCreationDate: "2022-07-18 20:43:59 +0000",
    kMDItemGPSDestBearing: "8.205112449305641",
    kMDItemPixelWidth: "4032",
    kMDItemLatitude: "41.87798"
  },
  {
    id: 2,
    kMDItemLongitude: "-105.20575",
    kMDItemFSName: "Flume Red Rocks.HEIC",
    kMDItemDisplayName: "Flume Red Rocks",
    kMDItemPixelWidth: "3024",
    kMDItemContentCreationDate: "2022-09-08 03:27:18 +0000",
    kMDItemGPSDestBearing: "64.16903684550743",
    kMDItemPixelHeight: "4032",
    kMDItemLatitude: "39.66528666666667"
  },
  {
    id: 3,
    kMDItemOrientation: "0",
    kMDItemFSName: "Summer Vibes 22.HEIC",
    kMDItemDisplayName: "Summer Vibes 22",
    kMDItemPixelWidth: "4032",
    kMDItemContentCreationDate: "2022-10-06 18:14:33 +0000",
    kMDItemGPSDestBearing: "259.3211060948081",
    kMDItemPixelHeight: "3024",
    kMDItemLatitude: "29.754155"
  },
  {
    id: 4,
    kMDItemOrientation: "1",
    kMDItemLongitude: "-95.35916166666667",
    kMDItemFSName: "Texas Shaped Lazy River.HEIC",
    kMDItemDisplayName: "Texas Shaped Lazy River",
    kMDItemPixelWidth: "3024",
    kMDItemContentCreationDate: "2022-10-06 18:55:22 +0000",
    kMDItemGPSDestBearing: "319.3515930687535",
    kMDItemPixelHeight: "4032"
  },
  {
    id: 5,
    kMDItemOrientation: "0",
    kMDItemLongitude: "-95.35896333333334",
    kMDItemFSName: "venetian viewing mirage.HEIC",
    kMDItemDisplayName: "venetian viewing mirage",
    kMDItemPixelWidth: "3024",
    kMDItemContentCreationDate: "2023-03-13 15:13:17 +0000",
    kMDItemPixelHeight: "2645",
    kMDItemLatitude: "29.754755"
  }
];
const Map_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapMap.svelte-lona4l{padding-top:20px;background-color:#efe7d3}.viewMap.svelte-lona4l{width:70rem;height:28rem;margin:auto;margin-top:auto;margin-bottom:auto}.line.svelte-lona4l{display:flex;justify-content:space-evenly}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  $$result.css.add(css);
  return `<div class="wrapMap svelte-lona4l"><button id="changeLocation" data-svelte-h="svelte-1geura0">New location</button> <button id="zoomOut" data-svelte-h="svelte-l48x4w">Zoom out</button> <div class="viewMap svelte-lona4l"${add_attribute("this", container, 0)}></div> <div class="timeline"><p data-svelte-h="svelte-1bguq9e">Click on title to switch to new location</p> <div class="line svelte-lona4l">${each(metadata, (picture) => {
    return `<div><div class="event"><a${add_attribute("id", picture.id, 0)} href="/">${escape(picture.kMDItemDisplayName)} </a></div> <div class="event">${escape(Date(picture.kMDItemContentCreationDate))}</div> </div>`;
  })}</div></div> </div>`;
});
const MapWindow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1fnbwyv_START --><script defer async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6cf3KF3JjJICbjTE5brZ06Lqm_f1CQcQ" data-svelte-h="svelte-1aq20ky"><\/script><!-- HEAD_svelte-1fnbwyv_END -->`, ""}  ${validate_component(Map, "Map").$$render($$result, {}, {}, {})} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><h1 data-svelte-h="svelte-1r3swpe">View My Travels</h1> <a href="about" data-svelte-h="svelte-tqjcfq">About</a> <div class="mapContainer"><div class="mapWindow">${validate_component(MapWindow, "MapWindow").$$render($$result, {}, {}, {})}</div></div></main>`;
});
export {
  Page as default
};
