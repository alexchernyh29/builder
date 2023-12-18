<template>
	<div style="display: flex; flex-direction: row; width: 100%;">
		<div v-html="bufData.iframe"></div>
		<div>
			add iframe here
			<textarea name="" id="" cols="30" rows="10" v-model="bufData.iframe"></textarea>
		</div>
	</div>
</template>

<script setup>
	import { blogIframe } from "../../../../common/components/blog"

const props = defineProps({
	data: {
		type: Object,
		default: blogIframe["props"]
	},
	page_uid: { //this prop is required, always copypaste
		type: String,
		default: ''
	}
})
// this code is required, always copypaste
const emit = defineEmits(['update:data'])
const bufData = computed({
	get() {
		return props.data
	},
	set(newValue) {
		emit('update:data', newValue);
	},
});
</script>

<style lang="scss" scoped>

</style>
