<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    //const res = await this.fetch(`blog/${params.slug}.json`);
    const res = await this.fetch(
      `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
    );
    const data = await res.json();
    if (res.status === 200 && data.length > 0) {
      return { post: data[0] };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { seo } from "../../../seo.js";
  export let post;

  seo.update((state) => {
    state.title = post.title;
    return state;
  });
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<section class="section is-small">
  <div class="container">

    <p>
      <a href="/blog">&#8592; Recent Posts</a>
    </p>

    <h2 class="is-size-4">{post.title}</h2>

    <div class="content">
      {@html post.body}
    </div>

  </div>
</section>
