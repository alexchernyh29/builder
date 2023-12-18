<template>
	<div class="subprice">
		<h3>{{ title }}</h3>
		<h2>{{ price }}/месяц</h2>
		<hr>
		<button
			v-if="type_sub !== 'free'"
			@click.prevent="paySub(price, how_month, type_sub)">
			Оплатить
		</button>
		<div class="desktop">
			<slot></slot>
		</div>
		<div class="mobile">
			<a href="#" @click.prevent="opening = true" v-if="!opening">
				<span>преимущества</span> <span>+</span>
			</a>
			<slot v-if="opening"></slot>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		default: 'Бесплатно',
	},
	price: {
		type: Number,
		default: 199,
	},
	how_month: {
		type: Number,
		default: 1
	},
	type_sub: {
		type: String,
		default: 'free'
	}
})
const user = useSupabaseUser()
const client = useSupabaseClient()
const dataTG = ref()
const opening = ref(false)
dataTG.value = await client
	.from('profiles')
	.select(`telegram`)
	.eq('id', user.value.id)
	.single()
const paySub = async (sum, time, type) => {
	await $fetch('/api/getIdempotenceKey/', {
		method: 'POST',
		body: JSON.stringify({
			uuid: user.value.id,
			email: user.value.email,
			telegram: dataTG.value.data.telegram,
			sum: sum,
			time: time,
			type: type,
			what: 'sub'
		})
	}).then(data => {
		navigateTo(data.confirmation.confirmation_url, { external: true })
	});
}
</script>

<style lang="scss" scoped>
.subprice {
	display: flex;
	padding: 24px 24px 40px 24px;
	flex-direction: column;
	justify-content: flex-start;
	gap: 40px;
	border-radius: 24px;
	border: 1px solid #828282;
	@media (max-width: 560px) {
		gap: 0;
		padding: 16px;
	}
	.desktop {
		@media (max-width: 1050px) {
			display: none;
		}
	}
	.mobile {
		display: none;
		@media (max-width: 1050px) {
			display: block;
		}
		a {
			color: #34057B;
			font-size: 16px;
			font-style: normal;
			font-weight: 600;
			line-height: 150%;
			text-transform: uppercase;
			display: flex;
			justify-content: space-between;
			@media (max-width: 560px) {
				font-size: 12px;
			}
		}
	}
	h3 {
		color: #1B1B29;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: 150%;
		@media (max-width: 560px) {
			font-size: 14px;
		}
	}
	h2 {
		color: #1B1B29;
		font-size: 30px;
		font-style: normal;
		font-weight: 600;
		line-height: 36px;
		@media (max-width: 560px) {
			font-size: 20px;
			margin-bottom: 16px;
		}
	}
	hr {
		width: 100%;
		@media (max-width: 560px) {
			margin-bottom: 16px;
		}
	}
	button {
		padding: 16px 26px;
		border-radius: 60px;
		border: 1px solid #921CBC;
		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		line-height: 150%;
		text-transform: uppercase;
		transition: .2s;
		background: transparent;
		width: 100%;
		cursor: pointer;
		@media (max-width: 560px) {
			margin-bottom: 20px;
			padding: 10px 26px;
			color: white;
			background: #921CBC;
		}
		&:hover {
			color: white;
			background: #921CBC;
		}
	}
} 
</style>