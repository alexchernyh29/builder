<template>
	<div class="tag-question">
		<p class="text-question">{{text}}</p>
	</div>
</template>

<script setup>
    const props = defineProps({
		text: {
			default: "text",
			type: String
		},
    })
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.text-question{
    font-family: 'Inter';
    font-weight: 400;
    @include adaptiv-size(32, 16, 14);
    @include adaptiv-height(48, 24, 20);
    display: inline-block;
    align-items: center;
    color: #921CBC;
    padding: 20px 32px 24px;
    border: 1px solid #921CBC;
    border-radius: 120px;
}
.text-question:hover{
    color: #fff;
    background-color: #921CBC;
}
@media only screen and (max-width: 1920px) {
    .text-question{
        padding: 15px 24px 18px;
    }
}

@media only screen and (max-width: 1281px) {
    .text-question{
        padding: 10px 16px 12px;
    }
}
@media only screen and (max-width: 1000px) {
    .text-question{
        margin-right: 0px;
        padding: 4px 16px 4px 18px;
    }
    
}
</style>
