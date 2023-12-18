<template>
	<div style="display: flex; flex-direction: column; width: 100%;">
		<UiSelect
			v-model="bufData.space"
			read-text="text"
			read-value="value"
			:options="[
				{'text': 'Large - 48', 'value': 'large'},
				{'text': 'Bigger - 40', 'value': 'bigger'},
				{'text': 'Big - 32', 'value': 'big'},
				{'text': 'Medium - 24', 'value': 'medium'},
				{'text': 'Small - 16', 'value': 'small'},
				{'text': 'Less - 8', 'value': 'less'},
				{'text': 'Last indent on the page - 60', 'value': 'last'}
				
			]"
			style="width: 100%;"
		/>
		<div class="sc20-space" :class="[space]"></div>
	</div>
</template>

<script setup>
	import UiSelect from "../../../ui/select.vue";
	import { blogSpace } from "../../../../common/components/blog"

	const props = defineProps({
		data: {
			type: Object,
			default: blogSpace["props"]
		},
		page_uid: { //this prop is required, always copypaste
			type: String,
			default: ''
		}
	})
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
.sc20-space {
	display: block;
	width: 100%;
	&.less{
		height: 8px;
	}
	&.small {
		height: 24px;
	}
	&.medium {
		height: 48px;
	}
	&.big {
		height: 60px;
	}
	&.bigger {
		height: 80px;
	}
	&.large {
		height: 100px;
	}
	&.last {
		height: 160px;
	}
}
</style>
