<template>
	<div class="edit-type-acc">
		<h2 style="margin-bottom: 36px; font-size: 24px;">Пожалуйста, определите Ваш статус, потом это решение изменить будет нельзя:</h2>
		<div class="edit-type-acc__radio-type">
			<div @click="type='personal'" for="oneType" class="form_radio_btn" :class="{'active':type=='personal'}">
				<div class="wrap">
					<img
						class="wrap__img"
						src="/images/reg-img-1.png"
					/>
					<div class="wrap__text">
						<label class="text" for="oneType">IT Специалист</label>
						<label class="text__info" for="oneType">Представляете только себя без привязки к какой-либо организации</label>
					</div>
					<div class="wrap__check">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<rect width="32" height="32" rx="16" fill="white"/>
							<path d="M22 12L13.75 20L10 16.3636" stroke="#E45289" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</div>
			</div>
			<div @click="type='company'" for="twoType" class="form_radio_btn" :class="{'active':type=='company'}">
				<div class="wrap">
					<img
						class="wrap__img"
						src="/images/reg-img-2.png"
					/>
					<div class="wrap__text">
						<label class="text" for="oneType">Организация</label>
						<label class="text__info" for="oneType">Представляете юридическое лицо</label>
					</div>
					<div class="wrap__check">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<rect width="32" height="32" rx="16" fill="white"/>
							<path d="M22 12L13.75 20L10 16.3636" stroke="#E45289" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</div>
			</div>
		</div>
		<button @click.prevent="updateUserType" :disabled="!type" class="edit-type-acc__button">Я определился, продолжаем</button>
	</div>
</template>

<script setup>
	const client = useSupabaseClient()
	const loading = useLoading()
	const type = ref('personal')

	const updateUserType = async () => {
		loading.value = true
		try {
			const { data, error } = await client.auth.updateUser({
				data: { type: type.value }
			})
			window.location.replace("https://mit-union.ru/profile/")
		} catch (error) {
			alert(error)
		}
		loading.value = false
	}
</script>

<style lang="scss" scoped>
.edit-type-acc {
	&__radio-type {
		display: flex;
		gap: 24px;
		margin-bottom: 16px;
		flex-direction: row;
		@media (max-width: 1100px) {
			flex-direction: column;
		}
		label {
			font-size: 18px;
			margin-left: 8px;
			cursor: pointer;
		}
		@media (max-width: 500px) {
			gap: 8px;
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
		border: none;
		cursor: pointer;
	}
}

.form_radio_btn {
	position: relative;
	display: inline-block;
	padding: 24px 24px 24px 24px;
	margin-right: 10px;
	border-radius: 60px;
	border: 1px solid #828282;
	cursor: pointer;
	width: 100%;
	// width: 580px;
	@media (max-width:768px) {
		border-radius: 20px;
		// width: 100%;
		padding: 8px 16px;
	}
}
.form_radio_btn.active{
	border: 1px solid #E45289;
	background: #E45289;
	@media (max-width:768px) {
		border-radius: 20px;
		width: 100%;
	}
}
.form_radio_btn.active > .wrap > .wrap__text > .text__info {
	color: #fff;
}
.form_radio_btn.active > .wrap > .wrap__text > .text {
	color: #fff;
}
.form_radio_btn.active > .wrap > .wrap__check {
	display: block;
}
.form_radio_btn label {
	display: inline-block;
	padding: 0px 15px;
	line-height: 34px;
	border-radius: 6px;
	user-select: none;
}

.form_radio_btn:hover {
	border-radius: 60px;
	border: 1px solid #E45289;
	background: #E45289;
	@media (max-width:768px) {
		border-radius: 20px;
		width: 100%;
	}
}

.form_radio_btn:hover > .wrap > .wrap__text > .text__info {
	color: #fff;
}

.form_radio_btn input[type=radio]:checked  > .wrap > .wrap__text > .text {
	color: #ffe0a6;
}

.form_radio_btn input[type=radio]:checked~ p {
	color: #ffe0a6;
}

.form_radio_btn:hover > .wrap > .wrap__text > .text {
	color: #fff;
}

.form_radio_btn:hover > .wrap > .wrap__check {
	display: block;
}

.wrap {
	display: flex;
	flex-direction: row;
	@media (max-width:768px) {
		justify-content: space-between;
	}
	&__text {
		display: flex;
		flex-direction: column;
	}
	&__check {
		display: none;
	}
	&__img{
		@media (max-width: 768px) {
			display: none;
		}
	}
}
.text {
	color: #1B1B29;
	font-size: 30px;
	font-weight: 600;
	line-height: 36px;
	&__info {
		max-width: 295px;
		color: #7C7C7C;
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
	}
}

.text-radio {
	position: absolute;
	width: 612px;
	height: 280px;
}
</style>