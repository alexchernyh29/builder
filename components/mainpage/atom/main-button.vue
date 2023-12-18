<template>
	<div>
		<NuxtLink :to="href" class="main__button button__left-right" :class="cssClass">{{ title }}</NuxtLink>
	</div>
</template>

<script setup>
	const props = defineProps({
		title: {
			default: "title",
			type: String
		},
		href: {
			default: "https://t.me/MIT_union"
		},
		cssClass:{

		}
	})

</script>
<style scoped lang="scss">
@import "./assets/scss/mainpage.scss";
.main__button { 
	padding: 32px 52px;
	border-radius: 60px;
	font-family: 'Inter';
	font-weight: 600;
	@include adaptiv-size(24, 12, 12);
	@include adaptiv-height(36, 18, 18);
	text-transform: uppercase;
	color: #FFFFFF;
	background-color: #34057B;
}

.button__left-right {
	background: linear-gradient(246deg, #34057B 50%, #230254 50%);
	background-size: 200% 100%;
	background-position: bottom right;
	transition: all .3s ease-out;
	border-radius: 600px;
}

.button__left-right:hover {
	background-position: bottom left;
	color: #fff;
}

@media only screen and (max-width: 1921px) {
	.main__button { 
		padding: 24px 39px;
	}
}
@media only screen and (max-width: 1281px) {
	.main__button { 
		padding: 16px 26px;
	}
}
@media only screen and (max-width: 400px) {
	.main__button { 
		padding: 10px;
		font-size: 12px;
	}
}
</style>
