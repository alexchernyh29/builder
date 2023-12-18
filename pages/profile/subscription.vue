<template>
	<div class="subscription-page mit_wrapper">
		<div v-if="sub && sub.active" style="font-size: 20px;">
			У вас оформлена подписка {{ sub.type }}, действует до {{ new Date(Number(sub.finish)).toLocaleString("ru") }}
		</div>
		<div v-else>
			<div class="subscription-page__list-price">
				<ProfileColPrice
					class="subscription-page__col-price"
					title="Junior"
					:price="299"
					:how_month="1"
					type_sub="Junior">
						<ul>
							<!-- <li>Размещение резюме и портфолио</li> -->
							<li>Доступ к закрытой части сайта</li>
						</ul>

				</ProfileColPrice>
				<!-- <ProfileColPrice
					class="subscription-page__col-price"
					title="Middle"
					:price="599"
					:how_month="1"
					type_sub="Middle">
						<ul>
							<li>Размещение резюме и портфолио</li>
							<li>Доступ к закрытой части сайта</li>
							<li>Закрытый чат ассоциации</li>
						</ul>
				</ProfileColPrice>
				<ProfileColPrice
					class="subscription-page__col-price"
					title="Senior"
					:price="999"
					:how_month="1"
					type_sub="Senior">
						<ul>
							<li>Размещение резюме и портфолио</li>
							<li>Доступ к закрытой части сайта</li>
							<li>Закрытый чат ассоциации</li>
							<li>Индивидуальные консультации</li>
						</ul>

				</ProfileColPrice> -->
				<ProfileColPrice
					class="subscription-page__col-price"
					title="Middle (не доступен)"
					:price="599"
					:how_month="1"
					type_sub="free">
						<ul>
							<li>Размещение резюме и портфолио</li>
							<li>Доступ к закрытой части сайта</li>
						</ul>
				</ProfileColPrice>
				<ProfileColPrice
					class="subscription-page__col-price"
					title="Senior (не доступен)"
					:price="999"
					:how_month="1"
					type_sub="free">
						<ul>
							<li>Размещение резюме и портфолио</li>
							<li>Доступ к закрытой части сайта</li>
							<li>Закрытый чат ассоциации</li>
						</ul>
				</ProfileColPrice>
				<ProfileColPrice
					class="subscription-page__col-price"
					title="CTO (не доступен)"
					:price="49999"
					:how_month="1"
					type_sub="free">
						<ul>
							<li>Размещение резюме и портфолио</li>
							<li>Доступ к закрытой части сайта</li>
							<li>Закрытый чат ассоциации</li>
							<li>Индивидуальные консультации</li>
						</ul>
				</ProfileColPrice>
			</div>
			<div class="subscription-page__info">
				<b>Членство в ассоциации</b> - только тот, кто работает совместно с нами, решение о приеме - <br>вступление в джедаи по результатам деятельности на благо ассоциации и не платят никаких <br>взносов, но при этом имеют право на определенные вознаграждения за участие.
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'auth'
})
const sub = useSub()
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";

.subscription-page {
	padding: 48px;
	width: 100%;
	height: 100%;
	background: $white;
	border-radius: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 32px;
	@media (max-width: $wrapper-xl) {
		justify-content: flex-start;
	}
	@media (max-width: $wrapper-m) {
		flex-direction: column;
	}
	@media (max-width: $wrapper-s) {
		padding: 12px;
		border-radius: 30px;
	}
	&__list-price {
		display: flex;
		gap: 16px;
		margin-bottom: 80px;
		@media (max-width: 1050px) {
			flex-wrap: wrap;
		}
		@media (max-width: 560px) {
			flex-direction: column;
		}
	}
	&__col-price {
		width: 25%;
		height: fit-content;
		@media (max-width: 1050px) {
			width: calc(50% - 16px);
		}
		@media (max-width: 560px) {
			width: 100%;
		}
		ul {
			padding-left: 16px;
			gap: 24px;
			li {
				color: #828282;
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: 24px;
			}
		}
	}
	&__info {
		border-radius: 24px;
		background: #F5F3FF;
		padding: 40px;
		color: #828282;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
}
</style>