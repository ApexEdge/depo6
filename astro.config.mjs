import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    output: 'server',
    adapter: cloudflare({
        mode: 'directory'
    }),
    build: {
        inlineStylesheets: 'auto'
    },
    vite: {
        build: {
            minify: 'terser',
            cssMinify: true
        },
        ssr: {
            noExternal: ['@astrojs/cloudflare']
        }
    }
});
