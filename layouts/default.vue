<template>
	<div class="font-['Inter']" style="background-color: black;">
		<Html lang="ru">
				<Head>
					<Meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<Meta charset="utf-8" />
					<Title>Ассоциация МИТ - Мы ИТ</Title>
					<Meta name="description" content="Нам не фиолетово" />
					<Link
						rel="preload"
						href="/font/inter/regular.woff2"
						as="font"
						type="font/woff2"
						crossorigin
					/>
					<Link
						rel="preload"
						href="/font/inter/bold.woff2"
						as="font"
						type="font/woff2"
						crossorigin
					/>
					<Link rel="stylesheet" href="/fonts.css" />
					<Link rel="icon" :href="'/favicon.ico'" as="image/x-icon" />
				</Head>
		</Html>
		<NavPublicHeader/>
		<slot />
		<MainpageNavigationFooter />
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
	.header {
		width: 100%;
		padding: 24px 48px;
		background: $white;
		border-radius: 60px;
		display: flex;
		flex-direction: column;
		@media (max-width: $point-s) {
			border-radius: 30px;
			padding: 12px 24px;
		}

		&__wrap {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			
		}

		&__info {
			margin: 24px auto;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__info-wrap {
			margin-top: 24px;
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		&__info-wrap-text {
			margin-right: 12px;
			font-weight: 600;
			font-size: 12px;
			line-height: 18px;
			color: $grey;
			text-transform: uppercase;
			&.router-link-active {
				color: $violet;
				cursor: not-allowed;
			}
			@media (max-width: $point-s) {
				font-size: 10px;
				line-height: 16px;
				margin-right: 11px;
			}
		}

		&__info-title {
			font-weight: 700;
			font-size: 96px;
			line-height: 96px;
			color: $black;
			text-align: center;
			@media (max-width: $point-s) {
				font-size: 39px;
				line-height: 49px;
			}
		}

		&__logo {
			max-width: 250px;
			width: 100%;
			height: 100%;
			@media (max-width: $point-s) {
				max-width: 75px;
			}
		}

		&__button-help {
			padding: 16px 26px;
			background: $violet;
			color: $white;
			border-radius: 60px;
			font-style: normal;
			font-weight: 600;
			font-size: 12px;
			line-height: 18px;
			text-transform: uppercase;
			@media (max-width: $point-xs) {
				padding: 8px 10px;
				font-size: 10px;
			}
		}
	}
</style>
