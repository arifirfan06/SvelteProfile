<script>
export let list = []
</script>

<div class=" h-12 bg-stone-400 6 flex flex-row items-center">
    {#each list as item, index (item.name)}
    <a class=" text-gray-900 mx-6 justify-center" href={item.route}>{item.name}</a>
    {/each}

</div>