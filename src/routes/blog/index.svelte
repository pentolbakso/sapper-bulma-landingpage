<script context="module">
  import { slugify } from "../../utils/formatter";

  export function preload({ params, query }) {
    return this.fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15`)
      .then((r) => r.json())
      .then((posts) => {
        const postsWithSlug = posts.map((p) => {
          return {
            ...p,
            slug: slugify(p.title),
          };
        });
        return { posts: postsWithSlug };
      });
  }
</script>

<script>
  import { seo } from "../../seo.js";
  export let posts;

  seo.update((state) => {
    state.title = "Blog";
    return state;
  });
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.8;
  }
</style>

<section class="section is-small">
  <div class="container">

    <h2 class="is-size-3">Recent posts</h2>

    <ul>
      {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
        <li>
          <a class="is-size-5" rel="prefetch" href="blog/{post.id}/{post.slug}">
            {post.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
