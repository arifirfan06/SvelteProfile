<script lang="ts">
import { user, userData } from "$lib/firebase";
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
  $: listNav = $userData ? [{ name: "home", route: "/" },{name: `${$userData?.username}`, route: `/${$userData?.username}`},  {name: 'edit profile', route: `/${$userData.username}/edit`}, {name: 'logout', route: '/login'},] : [
    { name: "home", route: "/" },
    { name: "login", route: "/login" },
  ];


</script>

<div class="min-h-screen flex flex-col">
  <Nav list={listNav} />
  <slot />
</div>
