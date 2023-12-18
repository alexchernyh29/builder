<template>
	<div style="display: flex; flex-direction: column; width: 100%;">
		<div class="docs-list">
			<div class="docs-list__item" v-for="(item, i) in bufData.superarr" :key="i">
				<div class="docs-list__item-question" v-if="item.text_title || item.text_title">
					<textarea
						v-model="bufData.superarr[i].text_title"
						style="border-color: #8080801a; width: 100%; font-size: 16px;"
						cols="30" rows="2">
					</textarea>
				</div>
				<div class="docs-list__item-answer" v-if="bufData.superarr?.[i].link || bufData.superarr?.[i].link == ''">
					<BuilderUploadImage v-model:data="bufData.superarr[i].link" accept="*" :size="3000"/>
					<a :href="bufData.superarr[i].link" target="_blank">{{ bufData.superarr[i].link }}</a>
				</div>
				<br>
				<div style="margin-bottom: 16px; display: flex; gap: 10px;">
					<button @click.prevent="bufData.superarr.splice(i, 1)" v-show="bufData.superarr.length > 1">удалить</button>
					<button @click.prevent="switchComponents(i, i-1)" v-show="i > 0">поднять</button>
					<button @click.prevent="switchComponents(i, i+1)" v-show="bufData.superarr.length-1 > i">опустить</button>
				</div>
			</div>
		</div>
		<button
			v-if="bufData.superarr.length > 0 && bufData.superarr.length < 30"
			@click.prevent="addCard">
				Добавить документ
		</button>
	</div>
</template>
<script setup>
	import BuilderUploadImage from "../../ui/uploadImageFile.vue";
	import { docs } from "../../../../common/components/base";

const props = defineProps({
	data: {
		type: Object,
		default: docs["props"]
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

const switchComponents = (i, n) => {
	let tmp = bufData.value.superarr[i];
	bufData.value.superarr[i] = bufData.value.superarr[n];
	bufData.value.superarr[n] = tmp;
}

const addCard = () => {
	bufData.value.superarr.push(JSON.parse(JSON.stringify(docs["props"].superarr[0])))
}
</script>

<style lang="scss" scoped>

</style>
