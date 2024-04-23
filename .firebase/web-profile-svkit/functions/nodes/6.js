import * as server from '../entries/pages/_username_/choobio/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/choobio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/choobio/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.CW-KDGBR.js","_app/immutable/chunks/scheduler.Bso-5iR9.js","_app/immutable/chunks/index.DVUUAQG0.js","_app/immutable/chunks/stores.B0X-1PFb.js","_app/immutable/chunks/entry.CjxpOh_l.js","_app/immutable/chunks/index.C_-ABqwe.js","_app/immutable/chunks/control.CYgJF_JY.js"];
export const stylesheets = [];
export const fonts = [];
