export default defineNuxtConfig({
	components: {
		global: true,
		dirs: ['~/components']
	},
	modules: [
		'@nuxtjs/device',
		'@nuxtjs/supabase'
	],
	css: [
		'assets/scss/root.scss'
	],
	runtimeConfig: {
		SUPABASE_URL: process.env?.SUPABASE_URL,
		SUPABASE_KEY: process.env?.SUPABASE_KEY
	},
	supabase: {
		url: process.env?.SUPABASE_URL,
		key: process.env?.SUPABASE_KEY,
		redirect: false,
		cookieName: 'sbsb',
	},
})
