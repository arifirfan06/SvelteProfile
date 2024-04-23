

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DjdkR8D4.js","_app/immutable/chunks/scheduler.Bso-5iR9.js","_app/immutable/chunks/index.DVUUAQG0.js"];
export const stylesheets = ["_app/immutable/assets/0.Bm1e0l7o.css"];
export const fonts = [];
