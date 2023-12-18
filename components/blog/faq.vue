<template>
	<AtomWrapper style="margin-bottom: 20px;" :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full" itemscope itemtype="https://schema.org/FAQPage">
		<div class="faq">
			<div class="faq-title" v-if="text_title">
				<h2>{{ text_title }}</h2>
			</div>
			<div class="faq-list">
				<details
					v-for="(item, i) in superarr" :key="'question-'+i"
					class="faq-list__item"
					itemscope
					itemprop="mainEntity"
					:open="!!default_open || default_open == undefined"
					itemtype="https://schema.org/Question">
					<summary :class="{'default_open': !!default_open || default_open == undefined}" itemprop="name" class="faq-list__item-question">
						<h4>{{ item.text_title }}</h4>
					</summary>
					<div
						class="faq-list__item-answer"
						itemscope
						itemprop="acceptedAnswer"
						itemtype="https://schema.org/Answer">
						<div itemprop="text">
							<div class="editor-content" v-html="item.html_paragraph"></div>
						</div>
					</div>
				</details>
			</div>
		</div>
	</AtomWrapper>
</template>
<script setup>
	const props = defineProps({
		bg: {
			default: "",
		},
		full: {
			default: false,
		},
		ab_page: {
			default: "0",
		},
		pd:  {
			default: false,
		},
		mod: {
			default: ""
		},
		text_title: {
			default: "Ответы на вопросы"
		},
		default_open: {
			default: false,
		},
		superarr: {
			default: [
				{
					text_title: "Текст вопроса",
					html_paragraph: '<p>Ответище</p>'
				}
			],
			type: Array
		},
		ab: {
			default: '0'
		}
	})
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";
	.faq {
		display: flex;
		padding: 32px;
		flex-direction: column;
		align-items: center;
		gap: 32px;
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
