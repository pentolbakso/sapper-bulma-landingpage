<script>
  function sendEmail() {
    const email = "contact@awesomesaucestudio.com";
    window.open("mailto:" + email + "?subject=Hi");
  }
  function sendWhatsapp() {
    const number = "62811111111";
    const text = "Hi";
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
      text
    )}`;
    window.open(url);
  }
</script>

<section class="section is-small">
  <div class="container">
    <h2 class="is-size-4">Get in touch</h2>
    <br />
    <ul class="is-size-5">
      <li>
        <a on:click={sendEmail}>
          <span class="icon is-medium">
            <i class="far fa-envelope" />
          </span>
          <span>contact@awesomesaucestudio.com</span>
        </a>
      </li>
      <li>
        <a on:click={sendWhatsapp}>
          <span class="icon is-medium">
            <i class="fab fa-whatsapp" />
          </span>
          <span>Send a Whatsapp message</span>
        </a>
      </li>
      <li>
        <span class="icon is-medium">
          <i class="fa fa-map-marker-alt" />
        </span>
        <span>Jalan Mawar 33, Bandung, Indonesia</span>
      </li>
    </ul>
  </div>
</section>
