<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
        <h2 class="title-text" :class="[`classH${size}`]">{{ text_text }}</h2>
	</AtomWrapper>
</template>

<script setup>
	const props = defineProps({
		text_text: {
			default: "Title",
		},
		bg: {
			default: "",
		},
		full: {
			default: false,
		},
		ab_page: {
			default: "0",
		},
        ab: {
			default: '0'
		},
		size: {
			default: "2"
		}
	})
</script>

<style lang="scss" scoped>
.title-text {
	&.classH1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #000000;
    	margin-bottom: 20px;
        @media (max-width: 720px) {
            font-size: 22px;
            line-height: 32px;
        }
	}
	&.classH2 {
		margin-top: 16px;
        margin-bottom: 20px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        color: #1B1B29;
	}
}
</style>
