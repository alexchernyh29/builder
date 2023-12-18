<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
        <img loading='lazy' :src="src" :alt="text_alt"/>
	</AtomWrapper>
</template>

<script setup>
	const props = defineProps({
		src: {
			default: "Title",
		},
        text_alt: {
            default: "",
        },
		bg: {
			default: "",
		},
		full: {
			default: false,
		},
		ab_page: {
			default: "0",
		},
        ab: {
			default: '0'
		},
	})
</script>

<style lang="scss" scoped>
img {
        border-radius: 32px;
        width: 100%;
        max-width: 800px;
		margin-bottom: 16px;
    }
</style>
