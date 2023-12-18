<template>
	<div style="background: #000; min-height: 100vh;">
		<div style="display: block; max-width: 700px; margin: 0 auto;">
			<h1 class="font-medium text-white" style="text-align: center; padding: 14px;">
				<b>Вопросы по IT аккредитации</b><br>
			</h1>
			<div v-if="isSent">
				<div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
						<p style="text-align: center;">
							<b>Мы получили Ваш вопрос!</b><br><br>
							Мы подготовим ответ, выложим его в <a href="https://t.me/MIT_union">ТГ канале</a> c тегом на ник, указанный при заполнении формы, и дополним базу знаний новым материалом. <br><br>
							<i>Просим обратить внимание, что ответ подготавливается волонтерами сообщества МИТ - Мы ИТ, которые работают на добровольных началах,<br> поэтому дать прогноз по скорости выполнения вашего запроса мы не можем.</i><br><br>
							Следите за нашими анонсами в телеграмм канале и обновлениями на сайте!
						</p>
					</div>
				</div>
			</div>
			<form v-else action="" @submit.prevent="sendForm" method="POST" >
			<div class="shadow sm:rounded-md sm:overflow-hidden">
				<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
				<div >
					<div>
					<label 
						for="company_inn" 
						class="block text-sm font-medium text-gray-700">
						Название компании
					</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input 
							type="text"
							name="company_inn"
							id="company_inn"
							minlength="10"
							v-model="corp_name"
							required
							class="focus:ring-violet-500 focus:border-violet-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
							placeholder="ООО «УНасПроблемы»">
					</div>
					</div>
				</div>
				<div>
					<div>
					<label
						for="company_website"
						class="block text-sm font-medium text-gray-700">
						ИНН
					</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input
							type="number"
							name="company_website"
							id="company_website"
							required
							v-model="corp_inn"
							min="1000000000"
							max="9999999999"
							class="focus:ring-violet-500 focus:border-violet-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
							placeholder="1111111111">
					</div>
					</div>
				</div>
				<div >
					<div >
					<label
						for="company_email"
						class="block text-sm font-medium text-gray-700">
						Корпоративный Email
					</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input
							type="email"
							name="company_email"
							id="company_email"
							v-model="corp_email"
							required
							class="focus:ring-violet-500 focus:border-violet-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
							placeholder="hello@mit-union.ru">
					</div>
					</div>
				</div>
				<div>
					<div >
					<label
						for="company_tg"
						class="block text-sm font-medium text-gray-700">
						Ник в Телеграмме (туда пришлем ответ)
					</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input
							type="text"
							name="company_tg"
							id="company_tg"
							required
							v-model="corp_tg"
							minlength="4"
							class="focus:ring-violet-500 focus:border-violet-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
							placeholder="@user_in_telegram">
					</div>
					</div>
				</div>
				<div>
					<label for="about" class="block text-sm font-medium text-gray-700">
						Подробно опишите проблему и в чем вопрос
					</label>
					<div class="mt-1">
					<textarea v-model="corp_text" required minlength="150" id="about" name="about" rows="3" class="shadow-sm focus:ring-violet-500 focus:border-violet-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Нормально все было и тут БАЦ!" style="border: 1px solid lightgray; padding: 1%;"></textarea>
					</div>
				</div>
				<div style="margin-top: 4px;">
					<label
						class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
						for="uploadFile"
					>
						Приложить файл (PNG или JPG до 2MB)
					</label>
					<input
						class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
						aria-describedby="user_avatar_help"
						type="file"
						id="uploadImg"
						name="uploadImg"
						accept=".png, .jpg, .jpeg"
						@change="processFile($event)"
						style="font-size: 12px; width: 100%;"
					>
					<img :src="srcImg" alt="">
				</div>
				</div>
				<div class="px-4 py-3 bg-gray-50 text-right sm:px-6 inline-flex justify-center" style="width: 100%;">
					<a href="https://t.me/MIT_union" target="_blank" style="margin-right: auto;">
						<img src="/images/logo.svg" style=" max-width: 102px; " />
					</a>
					<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
						Отправить
					</button>
				</div>
			</div>
			</form>
		</div>
		<p class="footer"><a href="https://spcode.ru/" target="_blank">Разработка сайта - «СпектрКод»</a></p>
	</div>
  </template>
  
  <script setup>

	const clientAPI = useSupabaseClient()

	const loading = ref(false)
	const loadingFile = ref(null)
	const nameFile = ref('')
	const validFile = ref(false)
	const srcImg = ref('')

	const corp_name = ref('')
	const corp_inn = ref('')
	const corp_email = ref('')
	const corp_tg = ref('')
	const corp_text = ref('')

	const isSent = ref(false)

	const processFile = (event) => {
		console.log(event.target.files[0].type)
		if (((event.target.files[0].size/1024).toFixed(0)) > 2000) {
			alert("Размер файла не должен превышать 2mb!");
		} else {
			loadingFile.value = event.target.files[0]
			nameFile.value = Date.now() + event.target.files[0].name.replace(/[^\w\d\.\-]/g, '_')
			validFile.value = true
			uploadFile()
		}
	}
	const uploadFile = async () => {
		loading.value = true
		try {
			const { data, error } = await clientAPI.storage
				.from('mit-form')
				.upload(nameFile.value, loadingFile.value)
			const { data: publicUrl } = await clientAPI.storage
				.from('mit-form')
				.getPublicUrl(data.path)
			console.log(publicUrl.publicUrl)
			srcImg.value = publicUrl.publicUrl
		} catch (error) {
			alert(error)
		}
		loading.value = false
	}
	const sendForm = async () => {
		loading.value = true
		try {
			const { data, error } = await clientAPI
				.from('mit_form_question_accreditation')
					.insert([
						{ 
							name: corp_name.value,
							inn: corp_inn.value,
							email: corp_email.value,
							tg: corp_tg.value,
							text: corp_text.value,
							img: srcImg.value
						}
					])
			isSent.value = true
		} catch (error) {
			alert('Произошла ошибка, попробуйте перезагрузить страницу и отправить форму заново.')
		}
		loading.value = false
	}
  </script>
  <style lang="scss" scoped>
  p.footer {
	color: white;
	font-size: 12px;
	text-align: center;
	margin-top: 12px;
	margin-bottom: 24px;
  }
  a {
	transition: .1s;
	&:hover {
		color: violet;
	}
  }
  input:focus, textarea:focus { 
	outline: none;
  }
  </style>