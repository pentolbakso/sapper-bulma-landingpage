<script>
  import { GA_TRACKING_ID, pageview } from "../lib/analytics";

  import Navbar from "../components/layout/Navbar.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import { stores } from "@sapper/app";
  import NProgress from "nprogress";
  import { seo } from "../seo.js";

  const dev = process.env.NODE_ENV === "development";

  let mounted = false;
  import { onMount } from "svelte";
  onMount(() => {
    mounted = true;
    if (!dev && GA_TRACKING_ID) setupGoogleAnalytics(GA_TRACKING_ID);
  });

  const setupGoogleAnalytics = (gaID) => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", gaID);
  };

  NProgress.configure({
    minimum: 0.16,
    showSpinner: false,
  });
  const { preloading, page } = stores();
  $: {
    if ($preloading) {
      NProgress.start();
    }
    if (!$preloading) {
      if (mounted) pageview($page.path);
      NProgress.done();
    }
  }
</script>

<svelte:head>
  <!-- seo stuffs-->
  <title>{$seo.title} | {$seo.titleSuffix}</title>
  {#if $seo.description}
    <meta name="description" content={$seo.description} />
  {/if}
  <meta property="og:site_name" content={$seo.name} />
  <meta property="og:type" content={$seo.type} />
  <meta property="og:url" content={$seo.url} />
  <meta property="og:locale" content={$seo.locale} />

  {#if !dev && GA_TRACKING_ID}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id={GA_TRACKING_ID}">

    </script>
  {/if}
</svelte:head>

<Navbar />
<slot />
<Footer />
