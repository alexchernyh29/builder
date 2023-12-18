<template>
	<div style="display: flex; flex-direction: column; width: 100%;">
		<div class="editor-wrap">
			<UiSelect
				v-model="bufData.size"
				read-text="text"
				read-value="value"
				:options="[
					{'text': 'Название страницы', 'value': '1'},
					{'text': 'Заголовок', 'value': '2'}
				]"
				style="width: 150px;"
			/>
		</div>
		<textarea
			class="title-text"
			:class="[`classH${bufData.size}`]"
			v-model="bufData.text_text"
			style="border-color: #8080801a;"
			cols="30" rows="3"></textarea>
	</div>
</template>

<script setup>
import { blogHeading } from "../../../../common/components/blog"
import UiSelect from "../../../ui/select.vue";

const props = defineProps({
	data: {
		type: Object,
		default: blogHeading["props"]
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
input {
	font-size: 32px;
	text-align: center;
	font-weight: 800;
}
.element {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 20px;
}

.editor-wrap {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	background: #FFF;
}
.title-text {
	&.classH1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #000000;
        @media (max-width: 720px) {
            font-size: 22px;
            line-height: 32px;
        }
	}
	&.classH2 {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        color: #1B1B29;
	}
}
</style>
