<template>
	<div style="display: flex; flex-direction: column; width: 100%;">
		<div class="docs-list">
			<div class="docs-list__item">
				<h3>Картинка</h3>
                <div class="docs-list__item-answer" v-if="bufData.img || bufData.img == ''">
					<BuilderUploadImage v-model:data="bufData.img" accept="*" :size="3000"/>
					<a :href="bufData.img" target="_blank">{{ bufData.img }}</a>
				</div>
                <h3>Заголовок карточки</h3>
				<div class="docs-list__item-question" v-if="bufData.title || bufData.title == ''">
					<textarea
						v-model="bufData.title"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Описание карточки</h3>
                <div class="docs-list__item-question" v-if="bufData.description || bufData.description == ''">
					<textarea
						v-model="bufData.description"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Текст кнопки</h3>
                <div class="docs-list__item-question" v-if="bufData.text_link || bufData.text_link == ''">
					<textarea
						v-model="bufData.text_link"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Ссылка кнопки</h3>
                <div class="docs-list__item-question" v-if="bufData.link || bufData.link == ''">
					<textarea
						v-model="bufData.link"
                        class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import BuilderUploadImage from "../../ui/uploadImageFile.vue";
	import { content } from "../../../../common/components/base";

const props = defineProps({
	data: {
		type: Object,
		default: content["props"]
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
h3 {
	margin: 10px 0 10px 0;
}
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
