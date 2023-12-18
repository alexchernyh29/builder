<template>
	<div class="mit_wrapper">
		<div class="header">
			<a href="/" class="header__logo">
				<svg style="width: 100%; height: 50px;" width="500" height="208" viewBox="0 0 500 208" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="39" height="40" fill="#310B67"/>
					<rect y="88" width="39" height="40" fill="#DC4B83"/>
					<rect y="168" width="39" height="40" fill="#902AB6"/>
					<rect x="212" y="48" width="39" height="110" fill="#310B67"/>
					<rect x="288" y="48" width="39" height="160" fill="#310B67"/>
					<rect x="78" y="48" width="39" height="160" fill="#310B67"/>
					<rect x="212" y="168" width="39" height="40" fill="#DC4B83"/>
					<rect x="288" width="39" height="40" fill="#DC4B83"/>
					<rect x="443" y="1" width="39" height="40" fill="#310B67"/>
					<rect x="404" y="168" width="39" height="40" fill="#310B67"/>
					<rect x="365" y="1" width="39" height="47" fill="#310B67"/>
					<path d="M365 87H404V208C382.461 208 365 190.539 365 169V87Z" fill="#310B67"/>
					<rect x="443" y="168" width="39" height="40" fill="#902AB6"/>
					<rect x="365" y="48" width="39" height="39" fill="#DC4B83"/>
					<rect x="404" y="48" width="39" height="39" fill="#DC4B83"/>
					<rect x="39" y="128" width="39" height="40" fill="#310B67"/>
					<rect x="39" y="48" width="39" height="40" fill="#902AB6"/>
					<rect x="39" y="88" width="39" height="40" fill="#DC4B83"/>
					<path d="M165.5 123.5L122 48H116V104L157.5 173H171.5L212.5 98.5V48H206.5L165.5 123.5Z" fill="#310B67"/>
				</svg>
			</a>
			<NuxtLink
				to="/"
				class="header__link">
					Главная
			</NuxtLink>
			<a
				href="/docs/"
				class="header__link">
					Документы
			</a>
			<div class="header__btns" style="margin-left: auto;">
				<div>
					<NuxtLink
						to="/intro"
						class="header__info-wrap-text">
							Подать заявку
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	const user = useSupabaseUser()
	const bodyModal = useBodyModal()
</script>
<style lang="scss" scoped>
	@import "../assets/scss/main.scss";
	.header {
		width: 100%;
		padding: 24px 48px;
		background: $white;
		border-radius: 60px;
		display: flex;
		align-items: center;
		gap: 16px;
		@media (max-width: 700px) {
			gap: 8px
		}
		@media (max-width: $point-s) {
			border-radius: 30px;
			padding: 12px 24px;
		}
		&__logo {
			margin-right: auto;
			width: 90px;
			@media (max-width: 700px) {
				width: 50px;
			}
		}
		&__link {
			font-size: 14px;
			font-weight: 400;
			line-height: 1;
			color: #828282;
			@media (max-width: 700px) {
				font-size: 10px;
			}
		}
		&__btns div {
			display: flex;
			align-items: center;
		}
		&__btn {
			border-radius: 60px;
			font-size: 12px;
			font-style: normal;
			font-weight: 600;
			line-height: 1;
			text-transform: uppercase;
			color: white;
			padding: 16px 26px;
			@media (max-width: 700px) {
				font-size: 10px;
				padding: 10px 14px;
			}
			&-violet {
				background: linear-gradient(90deg, #8160D1 0%, #C010EF 99.78%), #921CBC;
			}
			&-black {
				background: #231D33;
			}
		}

	}
</style>