<template>
	<div style="display: flex; flex-direction: column; width: 100%;">
		<BuilderTipTap2 class="editor-content" v-model:modelValue="bufData.html_text"/>
	</div>
</template>

<script setup>
    import BuilderTipTap2 from "../../ui/tip-tap2.vue";
	import { blogText } from "../../../../common/components/blog"

const props = defineProps({
	data: {
		type: Object,
		default: blogText["props"]
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
@import "../../../../assets/scss/main.scss";
</style>
