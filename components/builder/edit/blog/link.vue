<template>
	<div class="content__wrap-document" style="display: flex;">
			<input
				class="content__wrap-block-info-text"
				style="margin-left: 12px; width: 100%;"
				type="text"
				placeholder="Название ссылки"
				v-model="bufData.text_text">
			<svg style="background: rgb(2, 91, 255);border-radius: 50%;padding: 6px; height: 25px; width: 25px;" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_1207_2002)">
					<path d="M1.51953 6H10.4795" stroke="white" stroke-width="0.96" stroke-linecap="round"/>
					<path d="M6.63965 2.15991L10.7996 5.99991L6.63965 9.83991" stroke="white" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round"/>
				</g>
				<defs>
					<clipPath id="clip0_1207_2002">
						<rect width="11.52" height="11.52" fill="white" transform="translate(0.240234 0.23999)"/>
					</clipPath>
				</defs>
			</svg>
			<input
				type="text"
				style="width: 100%;"
				placeholder="Адрес ссылки"
				v-model="bufData.link_href">
		</div>
</template>

<script setup>
	import { blogLink } from "../../../../common/components/blog"

const props = defineProps({
	data: {
		type: Object,
		default: blogLink["props"]
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
.content {
	&__wrap-document {
		margin-top: 8px;
		margin-bottom: 24px;
		padding: 24px;
		background: #F2F2F2;
		border-radius: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		@media (max-width: 720px) {
			padding: 12px;
		}
	}

	&__wrap-document-info {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	&__wrap-document-donwload {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
		background: #025BFF;
		border-radius: 16px;
		@media (max-width: 720px) {
			width: 25px;
			height: 25px;
		}
	}
}
</style>
