// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Actor',
            social: {
                github: 'https://github.com/apify/actor-whitepaper',
            },
            sidebar: [
                {
                    label: 'Introduction',
                    items: [
                        {label: 'Introduction', slug: 'introduction/introduction'},
                        {label: 'Background', slug: 'introduction/background'},
                        {label: 'Overview', slug: 'introduction/overview'},
                        {label: 'Apify platform', slug: 'introduction/apify-platform'},
                    ],
                },
                {
                    label: 'Basic concepts',
                    items: [
                        {label: 'Basic concepts', slug: 'basic-concepts/basic-concepts'},
                        {label: 'Input', slug: 'basic-concepts/input'},
                        {label: 'Run environment', slug: 'basic-concepts/run-environment'},
                        {label: 'Output', slug: 'basic-concepts/output'},
                        {label: 'Storage', slug: 'basic-concepts/storage'},
                    ],
                },
            ],
            customCss: [
                './src/styles/custom.css'
            ],
            logo: {
                light: './src/assets/logo-light.svg',
                dark: './src/assets/logo-dark.svg',
                replacesTitle: true
            },
        }),
    ],
});
