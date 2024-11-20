import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
    site: "https://lonevoice.in",
    build: {
        assets: "_assets"
    },
    integrations: [pagefind()],
});
