

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({

            fallback: 'index.html'

        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/Maha-Kumbh-Story' : '',
        }
    }
    }

export default config;


