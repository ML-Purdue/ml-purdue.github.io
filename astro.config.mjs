import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";
const SHOULD_COMPRESS = false;
// https://astro.build/config
export default defineConfig({
  site: "https://ml-purdue.github.io",
  integrations: [
    mdx(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    SHOULD_COMPRESS && compress(),
  ].filter(Boolean),
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
