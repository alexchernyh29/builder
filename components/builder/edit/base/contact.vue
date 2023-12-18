<template>
	<div style="display: flex; flex-direction: column; width: 100%;">
		<div class="docs-list">
			<div class="docs-list__item">
				<h2 style="margin-bottom: 10px;">Правая часть карточки</h2>
				<h3>Картинка карточки</h3>
                <div class="docs-list__item-answer" v-if="bufData.img || bufData.img == ''">
					<BuilderUploadImage v-model:data="bufData.img" accept="*" :size="3000"/>
					<a :href="bufData.img" target="_blank">{{ bufData.img }}</a>
				</div>
                <h3>ФИО</h3>
				<div class="docs-list__item-question" v-if="bufData.title || bufData.title == ''">
					<textarea
						v-model="bufData.title"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Должность</h3>
                <div class="docs-list__item-question" v-if="bufData.post || bufData.post == ''">
					<textarea
						v-model="bufData.post"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Описание карточки</h3>
                <div class="docs-list__item-question" v-if="bufData.text || bufData.text == ''">
					<textarea
						v-model="bufData.text"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Ссылка на профиль</h3>
                <div class="docs-list__item-question" v-if="bufData.link || bufData.link == ''">
					<textarea
						v-model="bufData.link"
                        class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
				<h2>Левая часть карточки</h2>
				<h3>Первый кружок</h3>
				<div class="docs-list__item-answer" v-if="bufData.img1 || bufData.img1 == ''">
					<BuilderUploadImage v-model:data="bufData.img1" accept="*" :size="3000"/>
					<a :href="bufData.img1" target="_blank">{{ bufData.img1 }}</a>
				</div>
				<h3>Второй кружок</h3>
				<div class="docs-list__item-answer" v-if="bufData.img2 || bufData.img2 == ''">
					<BuilderUploadImage v-model:data="bufData.img2" accept="*" :size="3000"/>
					<a :href="bufData.img2" target="_blank">{{ bufData.img2 }}</a>
				</div>
				<h3>Третий кружок</h3>
				<div class="docs-list__item-answer" v-if="bufData.img3 || bufData.img3 == ''">
					<BuilderUploadImage v-model:data="bufData.img3" accept="*" :size="3000"/>
					<a :href="bufData.img3" target="_blank">{{ bufData.img3 }}</a>
				</div>
				<h3>Четвёртый кружок</h3>
				<div class="docs-list__item-answer" v-if="bufData.img4 || bufData.img4 == ''">
					<BuilderUploadImage v-model:data="bufData.img4" accept="*" :size="3000"/>
					<a :href="bufData.img4" target="_blank">{{ bufData.img4 }}</a>
				</div>
				<h3>Пятый кружок</h3>
				<div class="docs-list__item-answer" v-if="bufData.img5 || bufData.img5 == ''">
					<BuilderUploadImage v-model:data="bufData.img5" accept="*" :size="3000"/>
					<a :href="bufData.img5" target="_blank">{{ bufData.img5 }}</a>
				</div>
				<h3>Шестой кружок</h3>
				<div class="docs-list__item-answer" v-if="bufData.img6 || bufData.img6 == ''">
					<BuilderUploadImage v-model:data="bufData.img6" accept="*" :size="3000"/>
					<a :href="bufData.img6" target="_blank">{{ bufData.img6 }}</a>
				</div>
				<h3>Счётчик кружка</h3>
				<div class="docs-list__item-question" v-if="bufData.text_counter || bufData.text_counter == ''">
					<textarea
						v-model="bufData.text_counter"
						class="docs-list__item-textarea"
						cols="30" rows="2">
					</textarea>
				</div>
                <h3>Текс кружка</h3>
				<div class="docs-list__item-question" v-if="bufData.text_description || bufData.text_description == ''">
					<textarea
						v-model="bufData.text_description"
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
	import { contact } from "../../../../common/components/base";

const props = defineProps({
	data: {
		type: Object,
		default: contact["props"]
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
