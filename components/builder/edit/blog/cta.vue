<template>
	<div>
		<div class="cta-blog">
			<BuilderTipTap2 v-model:modelValue="bufData.text_head" style="text-align: center; color: white; background-color: rgba(250, 235, 215, 0.559);"/>
			<div style="color: white;">
				Text in link: <input type="text" v-model="bufData.link_a" style="width: 100%; background-color: rgba(250, 235, 215, 0.559);"><br>
				Href in link:<input type="text" v-model="bufData.link_href" style="width: 100%; background-color: rgba(250, 235, 215, 0.559);">
			</div>
		</div>
	</div>
</template>

<script setup>
    import BuilderTipTap2 from "../../ui/tip-tap2.vue";
	import { blogCta } from "../../../../common/components/blog"

const props = defineProps({
	data: {
		type: Object,
		default: blogCta["props"]
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
.cta-blog {
	background-image: url(https://www.smartcat.com/blog/content/images/2022/07/image-7--1--27.png);
    width: 100%;
	background-color: #2c2440;
    border-radius: 16px;
    min-height: unset;
    overflow: hidden;
    padding: 32px 40px;
	position: relative;
    background-color: #e7e7e7;
    background-size: cover;
    background-position: center;
	a {
		background: #2c2440;
    	color: #fff;
		border-radius: 6px;
		font-size: 16px;
		font-weight: 600;
		line-height: 150%;
		padding: 8px 16px;
	}
}
</style>
