<template>
	<div>
		<div class="modal__error" v-show="validError">
			<p class="modal__error-text">Одно или несколько полей заполнено неверно!<br>Проверьте правильность заполненных полей</p>
		</div>
		<form 
			v-if="stateAuth == 'start'"
			@submit.prevent="sendForm"
			class="form">
			<div>
				<p class="form__text-info">Название организации<span>*</span></p>
				<input
					type="text"
					v-model="company"
					required
					placeholder="ООО Интернет"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="!validCompany && checkValid" class="valid__text">Поле должно содержать от 3 до 100 символов. Сейчас количество символов {{ counterCompany }}</p>
			</div>
			<div>
				<p class="form__text-info">Email для связи<span>*</span></p>
				<input
					type="email"
					v-model="email"
					id="email"
					required
					minlength="5"
					maxlength="100"
					placeholder="Введите Email организации"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="checkValid" class="form__email-invalid">Адрес электронной почты должен содержать символ “@”. В адресе “{{ email }}” отсутствует символ “@”</p>
			</div>
			<div>
				<p class="form__text-info">Контактный телефон<span>*</span></p>
				<input
					type="text"
					v-model="phone"
					required
					minlength="5"
					maxlength="11"
					placeholder="+7"
					id="tel"
					v-on:input="onInputTel"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="!validNumber && checkValid" class="valid__text">Минимально допустимое количество символов: 5. Сейчас количество символов {{ counterNumber }}</p>
			</div>
			<div>
				<p class="form__text-info">Полное наименование организации с указанием организационно-правовой формы<span>*</span></p>
				<input
					type="text"
					v-model="full_name_company"
					required
					minlength="5"
					maxlength="100"
					placeholder="Общество с ограниченной ответственностью 'Интернет'"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">Полное название организации (лат)<span>*</span></p>
				<input
					type="text"
					v-model="full_name_company_lt"
					required
					minlength="5"
					maxlength="100"
					placeholder="Limited Liability Company 'Internet'"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">Год образования организации<span>*</span></p>
				<input
					type="text"
					v-model="years"
					required
					minlength="4"
					maxlength="4"
					placeholder="2000"
					class="form__input"
					v-on:input="onInputYears"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">Почтовый адрес организации (с индексом)<span>*</span></p>
				<input
					type="text"
					v-model="postal_address"
					required
					minlength="5"
					maxlength="100"
					placeholder="305000, ул.Ленина д.15 к.3 оф.124"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">Юридический адрес организации<span>*</span></p>
				<input
					type="text"
					v-model="legal_address"
					required
					minlength="5"
					maxlength="100"
					placeholder="ул.Ленина д.15 к.3 оф.124"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">Фактический адрес организации<span>*</span></p>
				<input
					type="text"
					v-model="fact_address"
					required
					minlength="5"
					maxlength="100"
					placeholder="ул.Ленина д.15 к.3 оф.124"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">ИНН<span>*</span></p>
				<input
					type="text"
					v-model="inn"
					id="inn"
					v-on:input="onInputInn"
					required
					minlength="10"
					maxlength="12"
					placeholder="Введите ИНН организации"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="!validInn && checkValid" class="valid__text">ИНН должен содержать символ 10 или 12 символов. Сейчас количество символов {{ counterInn }}</p>
			</div>
			<div>
				<p class="form__text-info">Сайт в Интернете<span>*</span></p>
				<input
					type="text"
					v-model="website"
					required
					minlength="5"
					maxlength="100"
					placeholder="www.internet.ru"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<h2 style="margin-top: 16px;">Руководитель организации:</h2>
			<div>
				<p class="form__text-info">ФИО гендиректора<span>*</span></p>
				<input
					type="text"
					v-model="name"
					required
					placeholder="Иванов Иван Иванович"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="!validName && checkValid" class="valid__text">Поле должно содержать от 8 до 100 символов. Сейчас количество символов {{ counterName }}</p>
			</div>
			<div>
				<p class="form__text-info">Полное название должности<span>*</span></p>
				<input
					type="text"
					v-model="name_position"
					required
					minlength="5"
					maxlength="100"
					placeholder="Генеральный директор"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">Телефон<span>*</span></p>
				<input
					type="text"
					v-model="name_phone"
					required
					minlength="5"
					maxlength="11"
					placeholder="+7"
					v-on:input="onInputTelName"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="!validNumberName && checkValid" class="valid__text">Минимально допустимое количество символов: 5. Сейчас количество символов {{ counterNumberName }}</p>
			</div>
			<div>
				<p class="form__text-info">e-mail<span>*</span></p>
				<input
					type="text"
					v-model="name_email"
					required
					minlength="5"
					maxlength="100"
					placeholder="Введите email"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<h2 style="margin-top: 16px;">Контактное лицо (Представитель):</h2>
			<div>
				<p class="form__text-info">Фамилия имя отчество<span>*</span></p>
				<input
					type="text"
					v-model="representative_name"
					required
					minlength="5"
					maxlength="100"
					placeholder="Иванов Иван Иванович"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">Полное название должности<span>*</span></p>
				<input
					type="text"
					v-model="representative_position"
					required
					minlength="5"
					maxlength="100"
					placeholder="Введите название должности"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">Телефон<span>*</span></p>
				<input
					type="text"
					v-model="representative_phone"
					required
					minlength="5"
					maxlength="11"
					placeholder="+7"
					v-on:input="onInputTelRepresentative"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="!validNumberRepresentative && checkValid" class="valid__text">Минимально допустимое количество символов: 5. Сейчас количество символов {{ counterNumberRepresentative }}</p>
			</div>
			<div>
				<p class="form__text-info">e-mail<span>*</span></p>
				<input
					type="text"
					v-model="representative_email"
					required
					minlength="5"
					maxlength="100"
					placeholder="Введите контактный email"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<h2 style="margin-top: 16px;">Характеристика организации</h2>
			<div>
				<p class="form__text-info">Примерная численность сотрудников<span>*</span></p>
				<input
					type="text"
					v-model="number_stuff"
					required
					minlength="1"
					maxlength="10"
					placeholder="Введите примерную численность сотрудников компании"
					v-on:input="onInputStuff"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="!validStuff && checkValid" class="valid__text">Минимально допустимое количество символов: 1. Сейчас количество символов {{ counterStuff }}</p>
			</div>
			<div>
				<p class="form__text-info">Направление деятельности (разработка ПО, интеграция, дистрибуция, венчурное инвестирование)<span>*</span></p>
				<input
					type="text"
					v-model="area_activity"
					required
					minlength="5"
					maxlength="100"
					placeholder="Введите направление деятельности"
					class="form__input"
					:class="{'check': checkValid}">
			</div>
			<div>
				<p class="form__text-info">Выручка за 2022 г. в тыс. рублей<span>*</span></p>
				<input
					type="text"
					v-model="revenue"
					required
					minlength="1"
					maxlength="10"
					v-on:input="onInputRevenue"
					placeholder="Введите выручку за 2022 г. в тыс. рублей"
					class="form__input"
					:class="{'check': checkValid}">
					<p v-show="!validRevenue && checkValid" class="valid__text">Минимально допустимое количество символов: 1. Сейчас количество символов {{ counterRevenue }}</p>
			</div>
			<div>
				<p class="form__text-info">Как вы позиционируете ваш холдинг/предприятие для определения размера членского взноса (стартап, ИТ-компания, корпорация, венчурный фонд, НКО и др.)<span>*</span></p>
				<input
					type="text"
					v-model="type_company"
					required
					minlength="5"
					maxlength="100"
					placeholder="Как вы позиционируете компанию"
					class="form__input"
					:class="{'check': checkValid}">
				<div style="display:flex; flex-direction:row; align-items:center; margin-top: 10px;">
					<img src="/images/document.png" alt="" class="content__wrap-item-icon">
					<a style="margin-top: 5px;" class="form__text-info" href="https://docs.google.com/document/d/1LQsFelCoGL6ha2VRLL_yx4kC5DYQhWIN/edit" target="_blank">Положение о членских взносах</a>
				</div>
			</div>
			<div style="margin-top: 36px;">
				<p style="font-size: 16px;">
					Заполните, подпишите и приложите к этой форме следующие документы:
				</p>
				<div class="wrap__document">
					<div class="wrap__document-column">
						<button v-on:click.prevent="exportPdfForm(company, full_name_company_lt, years, postal_address, legal_address, inn, website, name, name_position, name_phone, name_email, representative_name, representative_position, representative_phone, representative_email, number_stuff, area_activity, revenue, type_company)" style="display:flex; flex-direction:row; align-items:center; border: none; background-color: transparent; cursor: pointer;">
							<img src="/images/document.png" alt="" class="content__wrap-item-icon">
							<p>Сгенерировать PDF Анкету кандидата (юрлицо) с моими данными</p>
						</button>
						<br>
						<loadFile v-if="!doc1" v-model:data="doc1" accept="*" :size="3000" text="Загрузить Анкету" style="margin-right: 16px;"/>
						<div v-else style="display: flex; flex-direction: column; align-items: center;">
							<div class="wrap__file">
								<a class="wrap__file-text" :href="doc1" target="_blank">
								Загруженный документ (Анкета)
								</a>
							</div>
							<br>
							<br>
							<a class="wrap__file-text" href="#" @click.prevent="doc1 = ''" style="font-size: 14px;">(Сбросить и загрузить заново)</a>
						</div>
					</div>
					<div class="wrap__document-column">
						<button v-on:click.prevent="exportPdf(name, company, name_position, legal_address, fact_address)" style="display:flex; flex-direction:row; align-items:center; border: none; background-color: transparent; cursor: pointer;">
							<img src="/images/document.png" alt="" class="content__wrap-item-icon">
							<p>Сгенерировать PDF Заявление кандидата (юрлицо) с моими данными</p>
						</button>
						<br>
						<loadFile v-if="!doc2" v-model:data="doc2" accept="*" :size="3000" text="Загрузить Заявление"/>
						<div v-else style="display: flex; flex-direction: column; align-items: center;">
							<div class="wrap__file">
								<a class="wrap__file-text" :href="doc2" target="_blank">
									Загруженный документ (Заявление)
								</a>
							</div>
							<br>
							<br>
							<a class="wrap__file-text" href="#" @click.prevent="doc2 = ''" style="font-size: 14px;">(Сбросить и загрузить заново)</a>
						</div>
					</div>
				</div>
				<div class="wrap__document-column">
						<p class="wrap__document-column-title" style="font-size: 16px; margin: 16px 0 16px;">Загрузите архив с необходимым перечнем документов</p>
						<ul class="wrap__document-column-list">
							<li class="wrap__document-column-list-item" style="font-size: 14px; margin-bottom: 10px;">
								Презентация компании;
							</li>
							<li class="wrap__document-column-list-item" style="font-size: 14px; margin-bottom: 10px;">
								Скан-копия Устава юридического лица;
							</li>
							<li class="wrap__document-column-list-item" style="font-size: 14px; margin-bottom: 10px;">
								Скан-копия Свидетельства о государственной регистрации/постановке на учет в налоговом органе или лист записи о создании организации;
							</li>
							<li class="wrap__document-column-list-item" style="font-size: 14px; margin-bottom: 10px;">
								Документы, подтверждающие оплату по Лицензионному соглашению на доступ к базе данных Ассоциации (при наличии);
							</li>
						</ul>
						<loadFile v-if="!doc3" v-model:data="doc3" accept="*" :size="3000" text="Загрузить архив"/>
						<div v-else style="display: flex; flex-direction: column; align-items: center;">
							<div class="wrap__file">
								<a class="wrap__file-text" :href="doc3" target="_blank">
									Загруженный архив
								</a>
							</div>
							<br>
							<br>
							<a class="wrap__file-text" href="#" @click.prevent="doc3 = ''" style="font-size: 14px;">(Сбросить и загрузить заново)</a>
						</div>
					</div>
			</div>
			<div class="form__wrap">
				<button 
					:disabled="disabledButton"
					class="form__button">
						{{loading ? 'Подождите...' : 'Отправить'}}
				</button>
			</div>
		</form>
		<h2 v-if="stateAuth == 'finishPass'" class="h2-reg-finish">
			Ваща заявка отправлена!
		</h2>
	</div>
</template>

<script setup>
import loadFile from "../builder/ui/uploadImageFile.vue"
import {exportPdf,exportPdfForm} from "../../../common/pdf/makePdf.js"

	const client = useSupabaseClient()
	const loading = useLoading()
	const email = ref("")
	const pass = ref("")
	const stateAuth = ref('start')
	const picked = ref('')
	const user = useSupabaseUser()
	const checkValid = ref(false)
	const inn = ref('')
	const phone = ref('')
	const name = ref('')
	const company = ref('')
	const doc1 = ref('')
	const doc2 = ref('')
	const doc3 = ref('')
	const validError = ref(false)
	const full_name_company = ref('')
	const full_name_company_lt = ref('')
	const years = ref('')
	const postal_address = ref('')
	const legal_address = ref('')
	const fact_address = ref('')
	const website = ref('')
	const name_position = ref('')
	const name_phone = ref('')
	const name_email = ref('')
	const representative_name = ref('')
	const representative_position = ref('')
	const representative_phone = ref('')
	const representative_email = ref('')
	const number_stuff = ref('')
	const area_activity = ref('')
	const revenue = ref('')
	const type_company = ref('')


	const sendForm = async () => {
		checkValid.value = true
		if(validInn.value && validNumber.value && validNumberName.value && validNumberRepresentative.value && validName.value && validCompany.value && validRevenue.value){
			try {
				loading.value = true
				const { users } = await $fetch("/api/sendIntroForm", {
					method: "POST",
					body: {
						inn: inn.value,
						phone: phone.value,
						name: name.value,
						company: company.value,
						doc1: doc1.value,
						doc2: doc2.value,
						doc3: doc3.value,
						email: user.value ? user.value.email : email.value,
						status: 'new',
						meta: {
							full_name_company: full_name_company.value,
							full_name_company_lt: full_name_company_lt.value,
							years: years.value,
							postal_address: postal_address.value,
							legal_address: legal_address.value,
							fact_address: fact_address.value,
							website: website.value,
							name_position: name_position.value,
							name_phone: name_phone.value,
							name_email: name_email.value,
							representative_name: representative_name.value,
							representative_position: representative_position.value,
							representative_phone: representative_phone.value,
							representative_email: representative_email.value,
							number_stuff: number_stuff.value,
							area_activity: area_activity.value,
							revenue: revenue.value,
							type_company: type_company.value,
						},
					},
				});
			} catch (error) {
				console.log(error)
			} finally {
				loading.value = false
			}
		} else {
			// alert('Валидация не пройдена, проверьте правильность заполненных полей ')
			function modalHidden() {
				validError.value = false
			}
			validError.value = true
			setTimeout(modalHidden,3000)
		}
	}
	let validTel = /[^\d]/g;
	function onInputInn() {
		inn.value = inn.value.replace(validTel, '')
	}
	function onInputYears() {
		years.value = years.value.replace(validTel, '')
	}
	function onInputTel() {
		phone.value = phone.value.replace(validTel, '')
	}
	function onInputTelName() {
		name_phone.value = name_phone.value.replace(validTel, '')
	}
	function onInputTelRepresentative() {
		representative_phone.value = representative_phone.value.replace(validTel, '')
	}
	function onInputRevenue() {
		revenue.value = revenue.value.replace(validTel, '')
	}
	function onInputStuff() {
		number_stuff.value = number_stuff.value.replace(validTel, '')
	}
	
	const disabledButton = computed(() => (loading.value || !doc1.value || !doc2.value || !doc3.value || !inn.value || !phone.value || !name.value || !company.value || !full_name_company_lt.value || !years.value || !postal_address.value || !legal_address.value || !fact_address.value || !inn.value || !website.value || !name.value || !name_position.value || !name_phone.value || !name_email.value || !representative_name.value || !representative_position.value || !representative_phone.value || !representative_email.value || !number_stuff.value || !area_activity.value || !revenue.value || !type_company.value))
	const validName = computed(() => (String(name.value).length >= 8 && String(name.value).length <= 100))
	const validCompany = computed(() => (String(company.value).length >= 3 && String(company.value).length <= 100))
	const validInn = computed(() => (String(inn.value).length == 10 || String(inn.value).length == 12))
	const validPass = computed(() => {
		if(user.value){
			return true
		} else {
			return String(pass.value).length >= 6
		}})
	const validNumber = computed(() => (String(phone.value).length >= 4 && String(phone.value).length <= 11))
	const validNumberName = computed(() => (String(name_phone.value).length >= 4 && String(name_phone.value).length <= 11))
	const validNumberRepresentative = computed(() => (String(representative_phone.value).length >= 4 && String(representative_phone.value).length <= 11))
	const validRevenue = computed(() => (String(revenue.value).length >= 1 && String(revenue.value).length <= 10))
	const validStuff = computed(() => (String(number_stuff.value).length >= 1 && String(number_stuff.value).length <= 10))
	const counterInn = computed(() =>(String(inn.value).length))
	const counterName = computed(() =>(String(name.value).length))
	const counterNumber = computed(() =>(String(phone.value).length))
	const counterNumberName = computed(() =>(String(name_phone.value).length))
	const counterNumberRepresentative = computed(() =>(String(representative_phone.value).length))
	const counterCompany = computed(() =>(String(company.value).length))
	const counterRevenue = computed(() =>(String(revenue.value).length))
	const counterStuff = computed(() =>(String(number_stuff.value).length))
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

.valid__text {
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
		color: #434343;
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
		&::placeholder {
			color: #828282;
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
		&:disabled {
			background: grey;
			cursor:not-allowed;
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
.wrap__document {
	display: flex;
	flex-direction: row;
	justify-content: space-between; 
	margin-top: 16px;
	gap: 20px;
	@media (max-width:768px){
		flex-direction: column;
	}
}

.wrap__document-column {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
.wrap__document-link {
	margin-top: 16px;
    color: #828282;
    font-size: 16px;
    font-family: "Inter";
    line-height: 24px;
}
.wrap__file-text {
	color: #828282;
    font-size: 16px;
    font-family: "Inter";
    line-height: 24px;
	text-align: center;
}
.wrap__file {
    height: 200px;
    width: 100%;
    border: 1px dashed grey;
    border-radius: 16px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
}
input[type=number] {
    -moz-appearance:textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.modal__error {
	position: fixed;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;
	width: 400px;
	height: 100px;
	background-color: #F5F3FF;
	border: 2px solid #E45289;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 100;
}
.modal__error-text {
	color: #E45289;
    font-size: 16px;
    font-family: "Inter";
    line-height: 24px;
}
</style>../../common/components/pdf/makePdf.js