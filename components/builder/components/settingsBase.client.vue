<template>
    <div
        v-if="!!bufData && Object.keys(bufData).length > 0 && !!settings"
        style="display: block; border: 5px solid violet; padding: 5%; margin-bottom: 20px;"
    >
		<div style="display: flex; gap: 8px; align-items: flex-end; margin-bottom: 24px;">
			<div style="width: 33%">
				<!-- <UiSelect
					label="Автор"
					v-model="bufData.autor"
					read-text="text"
					read-value="value"
					:options='options'
				/> -->
			</div>
			<div style="width: 33%">
				<p>Дата публикации</p>
				<input
					style="height: 32px; width: 100%;"
					type="date"
					v-model="bufData.date"
					@change="mapDate"
				/>
			</div>
			<div style="width: 33%">
				<UiSelect
					label="Выбрать тег"
					v-model="bufData.tags"
					read-text="text"
					read-value="value"
					:options='tags'
				/>
			</div>
		</div>
		<textarea rows="4" style="width: 100%;" v-model="bufData.title">Заголовок статьи</textarea>
    </div>
</template>
<script setup>
import UiSelect from "../ui/select.vue";

const props = defineProps({
    data: {
        type: Object
    },
	pageUid: {
		type: String
	}
})
const emit = defineEmits(['update:data'])

const category = useBuilderStatesCategoryPagesBuilder()

const bufData = computed({
	get() {
		return props.data
	},
	set(newValue) {
		if (category.value == 'base') emit('update:data', newValue);
	},
});

const mapDate = () => {
	setTimeout(() => bufData.value.datecode = new Date(bufData.value.date).getTime(), 0)
}

if (Object.keys(bufData.value).length == 0) {
    bufData.value = {
		"date": Date.now(),
		"datecode": Date.now(),
		"autor": 0,
		"tags": 0,
		"title": "Заголовок статьи"
    }
}

const {data: settings} = await useFetch(`/api/getSettings/?key=base`, { server: true })
// const options = Object.entries(settings.value.autor).map(item => {return {"value": Number(item[0]), "text": item[1]}})
const tags = Object.entries(settings.value.tags).map(item => {return {"value": Number(item[0]), "text": item[1]}})
</script>
<style lang="scss" scoped>
	.settings-button{
		padding: 4px 4px;
		background: linear-gradient(90deg, #8160D1 0%, #C010EF 99.78%);
		border-radius: 6px;
		color: #ffffff;
		font-family: 'Inter';
		font-weight: 600;
		font-size: 12px;
		line-height: 20px;
		border-width: 0;
		&:hover {
			background: linear-gradient(90deg, #C010EF 0%, #8160D1 99.78%);
		}
	}
</style>
