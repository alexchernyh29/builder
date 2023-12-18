<template>
	<div>	
		<div v-if="user.user_metadata.type" class="profile mit_wrapper">
			<div class="profile__sidebar">
				<div v-if="user.user_metadata.type === 'personal'">
					<ProfileShowingSubscription/>
				</div>
				<div v-else-if="user.user_metadata.type === 'company'">
					<ProfileShowingSubscriptionLegal/>
				</div>
			</div>
			<div v-if="user.user_metadata.type === 'personal'" class="profile__content mit_wrapper">
				<ProfileEditProfile/>
			</div>
			<div v-else-if="user.user_metadata.type === 'company'" class="profile__content mit_wrapper">
				<ProfileEditProfileLegalEntity/>
			</div>
			<a href="#" @click.prevent="bodyModal = 'AuthChangePass'">Изменить пароль</a>
		</div>
		<div v-else class="profile mit_wrapper">
			<ProfileEditTypeAcc/>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'auth'
	})
	const loading = useLoading()
	const bodyModal = useBodyModal()
	const h1Page = useH1Page()
	h1Page.value = 'Личный кабинет'
	const user = useSupabaseUser()
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";
.profile {
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

	&__sidebar {
		width: 500px;
		@media (max-width: $wrapper-m) {
			width: 100%;
			margin-bottom: 32px;
		}
	}
	&__content {
		width: 100%;
	}
}
</style>