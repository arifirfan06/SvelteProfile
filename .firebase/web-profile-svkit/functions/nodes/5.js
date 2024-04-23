import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.DpH51jmo.js","_app/immutable/chunks/scheduler.Bso-5iR9.js","_app/immutable/chunks/index.DVUUAQG0.js"];
export const stylesheets = [];
export const fonts = [];
