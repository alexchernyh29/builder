<template>
	<div class="faq">
		<div style="width: 100%;" v-if="bufData?.text_title || bufData?.text_title==''">
			<textarea
				v-model="bufData.text_title"
				class="faq-title"
				style="border-color: #8080801a; width: 100%; font-size: 28px;"
				cols="30" rows="2">
			</textarea>
		</div>
		<div style="margin-top: 16px; margin-right: auto; margin-bottom: 32px;" v-if="!!bufData?.default_open || bufData?.default_open == ''">
			<UiSwitch label="По умолчанию все открыто:" v-model:modelValue="bufData.default_open"/>
		</div>
		<div class="faq-list">
			<div class="faq-list__item" v-for="(item, i) in bufData.superarr" :key="i">
				<div class="faq-list__item-question" v-if="item.text_title || item.text_title == ''">
					<textarea
						v-model="bufData.superarr[i].text_title"
						style="border-color: #8080801a; width: 100%; font-size: 16px;"
						cols="30" rows="2">
					</textarea>
				</div>
				<div class="faq-list__item-answer" v-if="bufData.superarr?.[i].html_paragraph || bufData.superarr?.[i].html_paragraph == ''">
					Ответ: <BuilderTipTap2 v-model:modelValue="bufData.superarr[i].html_paragraph"/>
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
				Добавить вопрос
		</button>
	</div>
</template>
<script setup>
	import BuilderTipTap2 from "../../ui/tip-tap2.vue";
	import UiSwitch from "../../ui/switch.vue";
	import { blogFaq } from "../../../../common/components/blog"

	const props = defineProps({
		data: {
			type: Object,
			default: blogFaq["props"]
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
	bufData.value.superarr.push(JSON.parse(JSON.stringify(blogFaq["props"].superarr[0])))
}


</script>

<style lang="scss" scoped>
	.faq {
		display: flex;
		padding: 32px;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		align-self: stretch;
		background: #F9F8F9;
		border-radius: 32px;
		&-list {
			width: 100%;
			&__item {
				margin-bottom: 24px;
				border-bottom: 1px solid rgb(128 128 128 / 20%);
				margin-bottom: 28px;
				padding-bottom: 16px;
				&-question {
					margin-bottom: 16px;
				}
			}
		}
		h2 {
			font-size: 32px;
			font-weight: 700;
			width: 100%;
		}
		h4 {
			font-size: 24px;
			font-style: normal;
			font-weight: 700;
			display: inline-block;
			padding-left: 8px;
			cursor: pointer;
		}
	}
</style>
