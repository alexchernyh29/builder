<template>
	<div class="tag">
		<p class="tag-text" :class="cssClass">{{title}}</p>
	</div>
</template>

<script setup>
    const props = defineProps({
		title: {
			default: "title",
			type: String
		},
        cssClass:{

        }
    })
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.tag-text{
    font-family: 'Inter';
    font-weight: 400;
    @include adaptiv-size(48, 24, 16);
    @include adaptiv-height(64, 32, 24);
    color: #FFFFFF;
    padding: 10px 24px 12px;
    background: #921CBC;
    border-radius: 120px;
}
.pink{
    background: #E45289;
}
@media only screen and (max-width: 1000px) {
    .tag-text{
        padding: 4px 16px;
    }
}
</style>
