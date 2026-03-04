/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				surface: 'var(--color-surface)',
				'surface-glass': 'var(--color-surface-glass)',
				accent: 'var(--color-accent)',
				'accent-green': 'var(--color-accent-green)',
			},
			fontFamily: {
				mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
			},
		},
	},
	plugins: [],
}
