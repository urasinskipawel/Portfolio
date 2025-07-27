// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import path from 'path';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	vite: {
		resolve: {
			alias: {
				'@': path.resolve('./src'),
				'@components': path.resolve('./src/components'),
				'@constants': path.resolve('./src/constants'),
				'@icons': path.resolve('./src/icons'),
				'@layouts': path.resolve('./src/layouts'),
				'@pages': path.resolve('./src/pages'),
				'@types': path.resolve('./src/types'),
			},
		},
	},
});
