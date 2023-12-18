<template>
    <div v-if="!(block_Crawler && isBot)">
        <Html>
			<Head>
				<Link v-if="preload && isMobile" rel="preload" :href="mobile" as="image"/>
				<Link v-if="preload && !isMobile" rel="preload" :href="desktop" as="image"/>
                <Link v-if="prefetch && isMobile" rel="prefetch" :href="mobile"/>
				<Link v-if="prefetch && !isMobile" rel="prefetch" :href="desktop"/>
			</Head>
		</Html>
        <picture :fetchpriority="fetchload">
            <source :srcset="mobile" media="(max-width: 768px)">
            <img :src="desktop" loading="lazy" style="width: 100%;">
        </picture>
    </div>
</template>
<script setup>
	const props = defineProps({
		mobile: {
			type: String,
			default: "",
		},
		desktop: {
			type: String,
			default: "",
		},
		fetchload: {
			type: String,
			default: 'low'
		},
		preload: {
			type: Boolean,
			default: false
		},
        prefetch: {
			type: Boolean,
			default: false
		},
        lazy: {
			type: Boolean,
			default: false
		},
        block_Crawler: {
			type: Boolean,
			default: false
		}
	})
    const { isBot, isMobile } = useDevice();
</script>