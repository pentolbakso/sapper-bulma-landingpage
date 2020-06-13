<script>
  const porfolios = [
    {
      title: "Website A",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut laboreet dolore magnam aliquam quaerat voluptatem.",
      image: "/images/day94-ui-ux.png",
      url: "http://www.google.com",
    },
    {
      title: "Website B",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut laboreet dolore magnam aliquam quaerat voluptatem.",
      image: "/images/day94-ui-ux.png",
      url: "http://www.google.com",
    },
    {
      title: "App C",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut laboreet dolore magnam aliquam quaerat voluptatem.",
      image: "/images/day94-ui-ux.png",
    },
    {
      title: "App D",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut laboreet dolore magnam aliquam quaerat voluptatem.",
      image: "/images/day94-ui-ux.png",
      url: "http://www.google.com",
    },
  ];

  import { seo } from "../seo.js";
  seo.update((state) => {
    state.title = "Portfolios";
    return state;
  });
</script>

<section class="section is-small">
  <div class="container">
    <h2 class="is-size-4">Portfolio</h2>
    <br />
    <div class="columns is-multiline">
      {#each porfolios as p, i}
        <div class="column is-4">
          <div class="card">
            <div class="card-image">
              <img
                src="/images/day94-ui-ux.png"
                alt="web studio"
                style={{ objectFit: 'cover', width: '100%', height: 150 }} />
            </div>
            <div class="card-content">
              <h3 class="is-size-5">{p.title}</h3>
              <p>{p.description}</p>
              {#if p.url}
                <a href={p.url} target="_blank">Link &rarr;</a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <div class="has-text-centered">
              <p>Build your own product now! Just drop us a call</p>
              <br />
              <a href="/contact" class="button is-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
