

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.521db823.js","_app/immutable/chunks/scheduler.a7e64d23.js","_app/immutable/chunks/index.6746570f.js"];
export const stylesheets = [];
export const fonts = [];
