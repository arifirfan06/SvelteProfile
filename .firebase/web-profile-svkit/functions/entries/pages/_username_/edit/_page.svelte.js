import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, d as createEventDispatcher, b as each, a as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { U as UserLink } from "../../../../chunks/UserLink.js";
import { u as userData, a as user } from "../../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../../chunks/index2.js";
const css = {
  code: ".over.svelte-1fgegi8{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity))\n}",
  map: '{"version":3,"file":"SortableList.svelte","sources":["SortableList.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { flip } from \\"svelte/animate\\";\\nimport { createEventDispatcher } from \\"svelte\\";\\nexport let list = [];\\nlet isOver = false;\\nconst dispatch = createEventDispatcher();\\nfunction getDraggedParent(node) {\\n  if (!node.dataset.index) {\\n    return getDraggedParent(node.parentNode);\\n  } else {\\n    return { ...node.dataset };\\n  }\\n}\\nfunction reorder({ from, to }) {\\n  const newList = [...list];\\n  newList[from] = [newList[to], newList[to] = newList[from]][0];\\n  dispatch(\\"sort\\", newList);\\n}\\nfunction onDragStart(e) {\\n  const dragged = getDraggedParent(e.target);\\n  e.dataTransfer?.setData(\\"source\\", dragged?.index.toString());\\n}\\nfunction onDragLeave(e) {\\n  const dragged = getDraggedParent(e.target);\\n  isOver === dragged.id && (isOver = false);\\n}\\nfunction onDragOver(e) {\\n  const id = e.target.dataset?.id;\\n  const dragged = getDraggedParent(e.target);\\n  isOver = dragged?.id ?? false;\\n}\\nfunction onDrop(e) {\\n  isOver = false;\\n  const dragged = getDraggedParent(e.target);\\n  reorder({\\n    from: e.dataTransfer?.getData(\\"source\\"),\\n    to: dragged.index\\n  });\\n}\\n<\/script>\\n\\n{#if list?.length}\\n  <ul class=\\"list-none p-0 flex flex-col items-center\\">\\n    {#each list as item, index (item.id)}\\n      <li\\n        class=\\"border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full\\"\\n        class:over={item.id === isOver}\\n        data-index={index}\\n        data-id={item.id}\\n        draggable=\\"true\\"\\n        on:dragstart={onDragStart}\\n        on:dragover|preventDefault={onDragOver}\\n        on:dragleave={onDragLeave}\\n        on:drop|preventDefault={onDrop}\\n        animate:flip={{ duration: 300 }}\\n      >\\n        <slot {item} {index} />\\n      </li>\\n    {/each}\\n  </ul>\\n{:else}\\n<p class=\\"text-center my-12 text-lg font-bold\\">No items</p>\\n{/if}\\n<style>\\n    .over {\\n    --tw-scale-x: 1.05;\\n    --tw-scale-y: 1.05;\\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n    --tw-border-opacity: 1;\\n    border-color: rgb(156 163 175 / var(--tw-border-opacity))\\n}\\n</style>\\n\\n\\n<!-- <script lang=\\"ts\\">\\n    import { flip } from \\"svelte/animate\\";\\n    import { createEventDispatcher } from \\"svelte\\";\\n  \\n    \\n    export let list: any[];\\n    let isOver: string | boolean = false;\\n  \\n    const dispatch = createEventDispatcher();\\n  \\n  \\n    function getDraggedParent(node: any) {\\n      if (!node.dataset.index) {\\n        return getDraggedParent(node.parentNode);\\n      } else {\\n        return { ...node.dataset };\\n      }\\n    }\\n  \\n    function onDragStart(e: DragEvent) {\\n      // @ts-ignore\\n      const dragged = getDraggedParent(e.target);\\n      e.dataTransfer?.setData(\\"source\\", dragged?.index.toString());\\n    }\\n  \\n    function onDragOver(e: DragEvent) {\\n      // @ts-ignore\\n      const id = e.target.dataset?.id;\\n      const dragged = getDraggedParent(e.target);\\n      isOver = dragged?.id ?? false;\\n    }\\n  \\n    function onDragLeave(e: DragEvent) {\\n      const dragged = getDraggedParent(e.target);\\n      isOver === dragged.id && (isOver = false);\\n    }\\n  \\n    function onDrop(e: DragEvent) {\\n      isOver = false;\\n      const dragged = getDraggedParent(e.target);\\n      reorder({\\n        from: e.dataTransfer?.getData(\\"source\\"),\\n        to: dragged.index,\\n      });\\n    }\\n  \\n    const reorder = ({ from, to }: any) => {\\n      const newList = [...list];\\n      newList[from] = [newList[to], (newList[to] = newList[from])][0];\\n  \\n      dispatch(\\"sort\\", newList);\\n    };\\n  <\/script>\\n  \\n  {#if list?.length}\\n    <ul class=\\"list-none p-0 flex flex-col items-center\\">\\n      {#each list as item, index (item.id)}\\n        <li\\n          class=\\"border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full\\"\\n          class:over={item.id === isOver}\\n          data-index={index}\\n          data-id={item.id}\\n          draggable=\\"true\\"\\n          on:dragstart={onDragStart}\\n          on:dragover|preventDefault={onDragOver}\\n          on:dragleave={onDragLeave}\\n          on:drop|preventDefault={onDrop}\\n          animate:flip={{ duration: 300 }}\\n        >\\n          <slot {item} {index} />\\n        </li>\\n      {/each}\\n    </ul>\\n  {:else}\\n    <p class=\\"text-center my-12 text-lg font-bold\\">No items</p>\\n  {/if}\\n  \\n  <style>\\n    .over {\\n      @apply border-gray-400 scale-105;\\n    }\\n  </style> -->"],"names":[],"mappings":"AA+DI,oBAAM,CACN,YAAY,CAAE,IAAI,CAClB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,UAAU,IAAI,gBAAgB,CAAC,CAAC,CAAC,IAAI,gBAAgB,CAAC,CAAC,CAAC,OAAO,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAC/L,mBAAmB,CAAE,CAAC,CACtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC;AAC7D"}'
};
const SortableList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list = [] } = $$props;
  let isOver = false;
  createEventDispatcher();
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  $$result.css.add(css);
  return `${list?.length ? `<ul class="list-none p-0 flex flex-col items-center">${each(list, (item, index) => {
    return `<li class="${[
      "border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full svelte-1fgegi8",
      item.id === isOver ? "over" : ""
    ].join(" ").trim()}"${add_attribute("data-index", index, 0)}${add_attribute("data-id", item.id, 0)} draggable="true">${slots.default ? slots.default({ item, index }) : ``} </li>`;
  })}</ul>` : `<p class="text-center my-12 text-lg font-bold" data-svelte-h="svelte-1jmwi8z">No items</p>`}  `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  let $$unsubscribe_user;
  let $formData, $$unsubscribe_formData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const formDefaults = {
    icon: "custom",
    title: "",
    url: "https://"
  };
  const formData = writable(formDefaults);
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
  $formData.title.length < 20 && $formData.title.length > 0;
  $$unsubscribe_userData();
  $$unsubscribe_user();
  $$unsubscribe_formData();
  $$unsubscribe_page();
  return `<main class="max-w-xl mx-auto">${$userData?.username == $page.params.username ? `<h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center" data-svelte-h="svelte-k6uny7">Edit your Profile</h1> <div class="text-center mb-8"><p>Profile Link:
        <a${add_attribute("href", `/${$userData?.username}`, 0)} class="link link-accent">https://choo.choo/${escape($userData?.username)}</a></p></div> <div class="text-center my-4"><a class="btn btn-outline btn-xs" href="/login/photo" data-svelte-h="svelte-1hnlagx">Change photo</a> <a class="btn btn-outline btn-xs"${add_attribute("href", `/${$userData.username}/bio`, 0)}>Edit Bio</a></div> <form class="form-control"><label class="label cursor-pointer flex items-start justify-center"><span class="label-text mr-6"><div class="tooltip group-hover:tooltip-open" data-tip="If public, the world can see your profile">${escape($userData?.published ? "Public profile" : "Private profile")}</div></span> <input type="checkbox" class="toggle toggle-success" ${$userData?.published ? "checked" : ""}></label></form>  ${validate_component(SortableList, "SortableList").$$render($$result, { list: $userData?.links }, {}, {
    default: ({ item }) => {
      return `<div class="group relative">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})}</div>`;
    }
  })} ${``} ` : ``}<button class="btn btn-outline btn-info block mx-auto my-4" data-svelte-h="svelte-159s1qn">Add a Link</button></main>`;
});
export {
  Page as default
};
