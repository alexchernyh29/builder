<template>
	<AtomWrapper style="margin-bottom: 20px;" :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
        <div class="editor-content" v-html="html_text"></div>
	</AtomWrapper>
</template>

<script setup>
	const props = defineProps({
		html_text: {
			default: "Title",
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
@import "../../assets/scss/main.scss";
</style>
