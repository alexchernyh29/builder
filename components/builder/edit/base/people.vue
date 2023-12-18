<template>
	<div style="display: flex; flex-direction: column; width: 100%;">
		<div class="docs-list">
			<div class="docs-list__item" v-for="(item, i) in bufData.superarr" :key="i">
                <div class="docs-list__item-answer" v-if="bufData.superarr?.[i].img || bufData.superarr?.[i].img == ''">
					<BuilderUploadImage v-model:data="bufData.superarr[i].img" accept="*" :size="3000"/>
					<a :href="bufData.superarr[i].img" target="_blank">{{ bufData.superarr[i].img }}</a>
				</div>
                <h3>ФИО</h3>
				<div class="docs-list__item-question" v-if="item.text_title || item.text_title">
					<textarea
						v-model="bufData.superarr[i].text_title"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Должность</h3>
                <div class="docs-list__item-question" v-if="item.post || item.post">
					<textarea
						v-model="bufData.superarr[i].post"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Описание карточки</h3>
                <div class="docs-list__item-question" v-if="item.description || item.description">
					<textarea
						v-model="bufData.superarr[i].description"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Ссылка на профиль</h3>
                <div class="docs-list__item-question" v-if="bufData.superarr?.[i].link_profile || bufData.superarr?.[i].link_profile == ''">
					<textarea
						v-model="bufData.superarr[i].link_profile"
                        class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
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
				Добавить карточку
		</button>
	</div>
</template>
<script setup>
	import BuilderUploadImage from "../../ui/uploadImageFile.vue";
	import { people } from "../../../../common/components/base";

const props = defineProps({
	data: {
		type: Object,
		default: people["props"]
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
	bufData.value.superarr.push(JSON.parse(JSON.stringify(people["props"].superarr[0])))
}
</script>

<style lang="scss" scoped>
.docs-list__item-textarea {
    margin-top: 10px;
    margin-bottom: 10px;
    border-color: #8080801a;
    width: 100%;
    font-size: 16px;
    border: 2px solid #444444;
    border-radius: 10px;
}
</style>
