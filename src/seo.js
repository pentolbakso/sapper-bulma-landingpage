import { writable } from "svelte/store";

export const seo = writable({
  title: "Web & Mobile App Development by Awesomesauce Studio",
  description: "",
  titleSuffix: "Awesomesauce Studio",
  name: "Awesomesauce Studio",
  locale: "en_EN",
  type: "website",
  url: "https://myawesomesite.com/",
});
