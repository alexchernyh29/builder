<script setup>
const props = defineProps({
  placeholder: {
	type: String,
	default: "",
  },
  label: {
	type: String,
	default: "",
  },
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const value = computed({
	get() {
		return props.modelValue;
	},
	set(newValue) {
		emit('update:modelValue', newValue);
	},
});
</script>
<template>
	<div class="input-settings">
		<label for="">{{label}}</label>
		<input v-model="value" :placeholder="placeholder">
	</div>
</template>
<style lang="scss" scoped>
.input-settings {
  label {
	display: block;
	color: #231D33;
	letter-spacing: 1px;
	font-family: 'Inter';
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	margin-left: .5em;
	margin-bottom: 8px;
	width: 100%;
  }
  input {
	background: #FFFFFF;
	border: 1px solid #E6E5E8;
	border-radius: 6px;
	padding: .5em 1em;
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #ABA7B3;
	width: 100%;
	&:focus-visible {
		outline: none;
		border: 1px solid #DBD1F2;
		box-shadow: 0 0 1em #DBD1F2;
		color: #333;
	}
  }
}
</style>