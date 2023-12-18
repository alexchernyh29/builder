<template>
	<div class="mit_wrapper">
		<div class="header">
			<div class="header__wrap">
				<img
					src="/images/logo-1.svg"
					alt="logo"
					class="header__logo"
				/>
			</div>
			<div class="header__info" v-if="user.user_metadata.type">
				<p class="header__info-title">{{ h1Page }}</p>
				<div class="header__info-wrap">
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
const h1Page = useH1Page()
const client = useSupabaseClient()
const user = useSupabaseUser()

const signOut = async () => {
	const { error } = await client.auth.signOut()
	if (error) alert(error)
	else navigateTo('/')

}
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
				margin-right: 0;
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