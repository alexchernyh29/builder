<template>
	<div class="profile-edit">
		<form class="form-widget" @submit.prevent="updateProfile">
			<div class="avatar">
				<BuilderUploadImage
					style="height: 100px; width: 200px;"
					v-model:data="avatar_path"
					:size="200"
					text="Аватар"
				/>
				<div class="avatar__wrap">
					<input
						id="email"
						class="edit-profile__input-email"
						type="text"
						:value="user.email" disabled
						style="border: none;"
					/>
					<input
						id="full_name"
						class="edit-profile__input-name"
						type="text"
						:value="full_name" disabled
						placeholder="ФИО"
					/>
				</div>
			</div>
			<div>
				<label for="username" class="edit-profile__text-info">Статус-подпись</label>
				<textarea class="edit-profile__input" style="height: 100px; padding: 16px;" v-model="signature" />
			</div>
			<div class="wrap__info" style="margin-top: 15px;">
				<label for="username" class="edit-profile__text-info">Ваше имя<span>*</span></label>
				<input
					id="username"
					class="edit-profile__input"
					type="text"
					v-model="full_name"
					required
					:disabled="!editing"
					placeholder="Иванов Иван"
				/>
				<div class="edit">
					<svg 
						@click="editing = true"
						v-if="!editing"
						style="margin-left: 16px; cursor: pointer;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.0512 4.89768H7.29395C5.79093 4.89768 5.03942 4.89768 4.46534 5.19019C3.96036 5.44748 3.54981 5.85804 3.29251 6.36301C3 6.93709 3 7.68861 3 9.19163V16.706C3 18.2091 3 18.9606 3.29251 19.5347C3.54981 20.0396 3.96036 20.4502 4.46534 20.7075C5.03942 21 5.79093 21 7.29395 21H14.8084C16.3114 21 17.0629 21 17.637 20.7075C18.142 20.4502 18.5525 20.0396 18.8098 19.5347C19.1023 18.9606 19.1023 18.2091 19.1023 16.706V12.9488M8.36742 15.6326H9.86542C10.303 15.6326 10.5218 15.6326 10.7277 15.5831C10.9103 15.5393 11.0848 15.467 11.2449 15.3689C11.4255 15.2583 11.5802 15.1035 11.8896 14.7941L20.4442 6.23954C21.1853 5.49845 21.1853 4.29691 20.4442 3.55582C19.7031 2.81473 18.5016 2.81473 17.7605 3.55582L9.20587 12.1104C8.89643 12.4198 8.74171 12.5745 8.63107 12.7551C8.53297 12.9152 8.46068 13.0897 8.41685 13.2723C8.36742 13.4782 8.36742 13.697 8.36742 14.1346V15.6326Z" stroke="#1B1B29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>
			<div class="wrap__info">
				<label for="telegram" class="edit-profile__text-info">Телеграмм<span>*</span></label>
				<input
					id="telegram"
					class="edit-profile__input"
					type="text"
					required
					v-model="telegram"
					:disabled="!editing"
					placeholder="@username"
				/>
				<div class="edit">
					<svg 
						@click="editing = true"
						v-if="!editing"
						style="margin-left: 16px; cursor: pointer;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.0512 4.89768H7.29395C5.79093 4.89768 5.03942 4.89768 4.46534 5.19019C3.96036 5.44748 3.54981 5.85804 3.29251 6.36301C3 6.93709 3 7.68861 3 9.19163V16.706C3 18.2091 3 18.9606 3.29251 19.5347C3.54981 20.0396 3.96036 20.4502 4.46534 20.7075C5.03942 21 5.79093 21 7.29395 21H14.8084C16.3114 21 17.0629 21 17.637 20.7075C18.142 20.4502 18.5525 20.0396 18.8098 19.5347C19.1023 18.9606 19.1023 18.2091 19.1023 16.706V12.9488M8.36742 15.6326H9.86542C10.303 15.6326 10.5218 15.6326 10.7277 15.5831C10.9103 15.5393 11.0848 15.467 11.2449 15.3689C11.4255 15.2583 11.5802 15.1035 11.8896 14.7941L20.4442 6.23954C21.1853 5.49845 21.1853 4.29691 20.4442 3.55582C19.7031 2.81473 18.5016 2.81473 17.7605 3.55582L9.20587 12.1104C8.89643 12.4198 8.74171 12.5745 8.63107 12.7551C8.53297 12.9152 8.46068 13.0897 8.41685 13.2723C8.36742 13.4782 8.36742 13.697 8.36742 14.1346V15.6326Z" stroke="#1B1B29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>
			<div class="wrap__info">
				<label for="phone_number" class="edit-profile__text-info">Телефон<span>*</span></label>
				<input
					id="phone_number"
					class="edit-profile__input"
					type="tel"
					required
					v-model="phone_number"
					:disabled="!editing"
					placeholder="+7"
				/>
				<div class="edit">
					<svg 
						@click="editing = true"
						v-if="!editing"
						style="margin-left: 16px; cursor: pointer;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.0512 4.89768H7.29395C5.79093 4.89768 5.03942 4.89768 4.46534 5.19019C3.96036 5.44748 3.54981 5.85804 3.29251 6.36301C3 6.93709 3 7.68861 3 9.19163V16.706C3 18.2091 3 18.9606 3.29251 19.5347C3.54981 20.0396 3.96036 20.4502 4.46534 20.7075C5.03942 21 5.79093 21 7.29395 21H14.8084C16.3114 21 17.0629 21 17.637 20.7075C18.142 20.4502 18.5525 20.0396 18.8098 19.5347C19.1023 18.9606 19.1023 18.2091 19.1023 16.706V12.9488M8.36742 15.6326H9.86542C10.303 15.6326 10.5218 15.6326 10.7277 15.5831C10.9103 15.5393 11.0848 15.467 11.2449 15.3689C11.4255 15.2583 11.5802 15.1035 11.8896 14.7941L20.4442 6.23954C21.1853 5.49845 21.1853 4.29691 20.4442 3.55582C19.7031 2.81473 18.5016 2.81473 17.7605 3.55582L9.20587 12.1104C8.89643 12.4198 8.74171 12.5745 8.63107 12.7551C8.53297 12.9152 8.46068 13.0897 8.41685 13.2723C8.36742 13.4782 8.36742 13.697 8.36742 14.1346V15.6326Z" stroke="#1B1B29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>
			<div style="display: flex; align-items: center;">
				<input
					type="submit"
					class="edit-profile__button"
					:value="loading ? 'Загрузка ...' : 'Обновить'"
					:disabled="loading"
					style="margin-left: auto; display: block;"
				/>
			</div>
		</form>
	</div>
</template>

<script setup>
import BuilderUploadImage from "../builder/ui/uploadImageFile.vue";
	const client = useSupabaseClient()
	const loading = useLoading()
	// const username = ref('')
	// const website = ref('')
	const avatar_path = ref('')
	const phone_number = ref('')
	const full_name = ref('')
	const telegram = ref('')
	const signature = ref('')
	const user = useSupabaseUser()
	const editing = ref(false)

	const loadProfile = async () => {
		loading.value = true
		const user = useSupabaseUser()
		let { data } = await client
			.from('profiles')
			.select(`updated_at, avatar_url, full_name, telegram, signature, phone_number`)
			.eq('id', user.value.id)
			.single()

		if (data) {
			// username.value = data.username
			// website.value = data.website
			avatar_path.value = data.avatar_url
			full_name.value = data.full_name
			telegram.value = data.telegram
			signature.value = data.signature
			phone_number.value = data.phone_number

			if (!full_name.value || !telegram.value || !phone_number.value) editing.value = true
		}
		loading.value = false
	}
	const updateProfile = async () => {
		loading.value = true
		try {
			loading.value = true
			const user = useSupabaseUser()

			const updates = {
				id: user.value.id,
				// username: username.value,
				// website: website.value,
				avatar_url: avatar_path.value,
				full_name: full_name.value,
				telegram: telegram.value,
				signature: signature.value,
				updated_at: new Date(),
				phone_number: phone_number.value
			}

			let { error } = await client.from('profiles').upsert(updates, {
				returning: 'minimal', // Don't return the value after inserting
			})
			if (error) throw error
		} catch (error) {
			alert(error.message)
		} finally {
			loading.value = false
		}
		editing.value = false
		loading.value = false
	}

	loadProfile()
</script>
<style lang="scss" scoped>
@import "../assets/scss/vars.scss";
.edit-profile {
	&__input {
		width: 100%;
		height: 56px;
		border-radius: 12px;
		background-color: #F5F3FF;
		color: #000000;
		font-size: 16px;
		line-height: 24px;
		font-family: 'Inter';
		padding-left: 24px;
		margin-bottom: 24px;
		&:focus {
			border-color:  #921CBC;
		}
		&:disabled {
			color: grey;
			border: none;
		}
		@media  (max-width: 768px) {
			font-size: 14px;
			padding-left: 12px;
		}
	}
	&__text-info {
		margin-top: 16px;
		color: #828282;
		font-size: 16px;
		font-family: 'Inter';
		line-height: 24px;
		span {
			color: rgba(228, 82, 137, 1);
		}
	}
	&__button {
		margin-top: 32px;
		padding: 16px 26px;
		border-radius: 60px;
		background: #921CBC;
		color: #FFFFFF;
		font-size: 12px;
		font-family: 'Inter';
		font-weight: 600;
		line-height: 18px;
		text-transform: uppercase;
	}
	&__input-name {
		background: none;
		color: #545454;
		font-size: 18px;
		font-weight: 500;
		line-height: 28px;
		border: none;
		@media  (max-width: 768px) {
			font-size: 15px;
			line-height: 22px;
			text-align: center;
			width: 100%;
		}
	}
	&__input-email {
		background: none;
		color: #1B1B29;
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
		border: none;
		@media  (max-width: 768px) {
			font-size: 15px;
			line-height: 22px;
			text-align: center;
			width: 100%;
		}
	}
}
.avatar {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	@media  (max-width:768px) {
		flex-direction: column;
		align-items: center;
	}
	&__wrap {
		display: flex;
		flex-direction: column; 
		margin-left: 40px;
		width: 100%;
		@media  (max-width:768px) {
			align-items: center;
			margin-left: 0px;
		}
	}
}
.wrap__info{
	position: relative;
}
.edit {
	position: absolute;
	top: 40px;
	right: 24px;
}
</style>