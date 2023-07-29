

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1fd0ee96.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.d39bed27.js","_app/immutable/chunks/singletons.e94e6294.js"];
export const stylesheets = [];
export const fonts = [];
