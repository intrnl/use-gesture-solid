import { defineConfig } from 'vite';

import solid from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [solid(), dts({ outputDir: 'types' })],
	build: {
		lib: {
			entry: './lib/index.ts',
			formats: ['es'],
		},
		rollupOptions: {
			external: ['solid-js', '@use-gesture/core', '@use-gesture/core/actions', '@use-gesture/core/utils'],
		},
		minify: false,
		sourcemap: true,
		target: 'esnext',
		modulePreload: {
			polyfill: false,
		},
	},
});
