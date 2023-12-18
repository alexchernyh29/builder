<template>
	<div class="control-line" style="display: flex;" :class="{'horizontal': pageData!= null}">
		<span class="line-title">Выбрать страницу</span>
		<select
			:disabled="loading"
			style="cursor: pointer;"
			@change="selectCategory($event.target.value)"
			class="ui-select"
		>
			<option disabled :selected="category === null">Категория</option>
			<option 
				v-for="(item, n) in listCategory"
				:key="n"
				:value="item.value"
				:selected="item.value === category"
			>
				{{item.text}}
			</option>
		</select>
		<select
			:disabled="loading"
			style="cursor: pointer;"
			@change="selectPage($event.target.value)"
			class="ui-select"
		>
			<option disabled :selected="page === null">Страница</option>
			<option 
				v-for="(item, n) in listPage.sort()"
				:key="n"
				:value="item"
				:selected="item === page"
			>
				{{item}}
			</option>
		</select>
		<span class="line-text">или</span>
		<button
			@click.prevent="createPage"
			class="create-page"
		>
			Создать страницу
		</button>
		<div class="actions-page">
			<div
				v-if="!!pageData"
				class="settings-page"
			>
				Настройки страницы
				<div class="settings-list">
					<div v-if="pageData">
						<!-- <UiSelect
							label="Изменить категорию"
							v-model="pageData.category"
							read-text="text"
							read-value="value"
							style="margin-top: 10px;"
							:options="listCategory"/> -->
						<UiInput style="margin-top: 10px;" label="Url страницы" v-model="pageData.path"></UiInput>
						<label style="display: flex; justify-content: flex-start; margin-top: 10px;">
							<span>Доступ по подписке:</span>
							<input
								v-model="pageData.hidden"
								type="checkbox"
								style="margin-bottom: 16px; width: 20px; margin-left: 8px;"
						/>
						</label>
					</div>
				</div>
			</div>
			<button
				class="save-page"
				@click.prevent="savePage"
				v-show="!loading"
				v-if="!!pageData"
			>
				Сохранить
			</button>
			<div
				v-if="!!pageData"
				class="more-page"
			>
				Еще
				<svg width="20" height="20" style="margin-left: 10px;" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.07507 16.4754C9.07507 15.9645 9.48921 15.5504 10.0001 15.5504C10.5109 15.5504 10.9251 15.9645 10.9251 16.4754C10.9251 16.9863 10.5109 17.4004 10.0001 17.4004C9.48921 17.4004 9.07507 16.9863 9.07507 16.4754Z" fill="#413A53"/>
					<path d="M9.07507 10.0002C9.07507 9.48935 9.48921 9.07521 10.0001 9.07521C10.5109 9.07521 10.9251 9.48935 10.9251 10.0002C10.9251 10.5111 10.5109 10.9252 10.0001 10.9252C9.48921 10.9252 9.07507 10.5111 9.07507 10.0002Z" fill="#413A53"/>
					<path d="M9.07507 3.5254C9.07507 3.01453 9.48921 2.60039 10.0001 2.60039C10.5109 2.60039 10.9251 3.01453 10.9251 3.5254C10.9251 4.03626 10.5109 4.45041 10.0001 4.45041C9.48921 4.45041 9.07507 4.03626 9.07507 3.5254Z" fill="#413A53"/>
					<path d="M9.07507 16.4754C9.07507 15.9645 9.48921 15.5504 10.0001 15.5504C10.5109 15.5504 10.9251 15.9645 10.9251 16.4754C10.9251 16.9863 10.5109 17.4004 10.0001 17.4004C9.48921 17.4004 9.07507 16.9863 9.07507 16.4754Z" stroke="#413A53" stroke-width="1.5"/>
					<path d="M9.07507 10.0002C9.07507 9.48935 9.48921 9.07521 10.0001 9.07521C10.5109 9.07521 10.9251 9.48935 10.9251 10.0002C10.9251 10.5111 10.5109 10.9252 10.0001 10.9252C9.48921 10.9252 9.07507 10.5111 9.07507 10.0002Z" stroke="#413A53" stroke-width="1.5"/>
					<path d="M9.07507 3.5254C9.07507 3.01453 9.48921 2.60039 10.0001 2.60039C10.5109 2.60039 10.9251 3.01453 10.9251 3.5254C10.9251 4.03626 10.5109 4.45041 10.0001 4.45041C9.48921 4.45041 9.07507 4.03626 9.07507 3.5254Z" stroke="#413A53" stroke-width="1.5"/>
				</svg>
				<div class="more-list" v-if="!!pageData">
					<button
						@click.prevent="clonePage"
						v-if="!!pageData"
						class="more-item"
					>
						Копировать страницу
					</button>
					<button
						class="remove-page"
						@click.prevent="removePage"
						v-show="!loading"
					>
						Удалить
					</button>
					<button
						@click.prevent="editingMeta = true"
						class="edit-meta"
						v-show="!loading"
						>
							Редактировать meta
					</button>
					<button
						class="prev-loc"
						@click.prevent="resetDraft"
						v-show="!loading"
					>
						Сбросить изменения
					</button>
					<button
						class="prev-loc"
						@click.prevent="releaseDraft"
						v-show="!loading"
						style="color: green;"
					>
						Релиз на продакшен
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import UiInput from "../../../components/ui/input.vue";
import UiSelect from "../../../components/ui/select.vue";

const pageData = useBuilderStatesPageData()
const category = useBuilderStatesCategoryPagesBuilder()
const page = useBuilderStatesPagePath()
const listCategory = useBuilderStatesListCategory()
const listPage = useBuilderStatesListPagesInCategory()
const editingComponent = useBuilderStatesEditingComponent()
const loading = useBuilderStatesLoading()
const pagePath = useBuilderStatesPagePath()
const editingMeta = useBuilderStatesEditingMeta()

const clonePage = async () => {
	try {
		loading.value = true

		let objForClonePage = JSON.parse(JSON.stringify(pageData.value))
		delete objForClonePage.id
		delete objForClonePage.created_at

		const bufPath = await useBuilderFuncCreatePage(objForClonePage)

		await selectCategory(category.value)
		await selectPage(bufPath)
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
}

const createPage = async () => {
	loading.value = true
	try {
		let objForNewPage = useBuilderStatesDefaultPageData()
		const pathPage = await useBuilderFuncCreatePage(objForNewPage)
		await selectCategory(category.value)
		await selectPage(pathPage)
	}
	catch (error) {
		alert(error)
	}
	loading.value = false
}

const selectCategory = async (event) => {
	loading.value = true
	editingComponent.value = false
	category.value = event
	listPage.value = await useBuilderFuncGetPagesPathInCategory()
	pageData.value = null
	page.value = null
	loading.value = false
}

const selectPage = async (event) => {
	loading.value = true
	editingComponent.value = false
	const buffPage = await useBuilderFuncGetPageFromBD(event)
	page.value = event
	pageData.value = buffPage
	loading.value = false
}

const checkUrl = async () => {
	try {
		const checkingPath = await useBuilderFuncCheckUrl()
		return checkingPath
	} catch (error) {
		alert('An error occurred while checking the uniqueness of the url! But the page will be saved. Please report this bug to the tofu team!')
		return false
	}
}

const savePage = async () => {
	loading.value = true
	if (await checkUrl()) await useBuilderFuncSavePage()
	alert("Page changes saved")
	loading.value = false
}

const removePage = async () => {
	loading.value = true
	await useBuilderFuncRemovePage()
	listPage.value = await useBuilderFuncGetPagesPathInCategory()
	pagePath.value = null
	loading.value = false
}

const resetDraft = () => {
	try {
		pageData.value.draft = JSON.parse(JSON.stringify(pageData.value.ru))
		alert('Reset is done')
	} catch (error) {
		alert(error)
	}
}

const releaseDraft = async () => {
	try {
		pageData.value.ru = JSON.parse(JSON.stringify(pageData.value.draft))
		pageData.value.ab = checkActiveAbTestInPage()
		loading.value = true
		if (await checkUrl()) await useBuilderFuncSavePage()
		if (await checkUrl()) await useBuilderFuncSaveProd()
		alert('Release is done!')
	} catch (error) {
		alert(error)
	}
	loading.value = false
}

const checkActiveAbTestInPage = () => {
	return !!pageData.value.ru.filter(item => {if ( item.props?.['ab'] && item.props['ab'] != '0') return item}).length
}

</script>
<style lang="scss" scoped>
@import "../../../assets/scss/builder.scss";
</style>
