<template>
		<div>
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
			<NavHeader v-if="user"/>
			<div>
				<slot v-if="user"/>
				<div class="mit_wrapper" v-else>
					<div class="header">
						<div class="header__wrap">
							<img src="/images/logo-1.svg" alt="logo" class="header__logo">
							<p class="header__wrap-text">Ассоциация специалистов, инвесторов и организаций в сфере<br>информационных технологий «МИТ - Мы ИТ»</p>
						</div>
					</div>
					<div class="wrap">
					<h2 class="wrap__text" style="color: white;">Вы не авторизованы!</h2>
						<div class="wrap__btn">
							<button class="wrap__login" @click.prevent="bodyModal = 'AuthLogin'">Вход</button>
							<a class="wrap__reg" href="/reg/">Регистрация</a>
						</div>
					</div>
				</div>
			</div>
			<MainpageNavigationFooter/>
		</div>
	</template>
	
<script setup>
	const user = useSupabaseUser()
	const bodyModal = useBodyModal()

	
</script>
	
<style lang="scss" scoped>
	@import "../assets/scss/main.scss";
	
	.wrap{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 580px;
		border-radius: 60px;
		background: linear-gradient(202deg, #EF5DA8 0%, #8E1CBA 100%);

		&__reg {
			padding: 16px 26px;
			margin-left: 16px;
			background-color: #fff;
			border-radius: 60px;
			color: var(--text-black, #1B1B29);
			text-align: center;
			font-size: 12px;
			font-weight: 600;
			line-height: 18px;
			text-transform: uppercase;
		}

		&__login {
			border-radius: 60px;
			background-color: #34057B;
			border: none;
			color: #fff;
			display: flex;
			padding: 16px 26px;
			justify-content: center;
			align-items: center;
		}

		&__btn {
			display: flex;
			flex-direction: row;
		}

		&__text {
			color:#FFF;
			text-align: center;
			font-size: 56px;
			font-weight: 700;
			line-height: 96px;
			@media (max-width: 768px) {
				font-size: 32px;
				line-height: 42px;
			}
		}
	}

	.header{
		width: 100%;
		padding: 24px 48px;
		background: #FFFFFF;
		border-radius: 60px;
		display: flex;
		flex-direction: column;
		@media only screen and (max-width: 900px) {
			border-radius: 30px;
			padding: 12px 24px;
		}

		&__wrap {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-end;
			
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
			@media (max-width: 720px) {
				margin-top: 10px;
				flex-direction: column;
			}
		}

		&__info-wrap-text {
			margin-right: 12px;
			font-family: 'Inter';
			font-weight: 600;
			font-size: 12px;
			line-height: 18px;
			color: #828282;
			text-transform: uppercase;
			&:last-child {
				color: #921CBC;
				margin-right: 0;
			}
			@media only screen and (max-width: 900px) {
				margin-right: 0;
				margin-top: 5px;
				font-size: 10px;
				line-height: 16px;
				margin-right: 11px;
				text-align: center;
			}
		}

		&__logo {
			max-width: 250px;
			width: 100%;
			height: 100%;
			@media only screen and (max-width: 900px) {
				max-width: 75px;
			}
		}

		&__wrap-text {
			color: #828282;
			text-align: right;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 16px;
			@media (max-width: 768px) {
				font-size: 8px;
				line-height: 16px;
			}
		}
	}
</style>
	