<template>
    <div>
        <Html>
			<Head>
				<Link v-if="preload && isMobile" rel="preload" :href="mobile" as="image"/>
				<Link v-if="preload && !isMobile" rel="preload" :href="desktop" as="image"/>
			</Head>
		</Html>
        <picture v-if="showIt" :fetchpriority="fetchload" style="display: inline-block; height: 100%;">
            <source :srcset="mobile" media="(max-width: 768px)">
            <img
				width="300"
				height="300"
				:src="desktop"
				decoding="async"
				:loading="lazy ? 'lazy' : 'eager'"
				:alt="alt"
				style="width: 100%; height: auto;"
			/>
        </picture>
		<div v-else style="background-color: red; width: 100%;" ref="elem"></div>
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
		alt: {
			type: String,
			default: ""
		},
		fetchload: {
			type: String,
			default: 'auto'
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
		}
	})
    const { isMobile } = useDevice();

	const elem = ref(null);

	const showIt = ref(false)
	if (props.lazy == false) showIt.value = true

	onMounted(() => {
		if (props.lazy) {
			const options = {
				root: null,
				rootMargin: '10px',
				threshold: 0.1
			}
			const observer = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						showIt.value = true
						console.log(entry)
						observer.unobserve(elem.value)
					}
				})
			}, options)
			observer.observe(elem.value);
		}
	})
</script>