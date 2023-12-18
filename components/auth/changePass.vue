<template>
	<div class="login">
		<h2 class="login__title">Изменение пароля</h2>
		<div v-if="finishResetPass">
			<h2>Пароль изменен!</h2>
		</div>
		<form 
			v-else-if="user"
			@submit.prevent="handleChangePass"
			class="form">
			<div class="form__text-field">
				<p class="form__text-info">Пароль <span>*</span></p>
				<input
					type="password"
					autocomplete="current-password"
					required
					minlength="6"
					maxlength="100"
					v-model="pass"
					placeholder="минимум 6 символов"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="checkValid" class="form__pass-invalid">Минимально допустимое количество символов: 6. Длина текста сейчас: {{ pass.length }}.</p>
			</div>
			<div class="form__text-field">
				<p class="form__text-info">Введите пароль повторно <span>*</span></p>
				<input
					type="password"
					autocomplete="current-password"
					required
					minlength="6"
					maxlength="100"
					v-model="pass2"
					placeholder="минимум 6 символов"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="checkValid" class="form__pass-invalid">Минимально допустимое количество символов: 6. Длина текста сейчас: {{ pass2.length }}.</p>
			</div>
			<p 
				v-if="errorPass"
				class="form__text-errow">
				Ошибка, попробуйте повторить позже!
			</p>
			<div class="form__wrap">
				<button 
					:disabled="loading"
					class="form__button">
						{{loading ? 'Подождите...' : 'Изменить пароль'}}
				</button>
			</div>
		</form>
		<div v-else>
			<h2>Вы не авторизовались!</h2>
		</div>
	</div>
</template>

<script setup>
	const client = useSupabaseClient()
	const loading = useLoading()
	const pass = ref("")
	const pass2 = ref("")
	const errorPass = ref(false)
	const user = useSupabaseUser()
	const checkValid = ref(false)
	const finishResetPass = ref(false)

	const handleChangePass = async () => {
		checkValid.value = true
		if (pass.value !== pass2.value) {
			alert('Пароли не совпадают!')
			return
		}
		try {
			loading.value = true
				const { data, error } = await client.auth.updateUser({
					password: pass2.value
				})
			if (data) finishResetPass.value = true
		} catch (error) {
			alert(error.error_description || error.message)
		} finally {
			loading.value = false
		}
	}

</script>

<style lang="scss" scoped>
input:invalid ~ .form__email-invalid{
	display: block;
    padding: 8px 0;
	color: #E45289;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
}

.form__input.check:invalid {
	border: 2px solid #E45289;
}

.form__input:invalid ~ .form__pass-invalid{
	display: block;
    padding: 8px 0;
	color: #E45289;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
}
.form {
	position: relative;
	&__text-info {
		color: #828282;
		font-size: 16px;
		font-family: 'Inter';
		line-height: 24px;
		span {
			color: rgba(228, 82, 137, 1);
		}
	}
	&__input {
		margin-top: 8px;
		width: 100%;
		height: 56px;
		border-radius: 12px;
		background-color: #F5F3FF;
		color: #828282;
		font-size: 16px;
		line-height: 24px;
		font-family: 'Inter';
		padding-left: 24px;
		&:focus {
			border: 1px solid #921CBC;
		}
		&:focus-visible {
			border: 1px solid #921CBC;
		}
	}
	&__button {
		width: 220px;
		margin-top: 16px;
		padding: 16px 26px;
		border-radius: 60px;
		background: #921CBC;
		color: #FFFFFF;
		font-size: 12px;
		font-family: 'Inter';
		font-weight: 600;
		line-height: 18px;
		text-transform: uppercase;
		cursor: pointer;
		border: none;
	}
	&__text-errow {
		color: #E45289;
		font-size: 16px;
		font-family: 'Inter';
		line-height: 24px;
	}
	&__text-field {
		margin-bottom: 8px;
	}
	&__pass-invalid {
		display: none;
	}
	&__email-invalid {
		display: none;
	}
	&__wrap{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	&__wrap-reg{
		margin-top: 16px;
		color: #921CBC;
		font-size: 16px;
		font-family: 'Inter';
		line-height: 24px;
		text-decoration: none;
	}
}
.login {
	width: 100%;
	&__title {
		margin-bottom: 32px;
		font-size: 40px;
		font-family: 'Inter';
		font-weight: 700;
		line-height: 40px;
		text-align: center;
		@media (max-width: 400px) {
			font-size: 30px;
		}
	}
}
</style>