<template>
	<a :href="href" class="button"><slot>text</slot></a>
</template>
<script setup>
	const props = defineProps({
		text: {
			default: "Button",
			type: String
		},
        href: {
			default: "#",
			type: String
		}
    })
</script>
<style lang="scss" scoped>
.button {
    background: rgb(168, 85, 247);
	border: none;
	border-radius: 2em;
	padding: .5em 1em;
	font-size: .8em;
	font-weight: 600;
	color: white;
    line-height: 1.5;
    text-align: center;
	display: inline-block;
}
</style>