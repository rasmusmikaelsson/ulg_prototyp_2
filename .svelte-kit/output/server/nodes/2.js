

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d86d7b58.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.d39bed27.js"];
export const stylesheets = ["_app/immutable/assets/2.fa3f2f4d.css"];
export const fonts = [];
