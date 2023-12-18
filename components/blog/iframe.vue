<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
        <div v-html="iframe"></div>
	</AtomWrapper>
</template>

<script setup>
	const props = defineProps({
        iframe: {
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
</style>
