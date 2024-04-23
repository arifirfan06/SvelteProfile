import * as universal from '../entries/pages/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/3.i38YfRhP.js","_app/immutable/chunks/scheduler.Bso-5iR9.js","_app/immutable/chunks/index.DVUUAQG0.js"];
export const stylesheets = [];
export const fonts = [];
