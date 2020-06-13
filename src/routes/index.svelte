<script>
  import Hero from "../components/hero/index.svelte";
  import Features from "../components/feature/index.svelte";
  import CallToAction from "../components/cta/index.svelte";
  import { seo } from "../seo.js";

  seo.update((state) => {
    state.title = "Web & Mobile App Development";
    return state;
  });
</script>

<Hero />
<Features />
<CallToAction />
