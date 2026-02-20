import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Graph Theory',
				short_name: 'Graph Theory',
				description: 'Premium PWA for Graph Theory course',
				theme_color: '#0a0c10',
				background_color: '#0a0c10',
				display: 'standalone',
				icons: [
					{
						src: '/img/icon-192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/img/icon-512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	]
});
