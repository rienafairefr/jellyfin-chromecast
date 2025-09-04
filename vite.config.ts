import { sentryVitePlugin } from '@sentry/vite-plugin';
/* eslint-disable sort-keys */

import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    process.env = {
        ...process.env,
        ...loadEnv(mode, process.cwd(), 'BUILD_VITE')
    };

    return {
        root: 'src',
        base: './',

        build: {
            outDir: '../dist',
            emptyOutDir: true,
            target: 'es2015',
            assetsInlineLimit: 0,
            sourcemap: true
        },

        esbuild: {
            target: 'es2015'
        },

        server: {
            port: 9000
        },

        plugins: [
            sentryVitePlugin({
                telemetry: false,
                authToken: process.env.BUILD_VITE_SENTRY_AUTH_TOKEN,
                org: process.env.BUILD_VITE_SENTRY_USERNAME,
                project: process.env.BUILD_VITE_SENTRY_PROJECT
            })
        ]
    };
});
