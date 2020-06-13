<script>
  export let isImageLeft = true;
  export let image;
  export let title;
  export let description;
  export let width = 400;
  export let height = 250;
</script>

<div class="columns is-vcentered">
  <div class="column has-text-centered">
    {#if isImageLeft}
      <img
        src={image}
        style="object-fit: cover; width:{width}px; height:{height}px;"
        alt="" />
    {:else}
      <div>
        <h1 class="title">{title}</h1>
        <h2 class="subtitle">{description}</h2>
      </div>
    {/if}
  </div>
  <div class="column has-text-centered">
    {#if !isImageLeft}
      <img
        src={image}
        style="object-fit: cover; width:{width}px; height:{height}px;"
        alt="" />
    {:else}
      <div>
        <h1 class="title">{title}</h1>
        <h2 class="subtitle">{description}</h2>
      </div>
    {/if}
  </div>
</div>
