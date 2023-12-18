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
	color: rgba(rgb(168, 85, 247), .8);
	letter-spacing: 1px;
	font-size: .8em;
	margin-left: .5em;
	margin-bottom: .2em;
	width: 100%;
  }
  input {
	background: rgba(rgb(168, 85, 247), .1);
	border: none;
	border-radius: 2em;
	padding: .5em 1em;
	font-size: .8em;
	font-weight: 600;
	color: rgba(rgb(168, 85, 247), .8);
	width: 100%;
	&:focus-visible {
		border: none;
		outline: none;
		box-shadow: 0 0 10px rgb(168, 85, 247, .4);
	}
  }
}
</style>