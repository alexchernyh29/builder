<template>
	<div>
		<div v-for="(item, i) in metaValue" :key="i">
			<h1><b>{{ i }}</b>:</h1>
			<h3>Title page</h3>
			<input
				v-model="metaValue[i].title"
				style="margin-bottom: 16px; border: 1px solid grey; padding: 5px; width: 100%;"
			/>
			<h3>Description page</h3>
			<input
				v-model="metaValue[i].description"
				style="margin-bottom: 16px; border: 1px solid grey; padding: 5px; width: 100%;"
			/>
			<div style="margin-bottom: 16px;">
				<h3>Image page</h3>
				<BuilderUploadImage :file_size="30" v-model:modelValue="metaValue[i].image"/>
			</div>
		</div>
	</div>
</template>
<script setup>
import BuilderUploadImage from "../../uploadFile.vue";

const props = defineProps({
	meta: {
		default: null,
	}
})
const emit = defineEmits(['update:meta'])

const metaValue = computed({
	get() {
		return props.meta
	},
	set(newValue) {
		emit('update:meta', newValue);
	},
});
const listLangs = ['ru']

const request = ref(null)
</script>