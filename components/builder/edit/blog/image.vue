<template>
	<div style="display: flex; flex-direction: column; width: 100%;">
		<loadFile v-model:data="bufData.src"/>
	</div>
</template>

<script setup>
	import { blogImage } from "../../../../common/components/blog"
	import loadFile from "../../ui/uploadImageFile.vue"

const props = defineProps({
	data: {
		type: Object,
		default: blogImage["props"]
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
