<template>
	<div
		v-if="ab == '0' || abdata == '0' || abdata == 'all' || ab == abdata || abdata === undefined"
		:class="[fullwidth ? '' : 'mit_wrapper']"
		:style="'background: ' + bgcolor"
	>
		<div class="mit-wrapper">
			<slot/>
		</div>
	</div>
</template>
<script setup>
	const props = defineProps({
		ab: {
			default: '0'
		},
		abdata: {
			default: '0'
		},
		fullwidth: {
			default: false
		},
		bgcolor: {
			default: ''
		}
	})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';
</style>
