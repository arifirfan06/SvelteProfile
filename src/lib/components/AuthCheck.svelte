<script>
    import { user } from "$lib/firebase";
</script>

{#if $user}
<slot/>
{:else}
<div>
    <p class="text-error my-10">You need to sign in</p>
</div>
{/if}