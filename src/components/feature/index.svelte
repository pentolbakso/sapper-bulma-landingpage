<script>
  import Feature from "./Feature.svelte";
</script>

<section class="section is-small">
  <div class="container">
    <Feature
      title="Sophisticated"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      image="/images/day93-programing.png"
      isImageLeft={true} />
    <Feature
      title="Friendly"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      image="/images/day92-freelancing.png"
      isImageLeft={false} />
    <Feature
      title="Modern"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      image="/images/112-installing.png"
      isImageLeft={true} />
  </div>
</section>
