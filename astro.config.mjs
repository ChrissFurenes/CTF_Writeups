import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import partytown from "@astrojs/partytown";

export default defineConfig({
  site: 'https://chrissfurenes.github.io',
  base: 'CTF_Writeups',
  integrations: [
    react(), 
    partytown(
      {
        config: {
          forward: ["dataLayer.push"],
        },
      }
    )],

  output: "server",
  adapter: netlify()
});