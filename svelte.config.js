import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';


const config = {
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter({
            strict: false 
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/Maha-Kumbh-Story' : '',
        }
    },
};
export default config;