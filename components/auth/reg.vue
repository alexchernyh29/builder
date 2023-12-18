<template>
	<div>
		<div v-if="user">
			<h2 class="text">Вы авторизованы!</h2>
		</div>
		<form 
			v-if="stateAuth == 'start' && !user"
			@submit.prevent="handleLogin"
			class="form">
			<div>
				<p class="form__text-info">Email <span>*</span></p>
				<input
					type="email"
					v-model="email"
					required
					minlength="5"
					maxlength="100"
					placeholder="Введите свою электронную почту"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="checkValid" class="form__email-invalid">Адрес электронной почты должен содержать символ “@”. В адресе “{{ email }}” отсутствует символ “@”</p>
			</div>
			<div class="">
				<p class="form__text-info">Пароль<span>*</span></p>
				<input
					type="password"
					autocomplete="current-password"
					required
					minlength="6"
					maxlength="100"
					v-model="pass"
					placeholder="Пароль (минимум 6 символов)"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="checkValid" class="form__pass-invalid">Минимально допустимое количество символов: 6. Длина текста сейчас: {{ pass.length }}.</p>
			</div>
			<div class="form__wrap">
				<button 
					:disabled="loading"
					class="form__button">
						{{loading ? 'Подождите...' : 'Отправить'}}
				</button>
				<p class="form__text-info">*На вашу почту придет ссылка, перейдя по<br>которой вы автоматически зарегистрируетесь</p>
			</div>
		</form>
		<h2 v-if="stateAuth == 'finishPass'" class="h2-reg-finish">
			Регистрация успешна! На ваш Email {{email}} выслано письмо с подтверждением!
		</h2>
	</div>
</template>

<script setup>
	const client = useSupabaseClient()
	const loading = useLoading()
	const email = ref("")
	const pass = ref("")
	const stateAuth = ref('start')
	const picked = ref('')
	const user = useSupabaseUser()
	const checkValid = ref(false)

	const handleLogin = async () => {
		checkValid.value = true
		try {
			loading.value = true
			const { data, error } = await client.auth.signUp({
				email: email.value,
				password: pass.value,
				options: {
					data: {
						type: picked.value,
					}
				}
			})
			// console.log(data, error)
			if (data.user.identities.length) {
				stateAuth.value = 'finishPass'
			}
		} catch (error) {
			email.value = ""
			pass.value = ""
			alert("Нельзя зарегистрироваться с таким Email")
			//TODO: тут нужна обпаботка ситуации, когда пользователь есть и пароль подошел
		} finally {
			loading.value = false
		}
	}

	// const validateEmail = computed (() => {
	// 	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	// 		.test(String(email.value).toLowerCase());
	// })
</script>

<style lang="scss" scoped>
input.check:invalid {
    border: 2px solid #E45289;
}
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

	&__radio-type {
		display: flex;
		gap: 32px;
		margin-bottom: 16px;
		label {
			font-size: 18px;
			margin-left: 8px;
			cursor: pointer;
		}
		@media (max-width: 500px) {
			gap: 8px;
			flex-direction: column;
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
		border: none;
		&:focus {
			border: 1px solid #921CBC;
		}
		&:focus-visible {
			border: 1px solid #921CBC;
		}
	}

	&__button {
		max-width: 175px;
		margin-top: 32px;
		padding: 16px 26px;
		border: none;
		border-radius: 60px;
		background: #921CBC;
		color: #FFFFFF;
		font-size: 12px;
		font-family: 'Inter';
		font-weight: 600;
		line-height: 18px;
		text-transform: uppercase;
		transition: 0.4s;
		&:hover{
			background: #50056b;
			transition: 0.4s;
		}
	}

	&__wrap{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	&__email-invalid {
		display: none;
	}

	&__pass-invalid {
		display: none;
	}
}
.h2-reg-finish {
	text-align: center;
	font-size: 18px;
}
.text{
	color:  #000;
	text-align: center;
	font-size: 56px;
	font-style: normal;
	font-weight: 700;
	line-height: 96px;
}
</style>