

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.72f3ff64.js","_app/immutable/chunks/scheduler.a7e64d23.js","_app/immutable/chunks/index.6746570f.js","_app/immutable/chunks/singletons.6cdae20c.js"];
export const stylesheets = [];
export const fonts = [];
