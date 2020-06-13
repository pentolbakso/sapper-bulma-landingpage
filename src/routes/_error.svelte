<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>

</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<section class="section is-large">
  <div class="container has-text-centered">
    <h1 class="title">{status} {error.message}</h1>
    <h2 class="subtitle">
      An unexpected error has occurred. Please contact the site owner.
    </h2>
    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}
  </div>
</section>
