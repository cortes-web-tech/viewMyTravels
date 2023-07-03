

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3c392c79.js","_app/immutable/chunks/scheduler.a7e64d23.js","_app/immutable/chunks/index.6746570f.js"];
export const stylesheets = ["_app/immutable/assets/2.a8bc28e3.css"];
export const fonts = [];
