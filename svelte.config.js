import adapter from '@sveltejs/adapter-static';

import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';


const config = {
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter({

            fallback: 'index.html'

        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/Maha-Kumbh-Story' : '',
        }
    }
    },

export default config;