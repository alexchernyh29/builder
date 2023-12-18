<template>
    <div class="admin mit_wrapper" v-if="open == '105105'">
      <select
        class="admin__select"
        style="cursor: pointer; max-width: 130px; border: 1px solid grey; margin-bottom: 20px;"
        v-model="currentStatus"
      >
        <option 
          v-for="(el, n) in statusList"
          :key="n"
          :value="el.statusValue"
        >
          {{el.statusName}}
        </option>
      </select> 
		<div v-for="(item, i) in intros.data" :key="i" v-show="item.status==currentStatus">
			<details>
				<summary class="faq-question">
          <div class="faq-question__wrap">
            <p>ИНН: {{ item.inn }} - {{ item.company }}</p>
            <div class="faq-question__wrap-status">
              <p v-if="item.status === 'new'">Статус: Новая</p>
              <p v-if="item.status === 'rejected'">Статус: Отклонена</p>
              <p v-if="item.status === 'processing'">Статус: В обработке</p>
              <p v-if="item.status === 'deferred'">Статус: Отложена</p>
              <p v-if="item.status === 'processed'">Статус: Обработана</p>
            </div>
          </div>
        </summary>
				<div class="faq-answer">
					<div>id: {{ item.id }} - {{ item.email }} - отправлено {{ item.created_at }}</div>
          <h2 style="margin-top: 10px;">Основная информация:</h2>
          <div>Название организации: {{ item.company }}</div>
          <div>Контактный телефон: {{ item.phone }}</div>
          <div>Полное наименование организации с указанием организационно-правовой формы: {{ item.meta?.full_name_company }}</div>
          <div>Полное название организации (лат) {{ item.meta?.full_name_company_lt }}</div>
          <div>Год образования организации: {{ item.meta?.years}}</div>
          <div>Почтовый адрес организации (с индексом): {{ item.meta?.postal_address }}</div>
          <div>Юридический адрес организации: {{ item.meta?.legal_address }}</div>
          <div>Фактический адрес организации: {{ item.meta?.fact_address }}</div>
          <div>Сайт в Интернете: {{ item.meta?.website }}</div>
          <h2 style="margin-top: 10px;">Руководитель организации:</h2>
          <div>ФИО руководителя: {{ item.name }}</div>
          <div>Полное название должности: {{ item.meta?.name_position }}</div>
          <div>Телефон руководителя: {{ item.meta?.name_phone }}</div>
          <div>E-mail руководителя: {{ item.meta?.name_email }}</div>
          <h2 style="margin-top: 10px;">Контактное лицо (Представитель):</h2>
          <div>Фамилия имя отчество Представителя: {{ item.meta?.representative_name }}</div>
          <div>Полное название должности Представителя: {{ item.meta?.representative_position }}</div>
          <div>Телефон Представителя: {{ item.meta?.representative_phone }}</div>
          <div>E-mail Представителя: {{ item.meta?.representative_email }}</div>
          <h2 style="margin-top: 10px;">Характеристика организации:</h2>
          <div>Примерная численность сотрудников: {{ item.meta?.number_stuff }}</div>
          <div>Направление деятельности: {{ item.meta?.area_activity }}</div>
          <div>Выручка за 2022 г. в тыс. рублей: {{ item.meta?.revenue }}</div>
          <div>Позиционирование организации: {{ item.meta?.type_company }}</div>
					<div>
						<a :href="item.doc1" target="_blank">Анкета кандидата</a> - <a :href="item.doc2" target="_blank">Заявление кандидата</a> - <a :href="item.doc3" download>Архив документов</a>
					</div>
          <button class="button new" @click.prevent="updateStatus(item.id, 'new')">Новая</button>
          <button class="button rejected" @click.prevent="updateStatus(item.id, 'rejected')">Отклонено</button>
          <button class="button processing" @click.prevent="updateStatus(item.id, 'processing')">В обработке</button>
          <button class="button deferred" @click.prevent="updateStatus(item.id, 'deferred')">Отложена</button>
          <button class="button processed" @click.prevent="updateStatus(item.id, 'processed')">Обработана</button>
				</div>
			</details>
		</div>
    </div>
</template>
<script setup>
const h1Page = useH1Page()
h1Page.value = 'Заявки на вступление'
const currentStatus= ref('new')
const statusList = [
  {
    statusValue: 'new',
    statusName: 'Новая'
  },
  {
    statusValue: 'rejected',
    statusName: 'Отклонено'
  },
  {
    statusValue: 'processing',
    statusName: 'В обработке'
  },
  {
    statusValue: 'deferred',
    statusName: 'Отложена'
  },
  {
    statusValue: 'processed',
    statusName: 'Обработана'
  }
]

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const { data, error } = await supabase
	.from('admins')
		.select('*')
			.eq('user_uid', user.value?.id ?? '')
const accessAllowed = ref(data.length > 0)

const intros = ref()
intros.value = await supabase
		.from('form_intro')
			.select('*')
      .order('created_at', { ascending: false })

const updateStatus = async (id , status) => {
  try {
    const statusUpdate = await supabase
    .from('form_intro')
      .update({ status: status })
        .eq('id', id)
    
    intros.value = await supabase
    .from('form_intro')
      .select('*')
      .order('created_at', { ascending: false })

    alert(`Заявка с номером ${id} перемещена в раздел ${status}`)
  } catch (error) {
    console.log(error)
  }
}
const open = ref(false) 
onMounted(() => {
  open.value = prompt('скажи пароль?', 1);
})
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/main.scss';
@import "./assets/scss/mainpage.scss";
.admin {
	padding: 48px;
	width: 100%;
	height: 100%;
  min-height: 45vh;
	background: $white;
	border-radius: 60px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 0px;
	font-size: 16px;
	line-height: 1.5;
}

.faq-answer a {
  cursor: pointer !important;
  color: violet !important;
}
.faq-answer {
  font-family: 'Inter';
  font-weight: 400;
  background-color: #F3F4F6;
  color: #1B1B29;
  @include adaptiv-size(34, 16, 14);
  @include adaptiv-height(54, 26, 22);
}
details{
    display: block;
    background: #F3F4F6;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 8px;
    border: 2px solid #921CBC;
}
.faq-question::-webkit-details-marker{display:none;}
.faq-question::-moz-list-bullet{list-style-type:none;}
.faq-question::marker{display:none;} 
.faq-question {
    display:block;
    padding: 24px 72px 24px 24px;
    font-family: 'Inter';
    font-weight: 500;
    @include adaptiv-size(36, 18, 16);
    @include adaptiv-height(56, 28, 24);
    color: #1B1B29;
    cursor: pointer;
    position: relative;
    background: #F3F4F6;
    border-radius: 16px;
}
.faq-question:before {  
  top: 24px;
  right: 24px;
  color: transparent;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=") no-repeat 50% 50% / 1em 1em;
  width: 24px;
  height: 24px;
  content: "";
  position: absolute;
  transition: transform 0.3s;
}
details[open] > .faq-question:before {
  transform: scale(1,-1);
}
.faq-question ~ * {
   padding: 0px 24px 24px;
}
details[open] .faq-question ~ *{ 
  animation: sweep 0.5s ease-in-out;
}
@keyframes sweep {
  0%    {opacity: 0;}
  100%  {opacity: 1;}
}
@media only screen and (max-width: 768px) {
	.faq-question {
		font-size: 16px;
		line-height: 24px;
	}
}
@media only screen and (max-width: 390px) {
	.faq-question {
		font-size: 16px;
		line-height: 24px;
    padding: 14px 50px 14px 14px;
	}
  .faq-question ~ * {
    padding: 0px 18px 24px;
  }
}

.faq-question__wrap{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.faq-question__wrap-status{
  display: flex;
  flex-direction: row;
}

.button {
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px 16px;
  background: #921CBC;
  color: #FFFFFF;
  border-radius: 60px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
}
.rejected {
  background: #A93838;
}
.processing {
  background: #3873A9;
}
.deferred {
  background: #A99038;
}
.processed {
  background: #38A958;
}
</style>
