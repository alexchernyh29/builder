<template>
	<div class="subscription">
		<p v-if="sub && sub.active" class="subscription__text">Уровень подписки {{ !!sub?.type ? sub.type.toUpperCase() : '' }}</p>
		<p v-else class="subscription__text">Подписка не активна</p>
		<div v-if="sub && sub.active" class="wrap">
			<p v-if="!!sub && sub?.finish" class="wrap__text">Активно до: {{ new Date(Number(sub.finish)).toLocaleString("ru", options) }}</p>
		</div>
		<div v-else class="wrap">
			<NuxtLink :to="'/profile/subscription/'" class="wrap__text">Оформить</NuxtLink>
			<NuxtLink :to="'/profile/subscription/'" class="wrap__next">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
					<path d="M1.99951 9H15.9995" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
					<path d="M9.99951 3L16.4995 9L9.99951 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</NuxtLink>
		</div>
	</div>
	
</template>

<script setup>
const sub = useSub()
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
</script>

<style lang="scss" scoped>
.subscription {
	padding: 24px;
	background: #921CBC;
	border-radius: 32px;
	&__text {
		color: #921CBC;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		background: #FFF;
		padding: 8px 16px;
		border-radius: 120px;
		width: 225px;
	}
}
.wrap {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 96px;
	&__next {
		background-color: #025BFF;
		border-radius: 50%;
		padding: 16px;
	}
	&__text{
		color: #FFF;
		font-size: 18px;
		font-weight: 700;
		line-height: 28px;
	}
}
</style>