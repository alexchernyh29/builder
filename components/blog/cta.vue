<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
		<div class="cta-blog">
			<div v-html="text_head"></div>
			<a :href="link_href">{{ link_a }}</a>
		</div>
	</AtomWrapper>
</template>

<script setup>
	const props = defineProps({
        text_head: {
			default: "Title",
		},
		link_a: {
			default: "",
		},
		link_href: {
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
.cta-blog {
	background-image: url(https://www.smartcat.com/blog/content/images/2022/07/image-7--1--27.png);
    width: 100%;
	background-color: #2c2440;
    border-radius: 16px;
    min-height: unset;
    overflow: hidden;
    padding: 32px 40px;
	position: relative;
    background-color: #e7e7e7;
    background-size: cover;
    background-position: center;
	a {
		background: #2c2440;
    	color: #fff;
		border-radius: 6px;
		font-size: 16px;
		font-weight: 600;
		line-height: 150%;
		padding: 8px 16px;
	}
}
</style>
