import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://joshuasello.com",
    output: "static",
    trailingSlash: "always",
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()]
    }
});
