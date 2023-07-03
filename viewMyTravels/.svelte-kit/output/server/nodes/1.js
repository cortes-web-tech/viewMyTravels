

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.10c82140.js","_app/immutable/chunks/scheduler.a7e64d23.js","_app/immutable/chunks/index.6746570f.js","_app/immutable/chunks/singletons.bd332356.js"];
export const stylesheets = [];
export const fonts = [];
