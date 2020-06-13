<script>
  import { stores } from "@sapper/app";

  let menuVisible = false;
  function handleClick() {
    menuVisible = !menuVisible;
  }

  const { page } = stores();
  $: path = $page.path;
</script>

<nav class="navbar is-primary">
  <div class="container">
    <div class="navbar-brand">
      <a href="/" class="navbar-item">
        <h1 class="has-text-weight-semibold">Awesomesauce Studio</h1>
      </a>
      <a
        href="#"
        class="navbar-burger burger {menuVisible ? 'is-active' : ''}"
        on:click={handleClick}>
        <span />
        <span />
        <span />
      </a>
    </div>
    <div class="navbar-menu {menuVisible ? 'is-active' : ''}">
      <div class="navbar-end">
        <a
          href="/"
          class="navbar-item {path === '/' ? 'is-active' : ''}"
          rel="prefetch">
          Home
        </a>
        <a
          href="/services"
          class="navbar-item {path === '/services' ? 'is-active' : ''}"
          rel="prefetch">
          Our Services
        </a>
        <a
          href="/portfolio"
          class="navbar-item {path === '/portfolio' ? 'is-active' : ''}"
          rel="prefetch">
          Portfolio
        </a>
        <a
          href="/blog"
          class="navbar-item {path.startsWith('/blog') ? 'is-active' : ''}"
          rel="prefetch">
          Blog
        </a>
        <span class="navbar-item">
          <a href="/contact" class="button is-info is-inverted" rel="prefetch">
            <span class="icon">
              <i class="far fa-envelope" />
            </span>
            <span>Contact Us</span>
          </a>
        </span>
      </div>
    </div>
  </div>
</nav>
