<template>
    <div class="wrap">
		
		<p v-if="sub && sub.active" class="subscription__text">
			<svg v-if="sub && sub.active" style="vertical-align: middle;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M3.57919 16.3063L3.00123 7.32852C2.96912 6.82548 3.57335 6.54818 3.93336 6.89943L6.55363 9.45451C6.55363 9.45451 9.5485 6.47325 11.1072 4.91452C11.6083 4.41245 12.4188 4.4144 12.917 4.91744C14.4611 6.4752 17.4463 9.45937 17.4463 9.45937C17.4463 9.45937 18.9904 7.94442 20.0685 6.88775C20.4285 6.53455 21.0318 6.81575 20.9987 7.31879L20.4207 16.3054C20.3069 18.0781 18.8348 19.4579 17.059 19.4579H6.94185C5.16517 19.4579 3.694 18.0781 3.57919 16.3063Z" stroke="#921CBC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M12.0001 14.6139V14.6606M12.1893 14.624C12.1893 14.7291 12.104 14.8143 11.9989 14.8143C11.8938 14.8143 11.8086 14.7291 11.8086 14.624C11.8086 14.5188 11.8938 14.4336 11.9989 14.4336C12.104 14.4336 12.1893 14.5188 12.1893 14.624Z" stroke="#921CBC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			Действующий участник
		</p>
		<p v-else class="subscription__text">Членство не оформлено</p>
		<p v-if="sub && sub.active"  class="subscription__text">до {{ new Date(Number(sub.finish)).toLocaleString("ru", options) }}</p>
	</div>
</template>

<script setup>
const sub = useSub()
const options = {
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
	}
}
.wrap {
	display: flex;
	flex-direction: column;
	justify-content:flex-start;
	align-items: flex-start;
    border: 1px solid #921CBC;
    border-radius: 120px;
    padding: 20px;
	&__next {
		background-color: #025BFF;
		border-radius: 50%;
		padding: 16px;
	}
	&__text{
		color: #921CBC;
		font-size: 18px;
		font-weight: 700;
		line-height: 28px;
	}
}
</style>